const userService = require('../service/User');

 exports.register = function(req, res, next) {
    userService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}

exports.getAll = function(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err)); 
}

exports.getCurrent = function(req, res, next) {
    userService.getById(req.uid)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
} 

exports.getById = function(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

exports.update = function(req, res, next) {
    userService.update(req.params.id,  req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

exports._delete = function(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
} 