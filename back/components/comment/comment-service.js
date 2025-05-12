require('dotenv').config();
const commentModel = require('./comment-model');

class commentService {
    // async set(obj) {
    //     await commentModel.findOneAndUpdate(
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
    //     const games = await commentModel.find()
    //         .sort({
    //             snake: -1,
    //         })
    //         .limit(30);
    //     return games;
    // }
}

module.exports = new commentService();