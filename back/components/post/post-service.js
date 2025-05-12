require('dotenv').config();
const postModel = require('./post-model');

class postService {
    // async set(obj) {
    //     await postModel.findOneAndUpdate(
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
    //     const games = await postModel.find()
    //         .sort({
    //             snake: -1,
    //         })
    //         .limit(30);
    //     return games;
    // }
}

module.exports = new postService();