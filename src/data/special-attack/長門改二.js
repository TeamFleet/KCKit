const { 長門改二 } = require('../ship-ids');

module.exports = {
    name: '一斉射かッ…胸が熱いな！',
    ship: {
        isID: 長門改二,
    },
    fleet: {
        ships: {
            1: {
                isID: 長門改二,
            },
            2: {
                isBB: true,
            },
        },
        formation: ['echelon', 'cruising2'],
    },
};
