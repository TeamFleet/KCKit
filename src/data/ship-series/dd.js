const {
    神風,
    神風改,
    春風,
    春風改,

    吹雪,
    吹雪改,
    吹雪改二,
    浦波,
    浦波改,
    浦波改二,

    天霧,
    天霧改,
    天霧改二,
    天霧改二丁,

    電,
    電改,

    初霜,
    初霜改,
    初霜改二,

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

    霞,
    霞改,
    霞改二,
    霞改二乙,

    雪風,
    雪風改,
    丹陽,
    雪風改二,
    舞風,
    舞風改,
    秋雲,
    秋雲改,
    秋雲改二,

    浜波,
    浜波改,
    朝霜,
    朝霜改,
    朝霜改二,

    照月,
    照月改,

    Grecale,
    Grecale改,

    'Samuel B.Roberts': SBR,
    'Samuel B.Roberts改': SBR改,
    'Samuel B.Roberts Mk.II': SBR_II,
    Johnston,
    Johnston改,
} = require('../ship-ids');

const Shikinami2ndRemodelAll = [627];

module.exports = {
    Kamikaze: [神風, 神風改],
    Harukaze: [春風, 春風改],

    Fubuki: [吹雪, 吹雪改, 吹雪改二],
    Uranami: [浦波, 浦波改, 浦波改二],

    Shikinami: [
        14,
        208,
        ...Shikinami2ndRemodelAll, // 敷波改二
    ],
    Shikinami2ndRemodelAll,
    Amagiri: [天霧, 天霧改, 天霧改二, 天霧改二丁],

    Akatsuki: [
        34, // 暁
        234, // 暁改
        437, // 暁改二
    ],
    Inazuma: [電, 電改],

    Hatsushimo: [初霜, 初霜改, 初霜改二],

    Shigure: [時雨, 時雨改, 時雨改二, 時雨改三],
    Umikaze: [海風, 海風改, 海風改二],
    Yamakaze: [山風, 山風改, 山風改二, 山風改二丁],
    Kawakaze: [江風, 江風改, 江風改二],
    Suzukaze: [涼風, 涼風改],

    Kasumi: [霞, 霞改, 霞改二, 霞改二乙],

    Yukikaze: [雪風, 雪風改, 丹陽, 雪風改二],
    Maikaze: [舞風, 舞風改],
    Akigumo: [秋雲, 秋雲改, 秋雲改二],

    Hamanami: [浜波, 浜波改],
    Asashimo: [朝霜, 朝霜改, 朝霜改二],

    Teruzuki: [照月, 照月改],

    Grecale: [Grecale, Grecale改],

    'Samuel B.Roberts': [SBR, SBR改, SBR_II],
    Johnston: [Johnston, Johnston改],
};
