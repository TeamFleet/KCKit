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
                icons: ['15:191', '15:301'],
                ship: {
                    isID: [
                        ...rn,
                        ...BB_KongouClass2ndRemodel,
                    ],
                },
                equipments: {
                    hasID: [191, 301],
                },
            },
            {
                icons: ['15:191', '3:300'],
                ship: {
                    isID: [
                        ...rn_BB,
                        ...BB_KongouClass2ndRemodel,
                    ],
                },
                equipments: {
                    hasID: [191, 300],
                },
            }
        ]
    }
}
