const 装甲空母 = {
    大鳳: 153,
    大鳳改: 156,

    翔鶴改二甲: 466,

    瑞鶴改二甲: 467,
};

const 正規空母 = {
    赤城: 83,
    赤城改: 277,
    赤城改二: 594,
    赤城改二戊: 599,

    加賀: 84,
    加賀改: 278,
    加賀改二: 698,
    加賀改二戊: 610,
    加賀改二護: 646,

    蒼龍: 90,
    蒼龍改: 279,
    蒼龍改二: 197,

    飛龍: 91,
    飛龍改: 280,
    飛龍改二: 196,

    翔鶴: 110,
    翔鶴改: 288,
    翔鶴改二: 461,

    瑞鶴: 111,
    瑞鶴改: 112,
    瑞鶴改二: 462,

    Hornet: 603,
    Hornet改: 704,
};

const 軽空母 = {
    鳳翔: 89,
    鳳翔改: 285,
    鳳翔改二: 894,
    鳳翔改二戦: 899,

    龍鳳: 185,
    龍鳳改: 318,
    龍鳳改二戊: 883,
    龍鳳改二: 888,

    祥鳳: 74,
    祥鳳改: 282,

    瑞鳳: 116,
    瑞鳳改: 117,
    瑞鳳改二: 555,
    瑞鳳改二乙: 560,

    飛鷹: 75,
    飛鷹改: 283,

    隼鷹: 92,
    隼鷹改: 284,
    隼鷹改二: 408,

    千歳航: 108,
    千歳航改: 291,
    千歳航改二: 296,

    千代田航: 109,
    千代田航改: 292,
    千代田航改二: 297,

    鈴谷航改二: 508,
    熊野航改二: 509,

    春日丸: 521,
    大鷹: 526,
    大鷹改: 380,
    大鷹改二: 529,

    八幡丸: 522,
    雲鷹: 884,
    雲鷹改: 382,
    雲鷹改二: 889,

    神鷹: 534,
    神鷹改: 381,
    神鷹改二: 536,

    'Gambier Bay': 544,
    'Gambier Bay改': 396,
    'Gambier Bay Mk.II': 707,
    Langley: 925,
    Langley改: 930,
};

module.exports = {
    ...装甲空母,
    ...正規空母,
    ...軽空母,
};
