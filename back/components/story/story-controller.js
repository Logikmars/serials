const storyService = require('./story-service');

class storyController {
    // async set(req, res, next) {
    //     try {
    //         const { data } = req.body;
    //         await storyService.set(data);
    //         return res.json('ok');
    //     } catch (e) {
    //         next(e);
    //     }
    // }

    // async get(req, res, next) {
    //     try {
    //         const { type } = req.query;

    //         const scores = await storyService.get(type);
    //         return res.json(scores);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
}

module.exports = new storyController();