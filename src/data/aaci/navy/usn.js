const { CL_Atlanta, DD_Fletcher } = require('../../ship-classes');

module.exports = {
    /**************************************************************************
     * Fletcher class
     *************************************************************************/

    34: {
        fixed: 7,
        modifier: 1.6,
        icons: ['16:308', '16:308'],
        ship: {
            isClass: DD_Fletcher
        },
        equipments: {
            hasID_308: 2 // 5inch単装砲 Mk.30改＋GFCS Mk.37
        }
    },
    35: {
        fixed: 6,
        modifier: 1.55,
        conditions: [
            {
                icons: ['16:308', '16:313'],
                ship: {
                    isClass: DD_Fletcher
                },
                equipments: {
                    hasID_308: 1, // 5inch単装砲 Mk.30改＋GFCS Mk.37
                    hasID_313: 1 // 5inch単装砲 Mk.30改
                }
            },
            {
                icons: ['16:308', '16:284'],
                ship: {
                    isClass: DD_Fletcher
                },
                equipments: {
                    hasID_308: 1, // 5inch単装砲 Mk.30改＋GFCS Mk.37
                    hasID_284: 1 // 5inch単装砲 Mk.30
                }
            }
        ]
    },
    36: {
        fixed: 6,
        modifier: 1.55,
        icons: ['16:313', '16:313', '11:307'],
        ship: {
            isClass: DD_Fletcher
        },
        equipments: {
            hasID_313: 2, // 5inch単装砲 Mk.30改
            hasID_307: 1 // GFCS Mk.37
        }
    },
    37: {
        fixed: 4,
        modifier: 1.55,
        icons: ['16:313', '16:313'],
        ship: {
            isClass: DD_Fletcher
        },
        equipments: {
            hasID_313: 2 // 5inch単装砲 Mk.30改
        }
    },

    /**************************************************************************
     * Atlanta
     *************************************************************************/
    39: {
        fixed: 10,
        modifier: 1.7,
        icons: ['16:362', '16:363'],
        ship: {
            isClass: CL_Atlanta
        },
        equipments: {
            hasID_362: 1, // 5inch連装両用砲(集中配備)
            hasID_363: 1 // GFCS Mk.37＋5inch連装両用砲(集中配備)
        }
    },
    40: {
        fixed: 10,
        modifier: 1.7,
        conditions: [
            {
                icons: ['16:362', '16:362', '11:307'],
                ship: {
                    isClass: CL_Atlanta
                },
                equipments: {
                    hasID_362: 2, // 5inch連装両用砲(集中配備)
                    hasID_307: 1 // GFCS Mk.37
                }
            },
            {
                icons: ['16:362', '16:363', '11:307'],
                ship: {
                    isClass: CL_Atlanta
                },
                equipments: {
                    hasID_362: 1, // 5inch連装両用砲(集中配備)
                    hasID_363: 1, // GFCS Mk.37＋5inch連装両用砲(集中配備)
                    hasID_307: 1 // GFCS Mk.37
                }
            }
        ]
    },
    41: {
        fixed: 9,
        modifier: 1.65,
        icons: ['16:362', '16:362'],
        ship: {
            isClass: CL_Atlanta
        },
        equipments: {
            hasID_362: 2 // 5inch連装両用砲(集中配備)
        }
    }
};
