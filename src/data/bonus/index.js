const bonusIsSet = require('../../utils/bonus-is-set');

/**
 * 装备额外属性收益
 * @module
 */

// https://wikiwiki.jp/kancolle/%E8%A3%85%E5%82%99#bonus

/**
 * @member {Number} [equipment] 单一装备
 * @member {Object} [equipments] 条件：装备组合
 * @member {Object} ship 条件：匹配的舰娘
 * @member {Object} [bonus] 收益。数字表示可叠加，字符串表示仅单次
 * @member {Object} [bonusCount] 仅当为单一装备时可用：不同装备数量的收益
 * @member {Object} [bonusImprove] 仅当为单一装备时可用：不同改修星级的收益
 * @member {Array} [list] 显示的内容
 */
const dataBonuses = [
    ...require('./小口径主砲/12cm単装砲改二'),
    ...require('./小口径主砲/12.7cm単装高角砲(後期型)'),
    ...require('./小口径主砲/12.7cm連装砲A型'),
    ...require('./小口径主砲/12.7cm連装砲A型改二'),
    ...require('./小口径主砲/12.7cm連装砲A型改三(戦時改修)+高射装置'),
    ...require('./小口径主砲/12.7cm連装砲B型改二'),
    ...require('./小口径主砲/12.7cm連装砲B型改四(戦時改修)+高射装置'),
    ...require('./小口径主砲/12.7cm連装砲C型改二'),
    ...require('./小口径主砲/12.7cm連装砲D型改二'),
    ...require('./小口径主砲/5inch単装砲 Mk.30改'),
    ...require('./小口径主砲/5inch単装砲 Mk.30改+GFCS Mk.37'),
    ...require('./小口径主砲/130mm B-13連装砲'),

    ...require('./中口径主砲/14cm連装砲'),
    ...require('./中口径主砲/14cm連装砲改'),
    ...require('./中口径主砲/Bofors 15.2cm連装砲 Model 1930'),
    ...require('./中口径主砲/152mm／55 三連装速射砲'),
    ...require('./中口径主砲/20.3cm(2号)連装砲'),

    ...require('./大口径主砲/35.6cm連装砲(ダズル迷彩)'),
    ...require('./大口径主砲/35.6cm連装砲改'),
    ...require('./大口径主砲/35.6cm連装砲改二'),
    ...require('./大口径主砲/35.6cm三連装砲改(ダズル迷彩仕様)'),
    ...require('./大口径主砲/41cm連装砲改二'),
    ...require('./大口径主砲/41cm三連装砲改二'),
    ...require('./大口径主砲/16inch連装砲 (USN)'),
    ...require('./大口径主砲/16inch Mk.I三連装砲'),

    ...require('./魚雷/53cm連装魚雷'),
    ...require('./魚雷/53cm艦首(酸素)魚雷'),
    ...require('./魚雷/533mm 三連装魚雷'),
    ...require('./魚雷/533mm五連装魚雷(初期型)'),
    ...require('./魚雷/61cm三連装(酸素)魚雷後期型'),
    ...require('./魚雷/61cm四連装(酸素)魚雷'),
    ...require('./魚雷/61cm四連装(酸素)魚雷後期型'),
    ...require('./魚雷/61cm五連装(酸素)魚雷'),
    ...require('./魚雷/試製61cm六連装(酸素)魚雷'),

    ...require('./水上機/S9 Osprey'),
    ...require('./水上機/瑞雲(六三四空)'),
    ...require('./水上機/瑞雲12型(六三四空)'),
    ...require('./水上機/瑞雲(六三四空／熟練)'),
    ...require('./水上機/瑞雲改二(六三四空)'),
    ...require('./水上機/瑞雲改二(六三四空／熟練)'),

    ...require('./艦上機/烈風改'),
    ...require('./艦上機/烈風改二'),
    ...require('./艦上機/烈風改二戊型'),
    ...require('./艦上機/Re.2001 OR改'),
    ...require('./艦上機/Re.2005 改'),
    ...require('./艦上機/九九式艦爆(江草隊)'),
    ...require('./艦上機/彗星'),
    ...require('./艦上機/彗星(六〇一空)'),
    ...require('./艦上機/彗星一二型甲'),
    ...require('./艦上機/彗星(江草隊)'),
    ...require('./艦上機/彗星二二型(六三四空)'),
    ...require('./艦上機/彗星二二型(六三四空／熟練)'),
    ...require('./艦上機/彗星一二型(六三四空／三号爆弾搭載機)'),
    ...require('./艦上機/彗星一ニ型(三一号光電管爆弾搭載機)'),
    ...require('./艦上機/Ju87C改二(KMX搭載機)'),
    ...require('./艦上機/Re.2001 CB改'),
    ...require('./艦上機/九七式艦攻(九三一空)'),
    ...require('./艦上機/九七式艦攻(友永隊)'),
    ...require('./艦上機/九七式艦攻(村田隊)'),
    ...require('./艦上機/流星'),
    ...require('./艦上機/流星改(一航戦)'),
    ...require('./艦上機/天山一二型(友永隊)'),
    ...require('./艦上機/天山一二型(村田隊)'),
    ...require('./艦上機/Re.2001 G改'),
    ...require('./艦上機/二式艦上偵察機'),

    ...require('./電探/13号対空電探改'),
    ...require('./電探/GFCS Mk.37'),
    ...require('./電探/SG レーダー(初期型)'),

    ...require('./対潜兵装/三式水中探信儀'),

    ...require('./対空機銃/20連装7inch UP Rocket Launchers'),

    ...require('./増設バルジ/北方迷彩(＋北方装備)'),

    ...require('./その他/三式弾'),
    ...require('./その他/三式弾改'),
    ...require('./その他/オ号観測機改'),
    ...require('./その他/オ号観測機改二'),
    ...require('./その他/S-51J'),
    ...require('./その他/S-51J改'),
    ...require('./その他/探照灯'),
    ...require('./その他/96式150cm探照灯')
];

// 检查所有套装加成
// 如果 list 为 Number[]，检查是否是其他某个套装加成的子集
// 如果是，修改对应套装加成，添加 bonusAccumulate
{
    const bonusSets = dataBonuses.filter(bonusIsSet);

    bonusSets.forEach((bonus, index) => {
        if (!bonus.list.every(item => !isNaN(item))) return;
        bonusSets.forEach((toCheck, indexToCheck) => {
            if (
                index === indexToCheck ||
                bonus.list.length >= toCheck.list.length ||
                !bonus.list.every(item => toCheck.list.includes(item))
            )
                return;
            if (!toCheck.bonusAccumulate)
                toCheck.bonusAccumulate = { ...(toCheck.bonus || {}) };
            Object.keys(bonus.bonus).forEach(stat => {
                if (typeof toCheck.bonusAccumulate[stat] === 'undefined')
                    toCheck.bonusAccumulate[stat] = 0;
                toCheck.bonusAccumulate[stat] += bonus.bonus[stat];
            });
        });
    });
}

module.exports = dataBonuses;
