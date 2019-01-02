const {
    BB_KongouClass2ndRemodel,
    rn_BB, rn
} = require('../../ships')

module.exports = {
    32: {
        fixed: 3,
        modifier: 1.2,
        conditions: [
            {
                icons: ['3:300', '15:191'],
                ship: {
                    isID: [
                        ...rn_BB,
                        ...BB_KongouClass2ndRemodel,
                    ],
                },
                equipments: {
                    hasID: [
                        300, // 16inch Mk.I三連装砲改＋FCR type284
                        191, // QF 2ポンド8連装ポンポン砲
                    ],
                },
            },
            {
                icons: ['15:301', '15:191',],
                ship: {
                    isID: [
                        ...rn,
                        ...BB_KongouClass2ndRemodel,
                    ],
                },
                equipments: {
                    hasID: [
                        301, // 20連装7inch UP Rocket Launchers
                        191, // QF 2ポンド8連装ポンポン砲
                    ],
                },
            },
            {
                icons: ['15:301', '15:301',],
                ship: {
                    isID: [
                        ...rn,
                        ...BB_KongouClass2ndRemodel,
                    ],
                },
                equipments: {
                    hasID_301: 2 // 20連装7inch UP Rocket Launchers
                },
            },
        ]
    }
}
