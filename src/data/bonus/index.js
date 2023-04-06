require('../../../typedef');
const bonusIsSet = require('../../utils/bonus-is-set');

/**
 * 装备额外属性收益
 * @module
 */

// https://wikiwiki.jp/kancolle/%E8%A3%85%E5%82%99#bonus

/**
 * @type {Array<EquipmentBonus>}
 */
const dataBonuses = [
    ...require('./小口径主砲/10cm連装高角砲+高射装置'),
    ...require('./小口径主砲/12cm単装砲改二'),
    ...require('./小口径主砲/12cm単装高角砲E型'),
    ...require('./小口径主砲/120mm／50 連装砲'),
    ...require('./小口径主砲/12.7cm単装砲'),
    ...require('./小口径主砲/12.7cm単装高角砲(後期型)'),
    ...require('./小口径主砲/12.7cm単装高角砲改二'),
    ...require('./小口径主砲/12.7cm連装高角砲改二'),
    ...require('./小口径主砲/12.7cm連装砲A型'),
    ...require('./小口径主砲/12.7cm連装砲A型改二'),
    ...require('./小口径主砲/12.7cm連装砲A型改三(戦時改修)+高射装置'),
    ...require('./小口径主砲/試製 長12.7cm連装砲A型改四'),
    ...require('./小口径主砲/12.7cm連装砲B型改二'),
    ...require('./小口径主砲/12.7cm連装砲B型改四(戦時改修)+高射装置'),
    ...require('./小口径主砲/12.7cm連装砲C型改二'),
    ...require('./小口径主砲/12.7cm連装砲C型改三'),
    ...require('./小口径主砲/12.7cm連装砲D型改二'),
    ...require('./小口径主砲/12.7cm連装砲D型改三'),
    ...require('./小口径主砲/5inch単装砲 Mk.30改'),
    ...require('./小口径主砲/5inch単装砲 Mk.30改+GFCS Mk.37'),
    ...require('./小口径主砲/130mm B-13連装砲'),
    ...require('./小口径主砲/現地改装10cm連装高角砲'),
    ...require('./小口径主砲/現地改装12.7cm連装高角砲'),

    ...require('./中口径主砲/5inch連装両用砲(集中配備)'),
    ...require('./中口径主砲/14cm連装砲'),
    ...require('./中口径主砲/14cm連装砲改'),
    ...require('./中口径主砲/Bofors 15cm連装速射砲'),
    ...require('./中口径主砲/Bofors 15.2cm連装砲 Model 1930'),
    ...require('./中口径主砲/152mm／55 三連装速射砲'),
    ...require('./中口径主砲/15.2cm連装砲改'),
    ...require('./中口径主砲/15.2cm連装砲改二'),
    ...require('./中口径主砲/6inch連装速射砲'),
    ...require('./中口径主砲/6inch三連装速射砲 Mk.16'),
    ...require('./中口径主砲/6inch Mk.XXIII三連装砲'),
    ...require('./中口径主砲/15.5cm三連装砲'),
    ...require('./中口径主砲/15.5cm三連装砲改'),
    ...require('./中口径主砲/20.3cm(2号)連装砲'),
    ...require('./中口径主砲/20.3cm(3号)連装砲'),
    ...require('./中口径主砲/8inch三連装砲 Mk.9'),

    ...require('./大口径主砲/305mm／46'),
    ...require('./大口径主砲/320mm／44'),
    ...require('./大口径主砲/35.6cm連装砲(ダズル迷彩)'),
    ...require('./大口径主砲/35.6cm連装砲改'),
    ...require('./大口径主砲/35.6cm連装砲改二'),
    ...require('./大口径主砲/35.6cm三連装砲改(ダズル迷彩仕様)'),
    ...require('./大口径主砲/38cm四連装砲'),
    ...require('./大口径主砲/41cm連装砲改二'),
    ...require('./大口径主砲/41cm三連装砲改二'),
    ...require('./大口径主砲/16inch連装砲 (USN)'),
    ...require('./大口径主砲/16inch三連装砲 Mk.6'),
    ...require('./大口径主砲/16inch Mk.I三連装砲'),
    ...require('./大口径主砲/51cm'),

    ...require('./副砲/8cm高角砲'),
    ...require('./副砲/8cm高角砲改+増設機銃'),
    ...require('./副砲/10cm連装高角砲群'),
    ...require('./副砲/15.2cm三連装砲'),
    ...require('./副砲/15.5cm三連装副砲'),
    ...require('./副砲/usn.5inch'),
    ...require('./副砲/65mm／64'),

    ...require('./魚雷/53cm連装魚雷'),
    ...require('./魚雷/53cm艦首(酸素)魚雷'),
    ...require('./魚雷/533mm 三連装魚雷'),
    ...require('./魚雷/533mm五連装魚雷'),
    ...require('./魚雷/61cm三連装(酸素)魚雷後期型'),
    ...require('./魚雷/61cm四連装(酸素)魚雷'),
    ...require('./魚雷/61cm四連装(酸素)魚雷後期型'),
    ...require('./魚雷/61cm五連装(酸素)魚雷'),
    ...require('./魚雷/試製61cm六連装(酸素)魚雷'),
    ...require('./魚雷/後期型艦首魚雷(4門)'),
    ...require('./魚雷/後期型艦首魚雷(6門)'),
    ...require('./魚雷/熟練聴音員+後期型艦首魚雷'),
    ...require('./魚雷/後期型53cm艦首魚雷(8門)'),
    ...require('./魚雷/潜水艦後部魚雷発射管4門'),
    ...require('./魚雷/21inch艦首魚雷発射管6門'),

    ...require('./水上機/紫雲'),
    ...require('./水上機/SOC Seagull'),
    ...require('./水上機/SO3C Seamew改'),
    ...require('./水上機/OS2U'),
    ...require('./水上機/S9 Osprey'),
    ...require('./水上機/Swordfish'),
    ...require('./水上機/Seafox'),
    ...require('./水上機/Ar196改'),
    ...require('./水上機/Loire 130M'),
    ...require('./水上機/Laté 298B'),
    ...require('./水上機/瑞雲(六三四空)'),
    ...require('./水上機/瑞雲12型(六三四空)'),
    ...require('./水上機/瑞雲(六三四空／熟練)'),
    ...require('./水上機/瑞雲改二(六三四空)'),
    ...require('./水上機/瑞雲改二(六三四空／熟練)'),
    ...require('./水上機/試製 夜間瑞雲'),
    ...require('./水上機/強風改'),

    ...require('./艦上機/九六式艦戦'),
    ...require('./艦上機/紫電改四'),
    ...require('./艦上機/烈風改'),
    ...require('./艦上機/烈風改二'),
    ...require('./艦上機/烈風改二戊型'),
    ...require('./艦上機/試製 陣風'),
    ...require('./艦上機/Fulmar'),
    ...require('./艦上機/Re.2001 OR改'),
    ...require('./艦上機/Re.2005 改'),
    ...require('./艦上機/F4U'),
    ...require('./艦上機/FR-1 Fireball'),
    ...require('./艦上機/XF5U'),
    ...require('./艦上機/Corsair'),
    ...require('./艦上機/零式艦戦(爆戦)'),
    ...require('./艦上機/零式艦戦64型'),
    ...require('./艦上機/九九式艦爆二二型'),
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
    ...require('./艦上機/FM-2'),
    ...require('./艦上機/SBD'),
    ...require('./艦上機/SBD-5'),
    ...require('./艦上機/SB2C-3'),
    ...require('./艦上機/SB2C-5'),
    ...require('./艦上機/九七式艦攻(九三一空)'),
    ...require('./艦上機/九七式艦攻(友永隊)'),
    ...require('./艦上機/九七式艦攻(村田隊)'),
    ...require('./艦上機/九七式艦攻改'),
    ...require('./艦上機/流星'),
    ...require('./艦上機/流星改(一航戦)'),
    ...require('./艦上機/天山一二型(友永隊)'),
    ...require('./艦上機/天山一二型(村田隊)'),
    ...require('./艦上機/天山一二型甲'),
    ...require('./艦上機/天山一二型甲改(空六号電探改装備機)'),
    ...require('./艦上機/Re.2001 G改'),
    ...require('./艦上機/Swordfish'),
    ...require('./艦上機/Barracuda'),
    ...require('./艦上機/TBM-3W+3S'),
    ...require('./艦上機/彩雲'),
    ...require('./艦上機/二式艦上偵察機'),
    ...require('./艦上機/試製景雲(艦偵型)'),

    ...require('./電探/13号対空電探改'),
    ...require('./電探/21号対空電探'),
    ...require('./電探/21号対空電探改二'),
    ...require('./電探/42号対空電探改二'),
    ...require('./電探/GFCS Mk.37'),
    ...require('./電探/SK／SGレーダー'),

    ...require('./対潜兵装/_Sonars.IJN'),
    ...require('./対潜兵装/_DepthChargeLauncher.IJN'),
    ...require('./対潜兵装/三式水中探信儀'),
    ...require('./対潜兵装/四式水中聴音機'),
    ...require('./対潜兵装/三式爆雷投射機 集中配備'),
    ...require('./対潜兵装/試製15cm9連装対潜噴進砲'),
    ...require('./対潜兵装/二式爆雷改二'),
    ...require('./対潜兵装/RUR-4A'),
    ...require('./対潜兵装/対潜短魚雷'),
    ...require('./対潜兵装/Hedgehog'),
    ...require('./対潜兵装/Mk.32対潜魚雷'),
    ...require('./対潜兵装/零式水中聴音機'),

    ...require('./対空機銃/2cm 四連装FlaK 38'),
    ...require('./対空機銃/20連装7inch UP Rocket Launchers'),
    ...require('./対空機銃/25mm対空機銃'),

    ...require('./増設バルジ/新型高温高圧缶'),
    ...require('./増設バルジ/北方迷彩(＋北方装備)'),
    ...require('./増設バルジ/艦本新設計 増設バルジ(大型艦)'),
    ...require('./増設バルジ/プリエーゼ式水中防御隔壁'),

    ...require('./その他/一式徹甲弾改'),
    ...require('./その他/三式弾'),
    ...require('./その他/三式弾改'),
    ...require('./その他/三式弾改二'),
    ...require('./その他/三式指揮連絡機'),
    ...require('./その他/甲標的 丁型改(蛟龍改)'),
    ...require('./その他/カ号観測機'),
    ...require('./その他/オ号観測機改'),
    ...require('./その他/オ号観測機改二'),
    ...require('./その他/S-51J'),
    ...require('./その他/S-51J改'),
    ...require('./その他/一式戦 隼II型改'),
    ...require('./その他/一式戦 隼III型改'),
    ...require('./その他/探照灯'),
    ...require('./その他/96式150cm探照灯'),
    ...require('./その他/熟練見張員'),
    ...require('./その他/熟練甲板要員'),
    ...require('./その他/装甲艇(AB艇)'),
    ...require('./その他/武装大発'),
    ...require('./その他/後期型潜水艦搭載電探＆逆探'),
    ...require('./その他/後期型電探＆逆探＋シュノーケル装備'),

    ...require('./specials'),
];

// 检查所有套装加成
// 如果 list 为 Number[]，检查是否是其他某个套装加成的子集
// 如果是，修改对应套装加成，添加 bonusAccumulate
{
    const bonusSets = dataBonuses.filter(bonusIsSet);

    bonusSets.forEach((bonus, index) => {
        if (!bonus.list.every((item) => !isNaN(item))) return;
        bonusSets.forEach((toCheck, indexToCheck) => {
            if (
                index === indexToCheck ||
                bonus.list.length >= toCheck.list.length ||
                !bonus.list.every((item) => toCheck.list.includes(item))
            )
                return;
            if (!toCheck.bonusAccumulate)
                toCheck.bonusAccumulate = { ...(toCheck.bonus || {}) };
            Object.keys(bonus.bonus).forEach((stat) => {
                if (typeof toCheck.bonusAccumulate[stat] === 'undefined')
                    toCheck.bonusAccumulate[stat] = 0;
                toCheck.bonusAccumulate[stat] += bonus.bonus[stat];
            });
        });
    });
}

module.exports = dataBonuses;
