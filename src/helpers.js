const {
    speed,
    range
} = require('./variables')

module.exports = {
    getSpeed = (speedId = 0) => speed[parseInt(speedId)] || '',
    getRange = (rangeId = 0) => range[parseInt(rangeId)] || ''
}