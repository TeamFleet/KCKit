const {
    BB_IseClassRemodel,
    BB_IseClassRemodelAll,
} = require('../../ships')

module.exports = {
    4: {
        fixed: 6,
        modifier: 1.5,
        icons: [3, 12, 30, '11AA'],
        ship: {
            isBB: true,
            hasSlotMin: 4
        },
        equipments: {
            hasLargeCaliber: true,
            hasType3Shell: true,
            hasAAFD: true,
            hasAARadar: true
        }
    },

    6: {
        fixed: 4,
        modifier: 1.45,
        icons: [3, 12, 30],
        ship: {
            isBB: true,
            hasSlotMin: 3
        },
        equipments: {
            hasLargeCaliber: true,
            hasType3Shell: true,
            hasAAFD: true
        }
    },

    // 伊勢・改
    // 日向・改
    25: {
        fixed: 7,
        modifier: 1.55,
        icons: ['15:274', '11AA', 12],
        ship: {
            isID: BB_IseClassRemodel
        },
        equipments: {
            hasID: 274,
            hasAARadar: true,
            hasType3Shell: true,
        }
    },

    // 武蔵・改二
    26: {
        fixed: 6,
        modifier: 1.4,
        icons: ['16:275', '11AA'],
        ship: {
            isID: [546]
        },
        equipments: {
            hasID: 275,
            hasAARadar: true,
        }
    },

    // 伊勢・改
    // 伊勢・改二
    // 日向・改
    // 武蔵・改
    // 武蔵・改二
    28: {
        fixed: 4,
        modifier: 1.4,
        icons: ['15:274', '11AA'],
        ship: {
            isID: [...BB_IseClassRemodelAll, 148, 546]
        },
        equipments: {
            hasID: [274],
            hasAARadar: true,
        }
    },
}
