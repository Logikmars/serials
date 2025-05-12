const commentService = require('./comment-service');

class commentController {
    // async set(req, res, next) {
    //     try {
    //         const { data } = req.body;
    //         await commentService.set(data);
    //         return res.json('ok');
    //     } catch (e) {
    //         next(e);
    //     }
    // }

    // async get(req, res, next) {
    //     try {
    //         const { type } = req.query;

    //         const scores = await commentService.get(type);
    //         return res.json(scores);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
}

module.exports = new commentController();