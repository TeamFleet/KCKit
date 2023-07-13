const {
    神風,
    神風改,
    春風,
    春風改,

    時雨,
    時雨改,
    時雨改二,
    時雨改三,
    海風,
    海風改,
    海風改二,
    山風,
    山風改,
    山風改二,
    山風改二丁,
    江風,
    江風改,
    江風改二,
    涼風,
    涼風改,

    雪風,
    雪風改,
    丹陽,
    雪風改二,
    舞風,
    舞風改,
    秋雲,
    秋雲改,
    秋雲改二,

    朝霜,
    朝霜改,
    朝霜改二,

    Grecale,
    Grecale改,
} = require('../ship-ids');

const Shikinami2ndRemodelAll = [627];

module.exports = {
    Kamikaze: [神風, 神風改],
    Harukaze: [春風, 春風改],

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

    Shigure: [時雨, 時雨改, 時雨改二, 時雨改三],
    Umikaze: [海風, 海風改, 海風改二],
    Yamakaze: [山風, 山風改, 山風改二, 山風改二丁],
    Kawakaze: [江風, 江風改, 江風改二],
    Suzukaze: [涼風, 涼風改],

    Yukikaze: [雪風, 雪風改, 丹陽, 雪風改二],
    Maikaze: [舞風, 舞風改],
    Akigumo: [秋雲, 秋雲改, 秋雲改二],

    Asashimo: [朝霜, 朝霜改, 朝霜改二],

    Grecale: [Grecale, Grecale改],
};
