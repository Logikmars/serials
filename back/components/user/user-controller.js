const userService = require('./user-service');
require('dotenv').config();
const jwt = require('jsonwebtoken');

class userController {
    async login(req, res, next) {
        try {

            const { email, password } = req.body;
            const {
                user,
                accessToken,
                refreshToken,
            } = await userService.login(email, password);

            const userObject = user.toObject(); // Преобразуем документ в объект
            delete userObject.password; // Теперь delete работает
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: true, // Только HTTPS
                sameSite: 'Strict'
            });

            return res.json({ user: userObject, accessToken });

        } catch (e) {
            next(e);
        }
    }
    async register(req, res, next) {
        try {
            const { email, password } = req.body;
            const {
                user,
                accessToken,
                refreshToken,
            } = await userService.register(email, password);
            const userObject = user.toObject(); // Преобразуем документ в объект
            delete userObject.password; // Теперь delete работает

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: true, // Только HTTPS
                sameSite: 'Strict'
            });
            return res.json({ user: userObject, accessToken });
        } catch (e) {
            next(e);
        }
    }
    async refresh(req, res, next) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);


        const decoded = jwt.verify(refreshToken, process.env.RFR_SECRET);
        const user = await userService.me(decoded.email); // Дожидаемся запроса в БД
        if (!user) return res.status(403).json({ message: 'User not found' });

        const { accessToken, refreshToken: newRefreshToken } = userService.generageTokens(user.email);

        // Обновляем refreshToken в куках
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
        });

        return res.json({ accessToken, user });
    }


    async logout(req, res, next) {
        res.clearCookie('refreshToken', { httpOnly: true, secure: true, sameSite: 'Strict' });
        res.json('ok');
    }


}

module.exports = new userController();