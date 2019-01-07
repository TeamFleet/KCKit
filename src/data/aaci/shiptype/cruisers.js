module.exports = {
    // 摩耶・改二
    10: {
        fixed: 8,
        modifier: 1.65,
        icons: [16, '15+', '11AA'],
        ship: {
            isID: 428
        },
        equipments: {
            hasHAMount: true,
            hasAAGunCD: true,
            hasAARadar: true
        }
    },
    
    // 摩耶・改二
    11: {
        fixed: 6,
        modifier: 1.5,
        icons: [16, '15+'],
        ship: {
            isID: 428
        },
        equipments: {
            hasHAMount: true,
            hasAAGunCD: true
        }
    },

    // 天龍・改二
    // Gotland改
    30: {
        fixed: 3,
        modifier: 1.3,
        icons: [16, 16, 16],
        ship: {
            isID: [
                477, // 天龍・改二
                579, // Gotland改
            ]
        },
        equipments: {
            hasHAMount: 3,
        }
    },

    // 天龍・改二
    31: {
        fixed: 2,
        modifier: 1.25,
        icons: [16, 16],
        ship: {
            isID: 477
        },
        equipments: {
            hasHAMount: 2,
        }
    },

    // 龍田・改二
    24: {
        fixed: 3,
        modifier: 1.25,
        icons: [16, '15[3,8]'],
        ship: {
            isID: 478
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: {
                hasStat: {
                    aa: [3, 8]
                }
            },
        }
    },

    // 五十鈴・改二
    14: {
        fixed: 4,
        modifier: 1.45,
        icons: [16, 15, '11AA'],
        ship: {
            isID: 141
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true,
            hasAARadar: true
        }
    },
    
    // 五十鈴・改二
    15: {
        fixed: 3,
        modifier: 1.3,
        icons: [16, 15],
        ship: {
            isID: 141
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true
        }
    },
    
    // 由良・改二
    21: {
        fixed: 5,
        modifier: 1.45,
        icons: [16, '11AA'],
        ship: {
            isID: 488
        },
        equipments: {
            hasHAMount: true,
            hasAARadar: true
        }
    },

    // 鬼怒・改二
    19: {
        fixed: 5,
        modifier: 1.45,
        icons: ['16-', '15+'],
        ship: {
            isID: 487
        },
        equipments: {
            hasHAMount: {
                hasStat: {
                    aa: [0, 7]
                }
            },
            hasAAGunCD: true,
            // hasHAMountAAFD: false,
            // hasHAMount: true,
            // hasAAGunCD: true
        }
    },

    // 鬼怒・改二
    20: {
        fixed: 3,
        modifier: 1.25,
        icons: ['15+'],
        ship: {
            isID: 487
        },
        equipments: {
            hasAAGunCD: true
        }
    },

    // Gotland改
    33: {
        fixed: 3,
        modifier: 1.25,
        icons: [16, 15],
        ship: {
            isID: [
                579, // Gotland改
            ]
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true
        }
    },
}
