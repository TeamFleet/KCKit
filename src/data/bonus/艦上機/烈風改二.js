/**
 * @module
 * 装备额外属性收益
 * 336. **烈風改二**
 */

const {
    CV_AkagiClass2ndRemodel,
    CV_KagaClass2ndRemodel,
} = require('../../ships');
const { 赤城改, 加賀改 } = require('../../ship-ids');

module.exports = [
    // ========================================================================
    // 烈風改二
    // https://wikiwiki.jp/kancolle/%E7%83%88%E9%A2%A8%E6%94%B9%E4%BA%8C
    // ========================================================================
    {
        equipment: 336,
        ship: {
            isID: [赤城改, 加賀改],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        },
    },
    {
        equipment: 336,
        ship: {
            isID: [...CV_AkagiClass2ndRemodel, ...CV_KagaClass2ndRemodel],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 1,
        },
    },
];
