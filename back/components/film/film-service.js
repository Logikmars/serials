require('dotenv').config();
const filmModel = require('./film-model');

class filmService {
    // async set(obj) {
    //     await filmModel.findOneAndUpdate(
    //         { meows: obj },
    //         {
    //             wallet: 123,
    //             balance: 321,
    //         },
    //         { upsert: true }
    //     );
    //     return true;
    // }

    // async get(type) {
    //     const games = await filmModel.find()
    //         .sort({
    //             snake: -1,
    //         })
    //         .limit(30);
    //     return games;
    // }
}

module.exports = new filmService();