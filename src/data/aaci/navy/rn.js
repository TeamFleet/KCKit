const {
    rn
} = require('../../ships')

module.exports = {
    32: {
        fixed: 3,
        modifier: 1.2,
        icons: ['15:301', '15:191'],
        ship: {
            isID: [
                ...rn,
                78, 209, 149, // 金剛
            ],
        },
        equipments: {
            hasID: [301, 191],
        }
    }
}
