const read = require('../controller/read')
const upload = require('../controller/upload')


const direct = (req, res, next) => {
    read()
    next()
}