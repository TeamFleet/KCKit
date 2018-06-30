/**
 * 装备额外属性收益
 * @module
 */

/**
 * @member {Number} [equipment] 单一装备
 * @member {Object} [equipments] 条件：装备组合
 * @member {Object} ship 条件：匹配的舰娘
 * @member {Object} [bonus] 收益。数字表示可叠加，字符串表示仅单次
 * @member {Object} [bonusCount] 仅当为单一装备时可用：不同装备数量的收益
 * @member {Object} [bonusImprove] 仅当为单一装备时可用：不同改修星级的收益
 * @member {Array} [list] 显示的内容
 */
module.exports = [

    ...require('./小口径主砲/12cm単装砲改二'),
    ...require('./小口径主砲/12.7cm単装高角砲(後期型)'),
    ...require('./小口径主砲/12.7cm連装砲A型改二'),
    ...require('./小口径主砲/12.7cm連装砲B型改二'),
    ...require('./小口径主砲/12.7cm連装砲C型改二'),
    ...require('./小口径主砲/12.7cm連装砲D型改二'),

    ...require('./大口径主砲/35.6cm連装砲(ダズル迷彩)'),
    ...require('./大口径主砲/35.6cm三連装砲改(ダズル迷彩仕様)'),
    ...require('./大口径主砲/41cm三連装砲改二'),

    ...require('./魚雷/61cm三連装(酸素)魚雷後期型'),
    ...require('./魚雷/61cm四連装(酸素)魚雷'),
    ...require('./魚雷/61cm四連装(酸素)魚雷後期型'),

    ...require('./水上機/瑞雲(六三四空)'),
    ...require('./水上機/瑞雲12型(六三四空)'),
    ...require('./水上機/瑞雲(六三四空／熟練)'),

    ...require('./艦上機/彗星'),
    ...require('./艦上機/彗星(六〇一空)'),
    ...require('./艦上機/彗星一二型甲'),
    ...require('./艦上機/彗星(江草隊)'),
    ...require('./艦上機/彗星二二型(六三四空)'),
    ...require('./艦上機/彗星二二型(六三四空／熟練)'),
    ...require('./艦上機/二式艦上偵察機'),

    ...require('./増設バルジ/北方迷彩(＋北方装備)'),

]
