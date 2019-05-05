const maxSlotCount = 5

module.exports = (_ship) => {
    const { slot = [] } = require('./ship')(_ship)
    const result = []

    for (let i = 0; i < maxSlotCount; i++) {
        result[i] = slot[i] || 0
    }

    return result
}
