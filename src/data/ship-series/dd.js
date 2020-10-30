const { 秋雲, 秋雲改, 秋雲改二, Grecale, Grecale改 } = require('../ship-ids');

const Shikinami2ndRemodelAll = [627];

module.exports = {
    //

    Shikinami: [
        14,
        208,
        ...Shikinami2ndRemodelAll, // 敷波改二
    ],
    Shikinami2ndRemodelAll,
    Akatsuki: [
        34, // 暁
        234, // 暁改
        437, // 暁改二
    ],

    //

    Yukikaze: [
        20, // 雪風
        228, // 雪風改
    ],
    Akigumo: [秋雲, 秋雲改, 秋雲改二],

    //

    Grecale: [Grecale, Grecale改],
};
