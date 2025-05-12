const filmService = require('./film-service');

class filmController {
    // async set(req, res, next) {
    //     try {
    //         const { data } = req.body;
    //         await filmService.set(data);
    //         return res.json('ok');
    //     } catch (e) {
    //         next(e);
    //     }
    // }

    // async get(req, res, next) {
    //     try {
    //         const { type } = req.query;

    //         const scores = await filmService.get(type);
    //         return res.json(scores);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
}

module.exports = new filmController();