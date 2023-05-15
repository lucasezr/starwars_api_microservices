module.exports = (fn) => (req, res, next) =>
fn(req, res).catch((err) => next(err));


// (fn) => (req, res, next) => fn().catch((err) => next(err)); version mas simplificada de lo de arriba
