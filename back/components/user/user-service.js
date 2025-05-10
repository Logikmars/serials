require('dotenv').config();
const userModel = require('./user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class userService {
    async login(email, password) {
        const user = await userModel.findOne({
            email
        });

        if (!user || !await bcrypt.compare(password, user.password)) {
            const error = new Error('Wrong credentials');
            error.statusCode = 404;
            throw error; // Бросаем ошибку
        }

        const { accessToken, refreshToken } = this.generageTokens(email);

        return {
            user,
            accessToken,
            refreshToken,
        };
    }

    async register(email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            email,
            password: hashedPassword
        });
        const { accessToken, refreshToken } = this.generageTokens(email);

        return {
            user,
            accessToken,
            refreshToken,
        };
    }

    generageTokens(email) {
        const accessToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ email }, process.env.RFR_SECRET, { expiresIn: '7d' });

        return {
            accessToken,
            refreshToken
        }
    }

    async me(email) {
        const user = await userModel.findOne({ email }).select('-password')
        return user
    }
}

module.exports = new userService();