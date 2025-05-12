require('dotenv').config();
const storyModel = require('./story-model');

class storyService {
    // async set(obj) {
    //     await storyModel.findOneAndUpdate(
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
    //     const games = await storyModel.find()
    //         .sort({
    //             snake: -1,
    //         })
    //         .limit(30);
    //     return games;
    // }
}

module.exports = new storyService();