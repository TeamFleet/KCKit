const { 陸奥改二 } = require('../ship-ids');

module.exports = {
    name: '長門、いい？ いくわよ！ 主砲一斉射ッ！',
    ship: {
        isID: 陸奥改二,
    },
    fleet: {
        ships: {
            1: {
                isID: 陸奥改二,
            },
            2: {
                isBB: true,
            },
        },
        formation: ['echelon', 'cruising2'],
    },
};
