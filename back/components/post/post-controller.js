const postService = require('./post-service');

class postController {
    // async set(req, res, next) {
    //     try {
    //         const { data } = req.body;
    //         await postService.set(data);
    //         return res.json('ok');
    //     } catch (e) {
    //         next(e);
    //     }
    // }

    // async get(req, res, next) {
    //     try {
    //         const { type } = req.query;

    //         const scores = await postService.get(type);
    //         return res.json(scores);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
}

module.exports = new postController();