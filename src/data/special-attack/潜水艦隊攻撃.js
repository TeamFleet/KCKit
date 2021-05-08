module.exports = {
    name: '潜水艦隊攻撃',
    ship: {
        isType: 17, // 潜水母艦
    },
    fleet: {
        ships: {
            1: {
                isType: 17,
            },
            2: {
                isSS: true,
            },
            3: {
                isSS: true,
            },
        },
        formation: [
            'echelon',
            'line-abreast',
            // 'cruising2',
        ],
    },
};
