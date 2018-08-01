const {
    DD_KagerouClassRemodelB
} = require('../../ships')

module.exports = {
    // 秋月型駆逐艦
    1: {
        fixed: 7,
        modifier: 1.7,
        icons: [16, 16, 11],
        ship: {
            isClass: 23
        },
        equipments: {
            hasHAMount: 2,
            hasRadar: true
        }
    },

    // 秋月型駆逐艦
    2: {
        fixed: 6,
        modifier: 1.7,
        icons: [16, 11],
        ship: {
            isClass: 23
        },
        equipments: {
            hasHAMount: true,
            hasRadar: true
        }
    },

    // 秋月型駆逐艦
    3: {
        fixed: 4,
        modifier: 1.6,
        icons: [16, 16],
        ship: {
            isClass: 23
        },
        equipments: {
            hasHAMount: 2
        }
    },

    // 皐月・改二
    18: {
        fixed: 2,
        modifier: 1.2,
        icons: ['15+'],
        ship: {
            isID: 418
        },
        equipments: {
            hasAAGunCD: true
        }
    },

    // 文月・改二
    22: {
        fixed: 2,
        modifier: 1.2,
        icons: ['15+'],
        ship: {
            isID: 548
        },
        equipments: {
            hasAAGunCD: true
        }
    },

    // 霞・改二乙
    16: {
        fixed: 4,
        modifier: 1.4,
        icons: [16, 15, '11AA'],
        ship: {
            isID: 470
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true,
            hasAARadar: true
        }
    },

    // 霞・改二乙
    17: {
        fixed: 2,
        modifier: 1.25,
        icons: [16, 15],
        ship: {
            isID: 470
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true
        }
    },

    // 磯風・乙改
    // 浜風・乙改
    29: {
        fixed: 5,
        modifier: 1.55,
        icons: [16, '11AA'],
        ship: {
            isID: DD_KagerouClassRemodelB
        },
        equipments: {
            hasHAMount: true,
            hasAARadar: true,
        }
    },
}
