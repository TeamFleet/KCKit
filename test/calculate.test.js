// const path = require('path')
// const fs = require('fs')
// const camelCase = require('camelcase')
const dbnames = require('./samples/dbnames');
const {
    榛名改二乙,

    鈴谷航改二,

    最上改二,
    最上改二特,

    大淀,
    大淀改,
    能代改二,
    矢矧改二,
    矢矧改二乙,
    香取改,
    鹿島改,

    天霧改二,
    天霧改二丁,
    山風,
    山風改二,
    時雨改二,
    時雨改三,
    丹陽,
    雪風改二,
    秋雲改二,
    沖波改二,
} = require('../src/data/ship-ids');

let db;
beforeAll(() =>
    new Promise(async (resolve) => {
        db = await require('./samples/initialize-database')(dbnames);
        resolve();
    }).then(() => {
        require('../src/register.js')({ db });
    })
);

const calculate = require('../src/calculate');

describe('Calculating functions/utilities', () => {
    describe('tp...', () => {
        it('case 1', () => {
            expect(
                calculate.tp({
                    shipType: {
                        1: 1,
                    },
                })
            ).toBe(5);
            expect(
                calculate.tp({
                    shipType: {
                        1: 1,
                    },
                })
            ).toBe(5);
        });
        it('case 2', () => {
            expect(
                calculate.tp({
                    shipType: {
                        1: 2,
                    },
                    equipmentType: {
                        LandingCraft: 3,
                    },
                })
            ).toBe(34);
        });
        it('case 3', () => {
            expect(
                calculate.tp({
                    shipType: {
                        1: 2,
                        15: 1,
                    },
                    equipmentType: {
                        LandingCraft: 3,
                        48: 1,
                    },
                })
            ).toBe(47);
        });
    });
    describe('bonus...', () => {
        describe('common...', () => {
            it('陽炎改二 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(566, 267)).toEqual({
                    fire: 2,
                    evasion: 1,
                });
            });
            it('陽炎改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(566, [267, 267])).toEqual({
                    fire: 3,
                    evasion: 2,
                });
            });
            it('陽炎改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(566, [267, 267, 267])).toEqual({
                    fire: 4,
                    evasion: 3,
                });
            });
            it('陽炎改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二 ➕22号対水上電探改四', () => {
                expect(calculate.bonus(566, [267, 267, 88])).toEqual({
                    fire: 3,
                    evasion: 2,
                });
            });
            it('長波改 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(304, 267)).toEqual({
                    fire: 2,
                    evasion: 1,
                });
            });
            it('長波改 || 12.7cm連装砲D型改二 ➕33号対水上電探', () => {
                expect(calculate.bonus(304, [267, 29])).toEqual({
                    fire: 4,
                    torpedo: 3,
                    evasion: 2,
                });
            });
            it('長波改二 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(543, 267)).toEqual({
                    fire: 3,
                    evasion: 1,
                });
            });
            it('長波改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(543, [267, 267, 267])).toEqual({
                    fire: 9,
                    evasion: 3,
                });
            });
            it('長波改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二 ➕22号対水上電探改四', () => {
                expect(calculate.bonus(543, [267, 267, 88])).toEqual({
                    fire: 9,
                    torpedo: 6,
                    evasion: 5,
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(567, [15])).toEqual({
                    torpedo: 2,
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷 ➕61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(567, [15, 15])).toEqual({
                    torpedo: 4,
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷 ➕61cm四連装(酸素)魚雷 ➕61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(567, [15, 15, 15])).toEqual({
                    torpedo: 4,
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷後期型 ➕61cm四連装(酸素)魚雷後期型', () => {
                expect(calculate.bonus(567, [286, 286])).toEqual({
                    torpedo: 4,
                    evasion: 2,
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷後期型(MAX) ➕61cm四連装(酸素)魚雷後期型(⭐+5)', () => {
                expect(calculate.bonus(567, [286, 286], [10, 5])).toEqual({
                    fire: 1,
                    torpedo: 6,
                    evasion: 2,
                });
            });
            it('不知火改二 || 12.7cm連装砲D型改二 ➕61cm四連装(酸素)魚雷後期型(MAX) ➕61cm四連装(酸素)魚雷後期型(⭐+5)', () => {
                expect(
                    calculate.bonus(567, [267, 286, 286], [0, 10, 5])
                ).toEqual({
                    fire: 3,
                    torpedo: 6,
                    evasion: 3,
                });
            });
            it('木曽改二 || 北方迷彩(＋北方装備)', () => {
                expect(calculate.bonus(146, [268])).toEqual({
                    armor: 2,
                    evasion: 7,
                });
            });
            it('木曽改二 || 北方迷彩(＋北方装備) ➕北方迷彩(＋北方装備) ➕北方迷彩(＋北方装備)', () => {
                expect(calculate.bonus(146, [268, 268, 268])).toEqual({
                    armor: 2,
                    evasion: 7,
                });
            });
            it('由良改二 || 12.7cm単装高角砲(後期型)⭐MAX ➕12.7cm単装高角砲(後期型)⭐MAX ➕FuMO25 レーダー', () => {
                expect(calculate.bonus(488, [229, 229, 124], [10, 10])).toEqual(
                    {
                        fire: 7,
                        aa: 6,
                        evasion: 2,
                    }
                );
            });
            it('由良改二 || 12.7cm単装高角砲(後期型)⭐5 ➕FuMO25 レーダー', () => {
                expect(calculate.bonus(488, [229, 124], [5])).toEqual({});
            });
            it('占守改 || 12.7cm単装高角砲(後期型)⭐MAX', () => {
                expect(calculate.bonus(376, [229], [10])).toEqual({
                    fire: 1,
                    aa: 1,
                });
            });
            it('占守改 || 12.7cm単装高角砲(後期型)⭐MAX ➕22号対水上電探', () => {
                expect(calculate.bonus(376, [229, 28], [10])).toEqual({
                    fire: 2,
                    aa: 1,
                    evasion: 4,
                });
            });
            it('伊勢改二 || 二式艦上偵察機 ➕二式艦上偵察機', () => {
                expect(calculate.bonus(553, [61, 61])).toEqual({
                    fire: 6,
                    armor: 2,
                    evasion: 4,
                    range: '1',
                });
            });
            it('叢雲改二 || 61cm三連装(酸素)魚雷後期型', () => {
                expect(calculate.bonus(420, [285])).toEqual({
                    torpedo: 2,
                    evasion: 1,
                });
            });
            it('叢雲改二 || 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(420, [285], [10])).toEqual({
                    fire: 1,
                    torpedo: 3,
                    evasion: 1,
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二', () => {
                expect(calculate.bonus(420, [294])).toEqual({
                    fire: 1,
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕33号対水上電探', () => {
                expect(calculate.bonus(420, [294, 29])).toEqual({
                    fire: 4,
                    torpedo: 1,
                    evasion: 2,
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷', () => {
                expect(calculate.bonus(420, [294, 125])).toEqual({
                    fire: 2,
                    torpedo: 3,
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(420, [294, 285], [0, 10])).toEqual({
                    fire: 3,
                    torpedo: 7,
                    evasion: 1,
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [294, 125, 285], [0, 0, 10])
                ).toEqual({
                    fire: 4,
                    torpedo: 10,
                    evasion: 1,
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷後期型 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [294, 285, 285], [0, 0, 10])
                ).toEqual({
                    fire: 4,
                    torpedo: 11,
                    evasion: 2,
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷後期型⭐MAX ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [294, 285, 285], [0, 10, 10])
                ).toEqual({
                    fire: 5,
                    torpedo: 11,
                    evasion: 2,
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕33号対水上電探 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [294, 29, 285], [0, 0, 10])
                ).toEqual({
                    fire: 6,
                    torpedo: 8,
                    evasion: 3,
                });
            });
            it('初春改二 || 12.7cm連装砲A型改三(戦時改修)+高射装置 ➕13号対空電探改 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [295, 106, 285], [0, 0, 10])
                ).toEqual({
                    fire: 4,
                    torpedo: 7,
                    aa: 8,
                    evasion: 1,
                });
            });
            it('夕立改二 || 12.7cm連装砲B型改四(戦時改修)+高射装置 ➕13号対空電探改 ➕61cm四連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(144, [296, 106, 286], [0, 0, 10])
                ).toEqual({
                    fire: 4,
                    torpedo: 6,
                    aa: 6,
                    evasion: 2,
                });
            });
            it('夕立改二 || 12.7cm連装砲B型改四(戦時改修)+高射装置 ➕12.7cm連装砲B型改二 ➕61cm四連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(144, [296, 63, 286], [0, 0, 10])
                ).toEqual({
                    fire: 5,
                    torpedo: 7,
                    aa: 1,
                    evasion: 4,
                });
            });
            it('夕立改二 || 12.7cm連装砲B型改四(戦時改修)+高射装置 ➕12.7cm連装砲C型改二 ➕33号対水上電探', () => {
                expect(calculate.bonus(144, [296, 266, 29])).toEqual({
                    fire: 5,
                    torpedo: 7,
                    evasion: 4,
                });
            });
            it('Warspite改 || 16inch Mk.I三連装砲 ➕16inch Mk.I三連装砲', () => {
                expect(calculate.bonus(364, [298, 298])).toEqual({
                    fire: 4,
                    armor: 2,
                    evasion: -4,
                });
            });
            it('Warspite改 || 16inch Mk.I三連装砲 ➕16inch Mk.I三連装砲 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(364, [298, 298, 301])).toEqual({
                    fire: 4,
                    aa: 2,
                    armor: 3,
                    evasion: -3,
                });
            });
            it('北上 || Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(25, [303])).toEqual({
                    fire: 1,
                    aa: 1,
                });
            });
            it('北上改二 || Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(119, [303])).toEqual({
                    fire: 1,
                    aa: 1,
                });
            });
            it('大鷹改二 || 九七式艦攻(九三一空) ➕Ju87C改二(KMX搭載機)', () => {
                expect(calculate.bonus(529, [82, 305])).toEqual({
                    asw: 2,
                    evasion: 2,
                });
            });
            it('Graf Zeppelin改 || 九七式艦攻(九三一空) ➕Ju87C改二(KMX搭載機)', () => {
                expect(calculate.bonus(353, [82, 305])).toEqual({
                    fire: 1,
                    evasion: 1,
                });
            });
            it('睦月改二 || 12cm単装砲改二 ➕33号対水上電探', () => {
                expect(calculate.bonus(434, [293, 29])).toEqual({
                    fire: 4,
                    torpedo: 1,
                    aa: 1,
                    evasion: 6,
                });
            });
            it('睦月改二 || 12cm単装砲改二 ➕33号対水上電探 ➕53cm連装魚雷', () => {
                expect(calculate.bonus(434, [293, 29, 174])).toEqual({
                    fire: 6,
                    torpedo: 5,
                    aa: 1,
                    evasion: 6,
                });
            });
            it('睦月改二 || 12cm単装砲改二 ➕53cm連装魚雷 ➕53cm連装魚雷', () => {
                expect(calculate.bonus(434, [293, 174, 174])).toEqual({
                    fire: 5,
                    torpedo: 7,
                    aa: 1,
                    evasion: 3,
                });
            });
            it('Gotland || Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(574, [303])).toEqual({
                    fire: 1,
                    aa: 2,
                    evasion: 1,
                });
            });
            it('Gotland || Bofors 15.2cm連装砲 Model 1930 ➕Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(574, [303, 303])).toEqual({
                    fire: 2,
                    aa: 4,
                    evasion: 2,
                });
            });
            it('Gotland改 || Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(579, [303])).toEqual({
                    fire: 1,
                    aa: 2,
                    evasion: 1,
                });
            });
            it('Gotland改 || Bofors 15.2cm連装砲 Model 1930 ➕Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(579, [303, 303])).toEqual({
                    fire: 2,
                    aa: 4,
                    evasion: 2,
                });
            });
            it('Warspite改 || 16inch Mk.I三連装砲改＋FCR type284 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(364, [300, 301])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: -1,
                    armor: 2,
                });
            });
            it('Nelson改 || 16inch Mk.I三連装砲改＋FCR type284 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(576, [298, 301])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: 1,
                    armor: 2,
                });
            });
            it('Warspite改 || 16inch Mk.I三連装砲 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(364, [298, 301])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: -1,
                    armor: 2,
                });
            });
            it('Nelson改 || 16inch Mk.I三連装砲改＋FCR type284 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(576, [300, 301])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: 1,
                    armor: 2,
                });
            });
            it('長門改二 || 5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(541, [308])).toEqual({});
            });
            it('睦月 || 5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(1, [308])).toEqual({
                    fire: 1,
                });
            });
            it('睦月 || 5inch単装砲 Mk.30改+GFCS Mk.37 ➕5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(1, [308, 308])).toEqual({
                    fire: 2,
                });
            });
            it('Samuel B.Roberts改 || 5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(681, [308])).toEqual({
                    fire: 2,
                    aa: 1,
                    evasion: 1,
                });
            });
            it('Samuel B.Roberts改 || 5inch単装砲 Mk.30改+GFCS Mk.37 ➕5inch単装砲 Mk.30改+GFCS Mk.37 ➕5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(681, [308, 308, 308])).toEqual({
                    fire: 6,
                    aa: 3,
                    evasion: 3,
                });
            });
            it('長門改二 || GFCS Mk.37', () => {
                expect(calculate.bonus(541, [307])).toEqual({});
            });
            it('Iowa || GFCS Mk.37', () => {
                expect(calculate.bonus(440, [307])).toEqual({
                    fire: 1,
                    aa: 1,
                    evasion: 1,
                });
            });
            it('Iowa改 || GFCS Mk.37', () => {
                expect(calculate.bonus(360, [307])).toEqual({
                    fire: 1,
                    aa: 1,
                    evasion: 1,
                });
            });
            it('Iowa改 || GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(360, [307, 307])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: 2,
                });
            });
            it('金剛改二丙 || 16inch Mk.I三連装砲 ➕35.6cm連装砲改二 ➕ 35.6cm三連装砲改(ダズル迷彩仕様)➕53cm連装魚雷', () => {
                expect(calculate.bonus(591, [298, 329, 289, 174])).toEqual({
                    fire: 6,
                    torpedo: 8,
                    aa: 2,
                    evasion: 4,
                });
            });
        });

        describe('小口径主砲...', () => {
            describe('130mm B-13連装砲...', () => {
                it('Верный || 130mm B-13連装砲', () => {
                    expect(calculate.bonus(147, [282])).toEqual({
                        fire: 2,
                        armor: 1,
                    });
                });
                it('Верный || 130mm B-13連装砲 ➕12.7cm連装砲A型改三(戦時改修)+高射装置', () => {
                    expect(calculate.bonus(147, [282, 295])).toEqual({
                        fire: 4,
                        aa: 2,
                        armor: 1,
                    });
                });
                it('夕張 || 130mm B-13連装砲', () => {
                    expect(calculate.bonus(115, [282])).toEqual({
                        fire: 2,
                        armor: 1,
                    });
                });
            });
        });

        describe('中口径主砲...', () => {
            it('青葉改 || 20.3cm(2号)連装砲', () => {
                expect(calculate.bonus(264, [90])).toEqual({
                    fire: 2,
                    aa: 1,
                });
            });
            it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲', () => {
                expect(calculate.bonus(264, [90, 90])).toEqual({
                    fire: 4,
                    aa: 2,
                });
            });
            it('青葉改 || 20.3cm(2号)連装砲 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(264, [90, 307])).toEqual({
                    fire: 5,
                    aa: 6,
                    torpedo: 2,
                    evasion: 4,
                });
            });
            it('青葉改 || 20.3cm(2号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(264, [90, 307, 307])).toEqual({
                    fire: 5,
                    torpedo: 2,
                    aa: 6,
                    evasion: 4,
                });
            });
            it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕32号対水上電探', () => {
                expect(calculate.bonus(264, [90, 90, 31])).toEqual({
                    fire: 7,
                    aa: 2,
                    torpedo: 2,
                    evasion: 2,
                });
            });
            it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(264, [90, 90, 307])).toEqual({
                    fire: 7,
                    aa: 7,
                    torpedo: 2,
                    evasion: 4,
                });
            });
            it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(264, [90, 90, 307, 307])).toEqual({
                    fire: 7,
                    aa: 7,
                    torpedo: 2,
                    evasion: 4,
                });
            });
            it('衣笠改二 || 20.3cm(2号)連装砲', () => {
                expect(calculate.bonus(142, [90])).toEqual({
                    fire: 3,
                    evasion: 1,
                });
            });
            it('衣笠改二 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲', () => {
                expect(calculate.bonus(142, [90, 90])).toEqual({
                    fire: 6,
                    evasion: 2,
                });
            });
            it('衣笠改二 || 20.3cm(2号)連装砲 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(142, [90, 307])).toEqual({
                    fire: 6,
                    evasion: 3,
                    torpedo: 2,
                });
            });
            it('衣笠改二 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(142, [90, 90, 307])).toEqual({
                    fire: 9,
                    evasion: 4,
                    torpedo: 2,
                });
            });
            it('衣笠改二 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(142, [90, 90, 307, 307])).toEqual({
                    fire: 9,
                    evasion: 4,
                    torpedo: 2,
                });
            });
            it('衣笠 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(123, [90, 90, 307, 307])).toEqual({
                    fire: 5,
                    torpedo: 2,
                    evasion: 2,
                });
            });
            it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(3号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(264, [90, 50, 307, 307])).toEqual({
                    fire: 7,
                    torpedo: 3,
                    aa: 6,
                    evasion: 5,
                });
            });
            it('青葉改 || 20.3cm(3号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(264, [50, 307, 307])).toEqual({
                    fire: 2,
                    torpedo: 1,
                    evasion: 1,
                });
            });
            it('鈴谷改二 || 20.3cm(2号)連装砲 ➕20.3cm(3号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(503, [90, 50, 307, 307])).toEqual({
                    fire: 6,
                    torpedo: 2,
                    evasion: 3,
                });
            });
            it('鈴谷改二 || 20.3cm(3号)連装砲 ➕20.3cm(3号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(503, [50, 50, 307, 307])).toEqual({
                    fire: 9,
                    torpedo: 2,
                    evasion: 4,
                });
            });
            it('鈴谷改二 || 20.3cm(3号)連装砲 ➕20.3cm(3号)連装砲 ➕20.3cm(3号)連装砲 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(503, [50, 50, 50, 307])).toEqual({
                    fire: 12,
                    torpedo: 2,
                    evasion: 5,
                });
            });
            it('Gotland改 || Bofors 15cm連装速射砲 Mk.9改＋単装速射砲 Mk.10改 Model 1938', () => {
                expect(calculate.bonus(579, [361])).toEqual({
                    fire: 2,
                    aa: 1,
                    evasion: 1,
                });
            });
            it('De Ruyter改 || Bofors 15cm連装速射砲 Mk.9改＋単装速射砲 Mk.10改 Model 1938', () => {
                expect(calculate.bonus(609, [361])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: 1,
                });
            });
            it('De Ruyter改 || 5inch連装両用砲(集中配備)＋GFCS Mk.37＋5inch連装両用砲(集中配備)', () => {
                expect(calculate.bonus(609, [362, 363])).toEqual({
                    aa: -2,
                    evasion: -4,
                });
            });
        });

        describe('大口径主砲...', () => {
            describe('41cm...', () => {
                it('扶桑改二 || 41cm連装砲改二 ➕41cm連装砲改二', () => {
                    expect(calculate.bonus(411, [318, 318])).toEqual({
                        fire: 2,
                    });
                });
                it('扶桑改二 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(411, [318, 290])).toEqual({
                        fire: 2,
                    });
                });
                it('扶桑改二 || 41cm連装砲改二 ➕41cm三連装砲改二 ➕21号対空電探', () => {
                    expect(calculate.bonus(411, [318, 290, 30])).toEqual({
                        fire: 2,
                    });
                });
                it('伊勢改 || 41cm連装砲改二 ➕41cm連装砲改二', () => {
                    expect(calculate.bonus(82, [318, 318])).toEqual({
                        fire: 4,
                        aa: 4,
                        evasion: 4,
                    });
                });
                it('伊勢改 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(82, [318, 290])).toEqual({
                        fire: 4,
                        aa: 4,
                        evasion: 5,
                        armor: 1,
                    });
                });
                it('伊勢改 || 41cm連装砲改二 ➕41cm三連装砲改二 ➕21号対空電探', () => {
                    expect(calculate.bonus(82, [318, 290, 30])).toEqual({
                        fire: 4,
                        aa: 8,
                        evasion: 11,
                        armor: 1,
                        hit: 1,
                    });
                });
                it('伊勢改二 || 41cm連装砲改二 ➕41cm連装砲改二', () => {
                    expect(calculate.bonus(553, [318, 318])).toEqual({
                        fire: 4,
                        aa: 4,
                        evasion: 4,
                        hit: 6,
                    });
                });
                it('伊勢改二 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(553, [318, 290])).toEqual({
                        fire: 5,
                        aa: 4,
                        evasion: 5,
                        armor: 1,
                        hit: 6,
                    });
                });
                it('日向改二 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(554, [318, 290])).toEqual({
                        fire: 7,
                        aa: 4,
                        evasion: 6,
                        armor: 1,
                        hit: 7,
                    });
                });
                it('伊勢改二 || 41cm連装砲改二 ➕41cm三連装砲改二 ➕21号対空電探', () => {
                    expect(calculate.bonus(553, [318, 290, 30])).toEqual({
                        fire: 5,
                        aa: 8,
                        evasion: 11,
                        armor: 1,
                        hit: 7,
                    });
                });
                it('長門改二 || 41cm連装砲改二 ➕41cm連装砲改二', () => {
                    expect(calculate.bonus(541, [318, 318])).toEqual({
                        fire: 6,
                        aa: 4,
                        evasion: 2,
                        hit: 4,
                    });
                });
                it('長門改二 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(541, [318, 290])).toEqual({
                        fire: 5,
                        aa: 2,
                        evasion: 3,
                        armor: 1,
                        hit: 3,
                    });
                });
                it('長門改二 || 41cm連装砲改二 ➕41cm三連装砲改二 ➕21号対空電探', () => {
                    expect(calculate.bonus(541, [318, 290, 30])).toEqual({
                        fire: 5,
                        aa: 2,
                        evasion: 3,
                        armor: 1,
                        hit: 3,
                    });
                });
                it('伊勢改二 || 35.6cm連装砲改', () => {
                    expect(calculate.bonus(553, [328])).toEqual({
                        fire: 1,
                    });
                });
                it('金剛改二 || 35.6cm連装砲改', () => {
                    expect(calculate.bonus(149, [328])).toEqual({
                        fire: 2,
                        evasion: 1,
                    });
                });
                it('伊勢改二 || 35.6cm連装砲改二', () => {
                    expect(calculate.bonus(553, [329])).toEqual({
                        fire: 1,
                    });
                });
                it('金剛改 || 35.6cm連装砲改二', () => {
                    expect(calculate.bonus(209, [329])).toEqual({
                        fire: 2,
                        evasion: 1,
                    });
                });
                it('金剛改二 || 35.6cm連装砲改二', () => {
                    expect(calculate.bonus(149, [329])).toEqual({
                        fire: 3,
                        aa: 1,
                        evasion: 1,
                    });
                });
                it('Nelson改 || 16inch Mk.I連装砲 ➕16inch Mk.V連装砲 ➕16inch Mk.I三連装砲 ➕16inch Mk.I三連装砲', () => {
                    expect(calculate.bonus(576, [330, 331, 298, 298])).toEqual({
                        fire: 8,
                        armor: 2,
                    });
                });
            });
            describe('16inch三連装砲 Mk.6...', () => {
                it('Iowa改 || Mk.6 ➕Mk.6 mod.2 ➕Mk.6 GFCS || ALL MAX', () => {
                    expect(
                        calculate.bonus(360, [381, 385, 390], [10, 10, 10])
                    ).toEqual({
                        fire: 8,
                        armor: 2,
                    });
                });
                it('South Dakota改 || Mk.6 ➕Mk.6 mod.2 ➕Mk.6 GFCS || ALL MAX', () => {
                    expect(
                        calculate.bonus(697, [381, 385, 390], [10, 10, 10])
                    ).toEqual({
                        fire: 11,
                        armor: 3,
                        evasion: 1,
                    });
                });
                it('Washington改 || Mk.6 ➕Mk.6 mod.2 ➕Mk.6 GFCS || ALL MAX', () => {
                    expect(
                        calculate.bonus(659, [381, 385, 390], [10, 10, 10])
                    ).toEqual({
                        fire: 10,
                        armor: 3,
                        evasion: 1,
                    });
                });
            });
        });

        describe('中口径主砲...', () => {
            describe('6inch Mk.XXIII三連装砲...', () => {
                it('Sheffield改', () => {
                    expect(calculate.bonus(705, [399, 399], [0, 10])).toEqual({
                        fire: 3,
                        evasion: 4,
                    });
                });
            });
            describe('15.5cm三連装砲系主砲...', () => {
                it('大淀', () => {
                    expect(calculate.bonus(大淀, [5, 235, 124])).toEqual({
                        fire: 7,
                        aa: 4,
                        evasion: 5,
                    });
                });
                it('大淀改', () => {
                    expect(calculate.bonus(大淀改, [5, 235, 124])).toEqual({
                        fire: 8,
                        aa: 4,
                        evasion: 6,
                    });
                });
            });
        });

        describe('副炮...', () => {
            describe('65mm/64 単装速射砲改...', () => {
                it('Conte di Cavour nuovo', () => {
                    expect(calculate.bonus(879, [430, 430])).toEqual({
                        aa: 6,
                        evasion: 4,
                    });
                });
                it('Zara due', () => {
                    expect(calculate.bonus(496, [430, 430])).toEqual({
                        aa: 4,
                        evasion: 2,
                    });
                });
            });
        });

        describe('魚雷...', () => {
            describe('533mm 三連装魚雷...', () => {
                it('Верный || 533mm 三連装魚雷', () => {
                    expect(calculate.bonus(147, [283])).toEqual({
                        fire: 1,
                        torpedo: 3,
                        armor: 1,
                    });
                });
                it('Верный || 533mm 三連装魚雷 ➕61cm三連装(酸素)魚雷後期型', () => {
                    expect(calculate.bonus(147, [283, 285])).toEqual({
                        fire: 1,
                        torpedo: 5,
                        armor: 1,
                        evasion: 1,
                    });
                });
            });
            describe('61cm三連装(酸素)魚雷後期型...', () => {
                describe('初春改二', () => {
                    it('61cm三連装(酸素)魚雷後期型', () => {
                        expect(calculate.bonus(326, [285])).toEqual({
                            torpedo: 2,
                            evasion: 1,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(calculate.bonus(326, [285, 285])).toEqual({
                            torpedo: 4,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(calculate.bonus(326, [285, 285, 285])).toEqual({
                            torpedo: 4,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐+9 | 61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(326, [285, 285, 285], [9])
                        ).toEqual({
                            torpedo: 4,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(calculate.bonus(326, [285], [10])).toEqual({
                            fire: 1,
                            torpedo: 3,
                            evasion: 1,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(calculate.bonus(326, [285, 285], [10])).toEqual({
                            fire: 1,
                            torpedo: 5,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(
                            calculate.bonus(326, [285, 285], [10, 10])
                        ).toEqual({
                            fire: 2,
                            torpedo: 5,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(326, [285, 285, 285], [10, 10])
                        ).toEqual({
                            fire: 2,
                            torpedo: 5,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(
                            calculate.bonus(326, [285, 285, 285], [10, 10, 10])
                        ).toEqual({
                            fire: 2,
                            torpedo: 8,
                            evasion: 2,
                        });
                    });
                });
                describe('天霧改二', () => {
                    it('61cm三連装(酸素)魚雷後期型', () => {
                        expect(calculate.bonus(天霧改二, [285])).toEqual({
                            torpedo: 2,
                            evasion: 1,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(calculate.bonus(天霧改二, [285, 285])).toEqual({
                            torpedo: 6,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(天霧改二, [285, 285, 285])
                        ).toEqual({
                            torpedo: 8,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐+9 | 61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(天霧改二, [285, 285, 285], [9])
                        ).toEqual({
                            torpedo: 8,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(calculate.bonus(天霧改二, [285], [10])).toEqual({
                            fire: 1,
                            torpedo: 3,
                            evasion: 1,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(天霧改二, [285, 285], [10])
                        ).toEqual({
                            fire: 1,
                            torpedo: 7,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(
                            calculate.bonus(天霧改二, [285, 285], [10, 10])
                        ).toEqual({
                            fire: 2,
                            torpedo: 7,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(天霧改二, [285, 285, 285], [10, 10])
                        ).toEqual({
                            fire: 2,
                            torpedo: 9,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(
                            calculate.bonus(
                                天霧改二,
                                [285, 285, 285],
                                [10, 10, 10]
                            )
                        ).toEqual({
                            fire: 2,
                            torpedo: 12,
                            evasion: 2,
                        });
                    });
                });
                describe('天霧改二丁', () => {
                    it('61cm三連装(酸素)魚雷後期型', () => {
                        expect(calculate.bonus(天霧改二丁, [285])).toEqual({
                            torpedo: 2,
                            evasion: 1,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(calculate.bonus(天霧改二丁, [285, 285])).toEqual(
                            {
                                torpedo: 5,
                                evasion: 2,
                            }
                        );
                    });
                    it('61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(天霧改二丁, [285, 285, 285])
                        ).toEqual({
                            torpedo: 6,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐+9 | 61cm三連装(酸素)魚雷後期型 | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(天霧改二丁, [285, 285, 285], [9])
                        ).toEqual({
                            torpedo: 6,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(
                            calculate.bonus(天霧改二丁, [285], [10])
                        ).toEqual({
                            fire: 1,
                            torpedo: 3,
                            evasion: 1,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(天霧改二丁, [285, 285], [10])
                        ).toEqual({
                            fire: 1,
                            torpedo: 3 + 3,
                            evasion: 1 + 1,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(
                            calculate.bonus(天霧改二丁, [285, 285], [10, 10])
                        ).toEqual({
                            fire: 2,
                            torpedo: 6,
                            evasion: 2,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型', () => {
                        expect(
                            calculate.bonus(
                                天霧改二丁,
                                [285, 285, 285],
                                [10, 10]
                            )
                        ).toEqual({
                            fire: 1 + 1,
                            torpedo: 3 + 3 + 1,
                            evasion: 1 + 1,
                        });
                    });
                    it('61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX | 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                        expect(
                            calculate.bonus(
                                天霧改二丁,
                                [285, 285, 285],
                                [10, 10, 10]
                            )
                        ).toEqual({
                            fire: 2,
                            torpedo: 10,
                            evasion: 2,
                        });
                    });
                });
            });
        });

        describe('艦上機...', () => {
            describe('Re. series...', () => {
                it('Aquila改 || Re.2001 OR改 ➕Re.2005 改 ➕Re.2001 CB改 ➕Re.2001 G改', () => {
                    expect(calculate.bonus(365, [184, 189, 316, 188])).toEqual({
                        fire: 8,
                        aa: 5,
                        evasion: 7,
                    });
                });
                it('Graf Zeppelin改 || Re.2001 OR改 ➕Re.2005 改 ➕Re.2001 CB改 ➕Re.2001 G改', () => {
                    expect(calculate.bonus(353, [184, 189, 316, 188])).toEqual({
                        aa: 1,
                        evasion: 2,
                    });
                });
            });
            describe('二式艦上偵察機', () => {
                it('Saratoga・Mk.II Mod.2 || 二式艦上偵察機 ➕二式艦上偵察機⭐1 ➕二式艦上偵察機⭐2 ➕二式艦上偵察機⭐MAX', () => {
                    expect(
                        calculate.bonus(550, [61, 61, 61, 61], [0, 1, 2, 10])
                    ).toEqual({
                        fire: 2,
                        los: 4,
                    });
                });
                it('蒼龍改二 || 二式艦上偵察機 ➕二式艦上偵察機⭐1 ➕二式艦上偵察機⭐2 ➕二式艦上偵察機⭐MAX', () => {
                    expect(
                        calculate.bonus(197, [61, 61, 61, 61], [0, 1, 2, 10])
                    ).toEqual({
                        fire: 12,
                        los: 14,
                        range: '1',
                    });
                });
            });
            describe('江草隊', () => {
                it('蒼龍改二 || 九九式艦爆(江草隊) ➕九九式艦爆(江草隊) ➕彗星(江草隊) ➕彗星(江草隊)', () => {
                    expect(
                        calculate.bonus(197, [99, 99, 100, 100], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 10,
                    });
                });
                it('飛龍改二 || 九九式艦爆(江草隊) ➕九九式艦爆(江草隊) ➕彗星(江草隊) ➕彗星(江草隊)', () => {
                    expect(
                        calculate.bonus(196, [99, 99, 100, 100], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4,
                    });
                });
            });
            describe('友永隊', () => {
                it('蒼龍改二 || 九七式艦攻(友永隊) ➕九七式艦攻(友永隊) ➕天山一二型(友永隊) ➕天山一二型(友永隊)', () => {
                    expect(
                        calculate.bonus(197, [93, 93, 94, 94], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4,
                    });
                });
                it('飛龍改二 || 九七式艦攻(友永隊) ➕九七式艦攻(友永隊) ➕天山一二型(友永隊) ➕天山一二型(友永隊)', () => {
                    expect(
                        calculate.bonus(196, [93, 93, 94, 94], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 10,
                    });
                });
            });
            describe('村田隊', () => {
                it('龍驤改二 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(157, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 2,
                    });
                });
                it('赤城改 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(277, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 6,
                    });
                });
                it('加賀改 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(278, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4,
                    });
                });
                it('翔鶴改 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(288, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4,
                    });
                });
                it('翔鶴改二甲 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(466, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 6,
                    });
                });
                it('瑞鶴改 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(112, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 2,
                    });
                });
                it('瑞鶴改二甲 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(467, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 3,
                    });
                });
            });
            describe('流星', () => {
                it('赤城改二戊 || 流星 ➕流星 ➕流星 ➕流星改 ➕流星改', () => {
                    expect(calculate.bonus(599, [18, 18, 18, 52, 52])).toEqual({
                        fire: 10,
                        evasion: 5,
                    });
                });
            });
            describe('九六式艦戦 series...', () => {
                it('雲龍改 || 九六式艦戦 ➕九六式艦戦改', () => {
                    expect(calculate.bonus(406, [19, 228])).toEqual({});
                });
                it('龍驤改二 || 九六式艦戦 ➕九六式艦戦改', () => {
                    expect(calculate.bonus(157, [19, 228])).toEqual({
                        aa: 2,
                        asw: 2,
                        evasion: 2,
                    });
                });
                it('鳳翔改 || 九六式艦戦 ➕九六式艦戦改', () => {
                    expect(calculate.bonus(285, [19, 228])).toEqual({
                        fire: 5,
                        aa: 7,
                        asw: 8,
                        evasion: 8,
                    });
                });
                it('春日丸 || 九六式艦戦 ➕九六式艦戦改', () => {
                    expect(calculate.bonus(521, [19, 228])).toEqual({
                        fire: 4,
                        aa: 3,
                        asw: 10,
                        evasion: 3,
                    });
                });
                it('大鷹改二 || 九六式艦戦 ➕九六式艦戦改', () => {
                    expect(calculate.bonus(529, [19, 228])).toEqual({
                        fire: 4,
                        aa: 3,
                        asw: 10,
                        evasion: 3,
                    });
                });
            });
            describe('天山一二型', () => {
                it('翔鶴 || 天山一二型(村田隊) ➕天山一二型甲改(空六号電探改装備機) ➕天山一二型甲改(熟練/空六号電探改装備機)', () => {
                    expect(
                        calculate.bonus(110, [144, 373, 374], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4,
                        torpedo: 2,
                        evasion: 2,
                    });
                });
                it('翔鶴改二甲 || 天山一二型(村田隊) ➕天山一二型甲改(空六号電探改装備機) ➕天山一二型甲改(熟練/空六号電探改装備機)', () => {
                    expect(
                        calculate.bonus(466, [144, 373, 374], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 9,
                        torpedo: 5,
                        evasion: 5,
                    });
                });
            });
            describe('紫電改四', () => {
                it('鈴谷航改二 || 紫電改四 + 紫電改四', () => {
                    expect(calculate.bonus(鈴谷航改二, [271, 271])).toEqual({});
                });
                it('鈴谷航改二 || 紫電改四⭐3 + 紫電改四⭐MAX + 紫電改四⭐7', () => {
                    expect(
                        calculate.bonus(鈴谷航改二, [271, 271, 271], [3, 10, 7])
                    ).toEqual({
                        fire: 3,
                        aa: 4,
                        evasion: 2,
                    });
                });
            });
            describe('Fulmar(戦闘偵察/熟練)', () => {
                it('Victorious || Fulmar(戦闘偵察/熟練) + Fulmar(戦闘偵察/熟練)', () => {
                    expect(calculate.bonus(713, [423, 423])).toEqual({
                        fire: 8,
                        aa: 8,
                        los: 8,
                        evasion: 8,
                    });
                });
                it('Victorious || Fulmar(戦闘偵察/熟練)⭐1 + Fulmar(戦闘偵察/熟練)⭐MAX + Fulmar(戦闘偵察/熟練)⭐7', () => {
                    expect(
                        calculate.bonus(713, [423, 423, 423], [3, 10, 7])
                    ).toEqual({
                        fire: 14,
                        aa: 12,
                        los: 15,
                        evasion: 12,
                    });
                });
                it('Saratoga || Fulmar(戦闘偵察/熟練)⭐1 + Fulmar(戦闘偵察/熟練)⭐5 + Fulmar(戦闘偵察/熟練)⭐3', () => {
                    expect(
                        calculate.bonus(545, [423, 423, 423], [1, 5, 3])
                    ).toEqual({
                        fire: 4,
                        aa: 3,
                        los: 4,
                        evasion: 3,
                    });
                });
                it('Aquila || Fulmar(戦闘偵察/熟練)⭐1 + Fulmar(戦闘偵察/熟練)⭐5 + Fulmar(戦闘偵察/熟練)⭐3', () => {
                    expect(
                        calculate.bonus(365, [423, 423, 423], [1, 5, 3])
                    ).toEqual({
                        fire: 1,
                        los: 1,
                    });
                });
            });
        });

        describe('電探...', () => {
            describe('13号対空電探改...', () => {
                it('Верный || 13号対空電探改 ➕13号対空電探改', () => {
                    expect(calculate.bonus(147, [106, 106])).toEqual({
                        aa: 2,
                        evasion: 6,
                        armor: 2,
                    });
                });
                it('時雨改二 || 13号対空電探改 ➕13号対空電探改', () => {
                    expect(calculate.bonus(145, [106, 106])).toEqual({
                        fire: 2,
                        aa: 4,
                        evasion: 6,
                        armor: 2,
                    });
                });
                it('長門改二 || 13号対空電探改', () => {
                    expect(calculate.bonus(541, [106])).toEqual({
                        fire: 1,
                        aa: 2,
                        evasion: 3,
                        armor: 1,
                    });
                });
                it('涼月改 || 13号対空電探改', () => {
                    expect(calculate.bonus(537, [106])).toEqual({
                        aa: 2,
                        evasion: 2,
                        armor: 1,
                    });
                });
            });
            describe('13号対空電探改二...', () => {
                it('朧改 || 12.7cm連装砲A型改三(戦時改修)＋高射装置 | 12.7cm連装砲B型改四(戦時改修)＋高射装置 | 13号対空電探改二', () => {
                    expect(calculate.bonus(230, [295, 296, 450])).toEqual({
                        fire: 7,
                        torpedo: 3,
                        aa: 13,
                        evasion: 4,
                    });
                });
            });
        });

        describe('対潜兵装...', () => {
            describe('三式水中探信儀...', () => {
                it('山雲改 || 三式水中探信儀 ➕三式水中探信儀', () => {
                    expect(calculate.bonus(328, [47, 47])).toEqual({
                        evasion: 4,
                        asw: 4,
                    });
                });
                it('時雨改二 || 三式水中探信儀 ➕三式水中探信儀', () => {
                    expect(calculate.bonus(145, [47, 47])).toEqual({
                        fire: 2,
                        evasion: 4,
                        asw: 6,
                    });
                });
                it('睦月改二 || 三式水中探信儀改 + 三式水中探信儀改 + 三式水中探信儀改', () => {
                    expect(calculate.bonus(434, [438, 438, 438])).toEqual({
                        evasion: 1,
                        asw: 1,
                    });
                });
                it('山風 || 三式水中探信儀改 + 三式水中探信儀改 + 三式水中探信儀改', () => {
                    expect(calculate.bonus(山風, [438, 438, 438])).toEqual({
                        fire: 2,
                        evasion: 6,
                        asw: 8,
                    });
                });
                it('山風改二 || 三式水中探信儀改 + 三式水中探信儀改', () => {
                    expect(calculate.bonus(山風改二, [438, 438])).toEqual({
                        fire: 2,
                        evasion: 6,
                        asw: 8,
                    });
                });
                it('山風改二 || 三式水中探信儀改 + 三式水中探信儀改 + 三式水中探信儀改', () => {
                    expect(calculate.bonus(山風改二, [438, 438, 438])).toEqual({
                        fire: 2,
                        evasion: 6,
                        asw: 8,
                    });
                });
                it('山風改二 || 三式水中探信儀改 + 三式水中探信儀改⭐MAX + 三式水中探信儀改⭐5', () => {
                    expect(
                        calculate.bonus(山風改二, [438, 438, 438], [0, 10, 6])
                    ).toEqual({
                        fire: 2,
                        evasion: 8,
                        asw: 10,
                    });
                });
            });
            it('大和改二重 || 零式水中聴音機', () => {
                expect(calculate.bonus(916, [132])).toEqual({
                    evasion: 1,
                });
            });
            it('大和改二重 || 零式水中聴音機⭐MAX', () => {
                expect(calculate.bonus(916, [132], [10])).toEqual({
                    evasion: 1 + 2,
                    asw: 3,
                    hit: 1,
                });
            });
            it('大和改二重 || 零式水中聴音機⭐MAX | 零式水中聴音機', () => {
                expect(calculate.bonus(916, [132, 132], [10])).toEqual({
                    evasion: 1 + 2,
                    asw: 3,
                    hit: 1,
                });
            });
        });

        describe('その他...', () => {
            it('比叡改二 || 三式弾改 ➕三式弾改', () => {
                expect(calculate.bonus(150, [317, 317])).toEqual({
                    fire: 2,
                    aa: 2,
                });
            });
            it('比叡改二 || 探照灯', () => {
                expect(calculate.bonus(150, [74])).toEqual({
                    fire: 4,
                    evasion: -1,
                });
            });
            it('比叡改二 || 探照灯 ➕探照灯', () => {
                expect(calculate.bonus(150, [74, 74])).toEqual({
                    fire: 4,
                    evasion: -1,
                });
            });
            it('比叡改二 || 探照灯 ➕探照灯 ➕96式150cm探照灯', () => {
                expect(calculate.bonus(150, [74, 74, 140])).toEqual({
                    fire: 10,
                    evasion: -3,
                });
            });
            it('比叡改二 || 探照灯 ➕探照灯 ➕96式150cm探照灯 ➕96式150cm探照灯', () => {
                expect(calculate.bonus(150, [74, 74, 140, 140])).toEqual({
                    fire: 10,
                    evasion: -3,
                });
            });
            it('武蔵改二 || 探照灯 ➕探照灯 ➕96式150cm探照灯 ➕96式150cm探照灯', () => {
                expect(calculate.bonus(546, [74, 74, 140, 140])).toEqual({
                    fire: 4,
                    evasion: -1,
                });
            });
            it('陽炎改二 || 53cm艦首(酸素)魚雷', () => {
                expect(calculate.bonus(566, [67])).toEqual({
                    torpedo: -5,
                });
            });
            it('Johnston改 || SG レーダー(初期型)', () => {
                expect(calculate.bonus(689, [315])).toEqual({
                    fire: 3,
                    evasion: 3,
                    los: 4,
                    range: 1,
                });
            });
            it('Samuel B.Roberts改 || SG レーダー(初期型)', () => {
                expect(calculate.bonus(681, [315])).toEqual({
                    fire: 3,
                    evasion: 3,
                    los: 4,
                    range: 1,
                });
            });
            it('神威改母 || Swordfish(水上機型) ➕Swordfish Mk.III改(水上機型)', () => {
                expect(calculate.bonus(500, [367, 368])).toEqual({
                    fire: 2,
                    asw: 2,
                    los: 3,
                    evasion: 2,
                });
            });
            describe('一式徹甲弾改', () => {
                it('金剛改二', () => {
                    expect(calculate.bonus(149, [365])).toEqual({
                        fire: 1,
                    });
                });
                it('金剛改二丙', () => {
                    expect(calculate.bonus(591, [365])).toEqual({
                        fire: 3,
                    });
                });
                it('武蔵改', () => {
                    expect(calculate.bonus(148, [365])).toEqual({
                        fire: 1,
                    });
                });
                it('武蔵改二', () => {
                    expect(calculate.bonus(546, [365])).toEqual({
                        fire: 2,
                    });
                });
            });
            describe('甲標的 丁型改(蛟龍改)', () => {
                it('夕張改二特', () => {
                    expect(calculate.bonus(623, [364])).toEqual({
                        fire: 1,
                        torpedo: 4,
                        evasion: -2,
                    });
                });
                it('北上改二', () => {
                    expect(calculate.bonus(119, [364])).toEqual({
                        torpedo: 2,
                        evasion: -2,
                    });
                });
                it('大井改二', () => {
                    expect(calculate.bonus(118, [364])).toEqual({
                        torpedo: 1,
                        evasion: -2,
                    });
                });
                it('日進甲', () => {
                    expect(calculate.bonus(586, [364])).toEqual({
                        torpedo: 1,
                        evasion: -2,
                    });
                });
                it('伊13改', () => {
                    expect(calculate.bonus(374, [364])).toEqual({
                        fire: -1,
                        evasion: -7,
                    });
                });
                it('まるゆ改', () => {
                    expect(calculate.bonus(402, [364])).toEqual({
                        fire: -1,
                        evasion: -7,
                    });
                });
                it('由良改二', () => {
                    expect(calculate.bonus(488, [364])).toEqual({
                        fire: -1,
                        evasion: -7,
                    });
                });
            });
            describe('四式水中聴音機', () => {
                it('夕張改二丁', () => {
                    expect(calculate.bonus(624, [149])).toEqual({
                        asw: 3,
                        evasion: 5,
                    });
                });
                it('涼月', () => {
                    expect(calculate.bonus(532, [149])).toEqual({
                        asw: 1,
                        evasion: 2,
                    });
                });
            });
            describe('熟練見張員', () => {
                it('Prinz Eugen改', () => {
                    expect(calculate.bonus(177, [129])).toEqual({});
                });
                it('鈴谷改', () => {
                    expect(calculate.bonus(129, [129])).toEqual({
                        fire: 1,
                        los: 3,
                        evasion: 2,
                    });
                });
                it('摩耶改二', () => {
                    expect(calculate.bonus(428, [129, 129])).toEqual({
                        fire: 2,
                        los: 6,
                        evasion: 4,
                    });
                });
                it('Atlanta改', () => {
                    expect(calculate.bonus(696, [129])).toEqual({});
                });
                it('香取', () => {
                    expect(calculate.bonus(154, [129])).toEqual({
                        fire: 1,
                        torpedo: 2,
                        los: 3,
                        evasion: 2,
                    });
                });
                it('夕張改二特', () => {
                    expect(calculate.bonus(623, [129, 129])).toEqual({
                        fire: 2,
                        torpedo: 4,
                        los: 6,
                        evasion: 4,
                    });
                });
                it('Ташкент改', () => {
                    expect(calculate.bonus(395, [129])).toEqual({});
                });
                it('夕雲', () => {
                    expect(calculate.bonus(133, [129])).toEqual({
                        fire: 1,
                        torpedo: 2,
                        asw: 2,
                        los: 1,
                        evasion: 2,
                    });
                });
                it('春風改', () => {
                    expect(calculate.bonus(363, [129, 129])).toEqual({
                        fire: 2,
                        torpedo: 4,
                        asw: 4,
                        los: 2,
                        evasion: 4,
                    });
                });
                it('秋雲改二 || 12.7cm連装砲D型改二 | 12.7cm連装砲D型改三 | 42号対空電探改二 | 熟練見張員', () => {
                    // Base
                    expect(calculate.bonus(648, [366, 267, 411])).toEqual({
                        fire: 15,
                        torpedo: 10,
                        aa: 12,
                        evasion: 4,
                        hit: 1 + 2 + 1,
                    });
                    expect(
                        calculate.bonus(648, [366, 267, 411, null, 129])
                    ).toEqual({
                        fire: 18,
                        torpedo: 12,
                        aa: 14,
                        asw: 2,
                        evasion: 9,
                        los: 1,
                        hit: 1 + 2 + 1,
                    });
                    expect(
                        calculate.bonus(
                            648,
                            [366, 267, 411, null, 412],
                            [0, 0, 0, null, 1]
                        )
                    ).toEqual({
                        fire: 19,
                        torpedo: 14,
                        aa: 14,
                        asw: 2,
                        evasion: 10,
                        los: 1,
                        hit: 1 + 2 + 1,
                    });
                });
            });
            describe('42号対空電探改二', () => {
                // it('吹雪改二 || 42号対空電探改二', () => {
                //     expect(calculate.bonus(426, [411])).toEqual({});
                // });
                it('秋月改 || 42号対空電探改二', () => {
                    expect(calculate.bonus(330, [411])).toEqual({
                        evasion: -9,
                    });
                });
            });
            describe('プリエーゼ式水中防御隔壁', () => {
                it('Conte di Cavour nuovo', () => {
                    expect(calculate.bonus(879, [136, 136])).toEqual({
                        armor: 3,
                        evasion: 2,
                    });
                });
                it('Conte di Cavour nuovo', () => {
                    expect(
                        calculate.bonus(879, [136, 136, 136], [0, 10, 6])
                    ).toEqual({
                        armor: 3,
                        evasion: 2,
                    });
                });
                it('Conte di Cavour nuovo', () => {
                    expect(
                        calculate.bonus(879, [136, 136, 136], [0, 8, 2])
                    ).toEqual({
                        armor: 3,
                        evasion: 2,
                    });
                });
                it('Conte di Cavour', () => {
                    expect(calculate.bonus(877, [136, 136])).toEqual({
                        armor: 2,
                        evasion: 1,
                    });
                });
                it('Conte di Cavour', () => {
                    expect(
                        calculate.bonus(877, [136, 136, 136], [0, 10, 6])
                    ).toEqual({
                        armor: 5,
                        evasion: 1,
                    });
                });
                it('Conte di Cavour', () => {
                    expect(
                        calculate.bonus(877, [136, 136, 136], [0, 8, 2])
                    ).toEqual({
                        armor: 4,
                        evasion: 1,
                    });
                });
            });
            it('神州丸改 || 装甲艇(AB艇) | 武装大発', () => {
                expect(calculate.bonus(626, [408, 409])).toEqual({
                    fire: 4,
                    aa: 2,
                    los: 2,
                    evasion: 5,
                });
            });
            it('龍鳳改二 || 零式艦戦62型(爆戦) | 零式艦戦63型(爆戦)', () => {
                expect(calculate.bonus(888, [60, 219])).toEqual({
                    fire: 4,
                    aa: 2,
                    evasion: 4,
                });
            });
            describe('2cm 四連装FlaK 38', () => {
                it('秋月改 || 2cm 四連装FlaK 38', () => {
                    expect(calculate.bonus(330, [124, 84])).toEqual({});
                    expect(calculate.bonus(330, [124, 84], [0, 4])).toEqual({
                        aa: 2,
                        evasion: 1,
                    });
                    expect(calculate.bonus(330, [124, 84], [0, 10])).toEqual({
                        fire: 1,
                        aa: 4,
                        evasion: 2,
                    });
                    expect(
                        calculate.bonus(330, [124, 84, 84], [0, 4, 10])
                    ).toEqual({
                        fire: 1,
                        aa: 5,
                        evasion: 3,
                    });
                });
                it('Conte di Cavour nuovo || 2cm 四連装FlaK 38', () => {
                    expect(calculate.bonus(879, [124, 84])).toEqual({});
                    expect(calculate.bonus(879, [124, 84], [0, 4])).toEqual({
                        aa: 3,
                        evasion: 2,
                    });
                    expect(calculate.bonus(879, [124, 84], [0, 10])).toEqual({
                        fire: 2,
                        aa: 5,
                        evasion: 3,
                    });
                    expect(
                        calculate.bonus(879, [124, 84, 84], [0, 4, 10])
                    ).toEqual({
                        fire: 2,
                        aa: 7,
                        evasion: 5,
                    });
                    expect(
                        calculate.bonus(879, [124, 84, 84, 84], [0, 4, 10, 10])
                    ).toEqual({
                        fire: 3,
                        aa: 11,
                        evasion: 8,
                    });
                });
            });
            describe('後期型潜水艦搭載電探＆逆探', () => {
                it('呂500 || 後期型潜水艦搭載電探＆逆探', () => {
                    expect(calculate.bonus(436, [384])).toEqual({});
                    expect(calculate.bonus(436, [213])).toEqual({});
                    expect(calculate.bonus(436, [384, 213])).toEqual({
                        torpedo: 3,
                        evasion: 2,
                    });
                    expect(
                        calculate.bonus(436, [
                            214,
                            213,
                            undefined,
                            undefined,
                            384,
                        ])
                    ).toEqual({
                        torpedo: 3,
                        evasion: 2,
                    });
                    expect(
                        calculate.bonus(436, [
                            383,
                            213,
                            undefined,
                            undefined,
                            384,
                        ])
                    ).toEqual({
                        torpedo: 3,
                        evasion: 2,
                    });
                });
            });
            describe('12.7cm連装砲C型改三', () => {
                it('時雨改二 || 12.7cm連装砲C型改三', () => {
                    expect(calculate.bonus(145, [470])).toEqual({
                        fire: 2,
                        hit: 2,
                        evasion: 2,
                    });
                });
                it('時雨改二 || 12.7cm連装砲C型改三⭐+7', () => {
                    expect(calculate.bonus(145, [470], [7])).toEqual({
                        fire: 2,
                        hit: 3,
                        evasion: 2,
                    });
                });
                it('時雨改二 || 12.7cm連装砲C型改三⭐+7 | 12.7cm連装砲C型改三', () => {
                    expect(calculate.bonus(145, [470, 470], [7])).toEqual({
                        fire: 2 + 3,
                        hit: 2 + 1,
                        evasion: 2 + 2,
                    });
                });
                it('時雨改二 || 12.7cm連装砲C型改三⭐+7 | 12.7cm連装砲C型改三 | 12.7cm連装砲C型改三', () => {
                    expect(calculate.bonus(145, [470, 470, 470], [7])).toEqual({
                        fire: 2 + 3 + 1,
                        hit: 2 + 1,
                        evasion: 2 + 2 + 2,
                    });
                });
            });
            it('神鷹改二 || 二式爆雷', () => {
                expect(
                    calculate.bonus(536, [227, 227, 227], [0, 8, 10])
                ).toEqual({
                    asw: 3,
                });
            });
        });

        describe('Sets...', () => {
            it('吹雪改二 || 12.7cm連装砲A型改三(戦時改修)＋高射装置 ➕61cm三連装(酸素)魚雷 ➕61cm三連装(酸素)魚雷後期型', () => {
                expect(calculate.bonus(426, [295, 125, 285])).toEqual({
                    fire: 4,
                    torpedo: 8,
                    aa: 2,
                    evasion: 1,
                });
            });
            it('吹雪改二 || 12.7cm連装砲A型改三(戦時改修)＋高射装置 ➕61cm三連装(酸素)魚雷 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(426, [295, 125, 285], [0, 0, 10])
                ).toEqual({
                    fire: 5,
                    torpedo: 9,
                    aa: 2,
                    evasion: 1,
                });
            });
            it('金剛改二丙 || 三式弾 ➕三式弾 ➕三式弾改 ➕三式弾改', () => {
                expect(
                    calculate.bonus(591, [35, 35, 317, 317], [0, 0, 0])
                ).toEqual({
                    fire: 4,
                    aa: 4,
                });
            });
            it('曙改二 || 12.7cm連装高角砲改二 | 7.7mm機銃', () => {
                expect(calculate.bonus(665, [380, 37], [0, 0, 0])).toEqual({
                    fire: 4,
                    aa: 5,
                    evasion: 3,
                });
            });
            it('曙改二 || 12.7cm連装高角砲改二 | 12.7cm連装高角砲改二 | 7.7mm機銃', () => {
                expect(calculate.bonus(665, [380, 380, 37], [0, 0, 0])).toEqual(
                    {
                        fire: 6,
                        aa: 7,
                        evasion: 3,
                    }
                );
            });
        });

        describe('Specific Ships', () => {
            describe('敷波改二', () => {
                it('12.7cm連装砲B型改二 ➕12.7cm連装砲B型改四(戦時改修)+高射装置 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                    expect(
                        calculate.bonus(627, [63, 296, 285], [0, 0, 10])
                    ).toEqual({
                        fire: 6,
                        torpedo: 7,
                        aa: 1,
                        evasion: 1,
                    });
                });
            });
            describe('夕張改二', () => {
                it('130mm B-13連装砲 ➕6inch連装速射砲 Mk.XXI', () => {
                    expect(calculate.bonus(622, [282, 359], [])).toEqual({
                        fire: 4,
                        aa: 2,
                        armor: 1,
                        evasion: 1,
                    });
                });
            });
            describe('夕張改二特', () => {
                it('14cm連装砲 ➕5inch連装両用砲(集中配備)', () => {
                    expect(calculate.bonus(623, [119, 362], [])).toEqual({
                        fire: -2,
                        aa: -3,
                        evasion: -8,
                    });
                });
            });
            describe('夕張改二丁', () => {
                it('14cm連装砲改 ➕14cm連装砲改⭐+8 ➕33号対水上電探', () => {
                    expect(
                        calculate.bonus(624, [310, 310, 29], [0, 8, 0])
                    ).toEqual({
                        fire: 12,
                        torpedo: 3,
                        aa: 2,
                        evasion: 6,
                        asw: 2,
                    });
                });
            });
            describe('能代改二', () => {
                it('15.2cm連装砲改 | 15.2cm連装砲改二 | AA+Surface Radar | 探照灯', () => {
                    expect(
                        calculate.bonus(能代改二, [139, 407, 124, 74])
                    ).toEqual({
                        fire: 12,
                        torpedo: 4,
                        aa: 5,
                        evasion: 6,
                    });
                });
                it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機', () => {
                    expect(calculate.bonus(能代改二, [66, 286, 149])).toEqual({
                        torpedo: 2,
                        aa: 2,
                        asw: 2,
                        evasion: 5,
                    });
                });
                it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 21号対空電探', () => {
                    expect(
                        calculate.bonus(能代改二, [66, 286, 149, 30])
                    ).toEqual({
                        torpedo: 2,
                        aa: 3,
                        asw: 2,
                        evasion: 7,
                    });
                });
                it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 42号対空電探', () => {
                    expect(
                        calculate.bonus(能代改二, [66, 286, 149, 32])
                    ).toEqual({
                        torpedo: 5,
                        aa: 3,
                        asw: 2,
                        evasion: 9,
                    });
                });
                it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | FuMO25 レーダー', () => {
                    expect(
                        calculate.bonus(能代改二, [66, 286, 149, 124])
                    ).toEqual({
                        torpedo: 5,
                        aa: 3,
                        asw: 2,
                        evasion: 9,
                    });
                });
                it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | GFCS Mk.37', () => {
                    expect(
                        calculate.bonus(能代改二, [66, 286, 149, 307])
                    ).toEqual({
                        torpedo: 5,
                        aa: 3,
                        asw: 2,
                        evasion: 9,
                    });
                });
                it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機', () => {
                    expect(calculate.bonus(能代改二, [220, 286, 149])).toEqual({
                        fire: 1,
                        torpedo: 2,
                        aa: 5,
                        asw: 2,
                        evasion: 7,
                    });
                });
                it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | FuMO25 レーダー', () => {
                    expect(
                        calculate.bonus(能代改二, [220, 286, 149, 124])
                    ).toEqual({
                        fire: 1,
                        torpedo: 5,
                        aa: 9,
                        asw: 2,
                        evasion: 14,
                    });
                });
                it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | GFCS Mk.37', () => {
                    expect(
                        calculate.bonus(能代改二, [220, 286, 149, 307])
                    ).toEqual({
                        fire: 1,
                        torpedo: 5,
                        aa: 9,
                        asw: 2,
                        evasion: 14,
                    });
                });
                it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 8cm高角砲改', () => {
                    expect(
                        calculate.bonus(能代改二, [220, 286, 149, 66])
                    ).toEqual({
                        fire: 1,
                        torpedo: 2,
                        aa: 7,
                        asw: 2,
                        evasion: 8,
                    });
                });
                it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 13号対空電探改 | 8cm高角砲改', () => {
                    expect(
                        calculate.bonus(能代改二, [220, 286, 149, 106, 66])
                    ).toEqual({
                        fire: 1,
                        torpedo: 2,
                        aa: 11,
                        asw: 2,
                        evasion: 13,
                    });
                });
                it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 21号対空電探 | 8cm高角砲改', () => {
                    expect(
                        calculate.bonus(能代改二, [220, 286, 149, 30, 66])
                    ).toEqual({
                        fire: 1,
                        torpedo: 2,
                        aa: 11,
                        asw: 2,
                        evasion: 13,
                    });
                });
                it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | FuMO25 レーダー | 8cm高角砲改', () => {
                    expect(
                        calculate.bonus(能代改二, [220, 286, 149, 124, 66])
                    ).toEqual({
                        fire: 1,
                        torpedo: 5,
                        aa: 11,
                        asw: 2,
                        evasion: 15,
                    });
                });
                it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | GFCS Mk.37 | 8cm高角砲改', () => {
                    expect(
                        calculate.bonus(能代改二, [220, 286, 149, 307, 66])
                    ).toEqual({
                        fire: 1,
                        torpedo: 5,
                        aa: 11,
                        asw: 2,
                        evasion: 15,
                    });
                });
                it('三式爆雷投射機 集中配備 | 試製15cm9連装対潜噴進砲', () => {
                    expect(calculate.bonus(能代改二, [287, 288])).toEqual({
                        asw: 7,
                        evasion: 1,
                    });
                });
                it('25mm対空機銃', () => {
                    expect(
                        calculate.bonus(能代改二, [49, 39, 40, 131])
                    ).toEqual({
                        aa: 8,
                        evasion: 4,
                    });
                });
                it('S9 Osprey x2 | 水上偵察機 x2', () => {
                    expect(
                        calculate.bonus(能代改二, [304, 304, 239, 238])
                    ).toEqual({
                        fire: 4,
                        asw: 5,
                        evasion: 3,
                    });
                });
                it('S9 Osprey x2 | 水上偵察機 | 夜偵', () => {
                    expect(
                        calculate.bonus(能代改二, [304, 304, 239, 102])
                    ).toEqual({
                        fire: 4,
                        asw: 5,
                        evasion: 3,
                    });
                });
                it('S9 Osprey x3', () => {
                    expect(calculate.bonus(能代改二, [304, 304, 304])).toEqual({
                        fire: 5,
                        asw: 6,
                        evasion: 4,
                    });
                });
                it('回転翼機 x4', () => {
                    expect(
                        calculate.bonus(能代改二, [69, 326, 327, 325])
                    ).toEqual({
                        asw: 4,
                        evasion: 1,
                    });
                });
                it('水上爆撃機 (T0) x4', () => {
                    expect(
                        calculate.bonus(能代改二, [194, 367, 368, 369])
                    ).toEqual({
                        fire: 1,
                        asw: 1,
                        evasion: 1,
                    });
                });
                it('水上爆撃機 (T1) x4', () => {
                    expect(
                        calculate.bonus(能代改二, [26, 62, 208, 79])
                    ).toEqual({
                        fire: 3,
                        asw: 1,
                        evasion: 2,
                    });
                });
                it('水上爆撃機 (T2) x4', () => {
                    expect(
                        calculate.bonus(能代改二, [237, 237, 322, 323])
                    ).toEqual({
                        fire: 4,
                        asw: 1,
                        evasion: 2,
                    });
                });
                it('水上爆撃機 T0 + T1 + T1 + T2', () => {
                    expect(
                        calculate.bonus(能代改二, [367, 62, 208, 322])
                    ).toEqual({
                        fire: 6,
                        asw: 1,
                        evasion: 3,
                    });
                });
            });
            describe('矢矧改二', () => {
                [矢矧改二, 矢矧改二乙].forEach((ship) => {
                    it('15.2cm連装砲改 | 15.2cm連装砲改二', () => {
                        expect(calculate.bonus(ship, [139, 407])).toEqual({
                            fire: 6,
                            aa: 3,
                            evasion: 1,
                        });
                    });
                    it('15.2cm連装砲改 | 15.2cm連装砲改二 | 探照灯', () => {
                        expect(calculate.bonus(ship, [139, 407, 74])).toEqual({
                            fire: 10,
                            torpedo: 2,
                            aa: 3,
                            evasion: 1,
                        });
                    });
                    it('15.2cm連装砲改 | 15.2cm連装砲改二 | FuMO25 レーダー | 探照灯', () => {
                        expect(
                            calculate.bonus(ship, [139, 407, 124, 74])
                        ).toEqual({
                            fire: 12,
                            torpedo: 4,
                            aa: 5,
                            evasion: 6,
                        });
                    });
                    it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機', () => {
                        expect(calculate.bonus(ship, [66, 286, 149])).toEqual({
                            aa: 2,
                            torpedo: 2,
                            evasion: 1,
                        });
                    });
                    it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 21号対空電探', () => {
                        expect(
                            calculate.bonus(ship, [66, 286, 149, 30])
                        ).toEqual({
                            aa: 3,
                            torpedo: 2,
                            evasion: 3,
                        });
                    });
                    it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 42号対空電探', () => {
                        expect(
                            calculate.bonus(ship, [66, 286, 149, 32])
                        ).toEqual({
                            aa: 3,
                            torpedo: 5,
                            evasion: 5,
                        });
                    });
                    it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | FuMO25 レーダー', () => {
                        expect(
                            calculate.bonus(ship, [66, 286, 149, 124])
                        ).toEqual({
                            aa: 3,
                            torpedo: 5,
                            evasion: 5,
                        });
                    });
                    it('8cm高角砲改 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | GFCS Mk.37', () => {
                        expect(
                            calculate.bonus(ship, [66, 286, 149, 307])
                        ).toEqual({
                            aa: 3,
                            torpedo: 5,
                            evasion: 5,
                        });
                    });
                    it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機', () => {
                        expect(calculate.bonus(ship, [220, 286, 149])).toEqual({
                            fire: 1,
                            torpedo: 2,
                            aa: 5,
                            evasion: 3,
                        });
                    });
                    it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | FuMO25 レーダー', () => {
                        expect(
                            calculate.bonus(ship, [220, 286, 149, 124])
                        ).toEqual({
                            fire: 1,
                            torpedo: 5,
                            aa: 9,
                            evasion: 10,
                        });
                    });
                    it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | GFCS Mk.37', () => {
                        expect(
                            calculate.bonus(ship, [220, 286, 149, 307])
                        ).toEqual({
                            fire: 1,
                            torpedo: 5,
                            aa: 9,
                            evasion: 10,
                        });
                    });
                    it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 8cm高角砲改', () => {
                        expect(
                            calculate.bonus(ship, [220, 286, 149, 66])
                        ).toEqual({
                            fire: 1,
                            torpedo: 2,
                            aa: 7,
                            evasion: 4,
                        });
                    });
                    it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 13号対空電探改 | 8cm高角砲改', () => {
                        expect(
                            calculate.bonus(ship, [220, 286, 149, 106, 66])
                        ).toEqual({
                            fire: 2,
                            torpedo: 2,
                            aa: ship === 矢矧改二 ? 14 : 15,
                            evasion: ship === 矢矧改二 ? 12 : 13,
                            armor: 2,
                        });
                    });
                    it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | 21号対空電探 | 8cm高角砲改', () => {
                        expect(
                            calculate.bonus(ship, [220, 286, 149, 30, 66])
                        ).toEqual({
                            fire: 1,
                            torpedo: 2,
                            aa: 11,
                            evasion: 9,
                        });
                    });
                    it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | FuMO25 レーダー | 8cm高角砲改', () => {
                        expect(
                            calculate.bonus(ship, [220, 286, 149, 124, 66])
                        ).toEqual({
                            fire: 1,
                            torpedo: 5,
                            aa: 11,
                            evasion: 11,
                        });
                    });
                    it('8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 四式水中聴音機 | GFCS Mk.37 | 8cm高角砲改', () => {
                        expect(
                            calculate.bonus(ship, [220, 286, 149, 307, 66])
                        ).toEqual({
                            fire: 1,
                            torpedo: 5,
                            aa: 11,
                            evasion: 11,
                        });
                    });
                    it('三式爆雷投射機 集中配備 | 試製15cm9連装対潜噴進砲', () => {
                        expect(calculate.bonus(ship, [287, 288])).toEqual({});
                    });
                    it('25mm対空機銃', () => {
                        expect(
                            calculate.bonus(ship, [49, 39, 40, 131])
                        ).toEqual({
                            aa: 8,
                            evasion: 4,
                        });
                    });
                    it('S9 Osprey x2 | 零式水上観測機 | 零式水上観測機', () => {
                        expect(
                            calculate.bonus(ship, [304, 304, 59, 59])
                        ).toEqual({
                            fire: 4,
                            asw: 5,
                            evasion: 3,
                        });
                    });
                    it('S9 Osprey x2 | 零式水上観測機 | 零式水上観測機', () => {
                        expect(
                            calculate.bonus(ship, [304, 304, 59, 59])
                        ).toEqual({
                            fire: 4,
                            asw: 5,
                            evasion: 3,
                        });
                    });
                    it('S9 Osprey x2 | 水上偵察機 | 夜偵', () => {
                        expect(
                            calculate.bonus(ship, [304, 304, 239, 102])
                        ).toEqual({
                            fire: 4,
                            asw: 5,
                            evasion: 3,
                        });
                    });
                    it('S9 Osprey x3', () => {
                        expect(calculate.bonus(ship, [304, 304, 304])).toEqual({
                            fire: 5,
                            asw: 6,
                            evasion: 4,
                        });
                    });
                    it('回転翼機 x4', () => {
                        expect(
                            calculate.bonus(ship, [69, 326, 327, 325])
                        ).toEqual({
                            asw: 3,
                            evasion: 1,
                        });
                    });
                    it('水上爆撃機 (T0) x4', () => {
                        expect(
                            calculate.bonus(ship, [194, 367, 368, 369])
                        ).toEqual({
                            fire: 1,
                            asw: 1,
                            evasion: 1,
                        });
                    });
                    it('水上爆撃機 (T1) x4', () => {
                        expect(
                            calculate.bonus(ship, [26, 62, 208, 79])
                        ).toEqual({
                            fire: 3,
                            aa: 4,
                            asw: 1,
                            evasion: 5,
                        });
                    });
                    it('水上爆撃機 (T2) x1', () => {
                        expect(calculate.bonus(ship, [237])).toEqual({
                            fire: 4,
                            aa: 1,
                            asw: 1,
                            evasion: 3,
                        });
                    });
                    it('水上爆撃機 (T2) x4', () => {
                        expect(
                            calculate.bonus(ship, [237, 237, 322, 323])
                        ).toEqual({
                            fire: 13,
                            aa: 4,
                            asw: 1,
                            evasion: 9,
                        });
                    });
                    it('水上爆撃機 T0 + T1 + T1 + T2', () => {
                        expect(
                            calculate.bonus(ship, [367, 62, 208, 322])
                        ).toEqual({
                            fire: 6,
                            aa: 3,
                            asw: 1,
                            evasion: 5,
                        });
                    });
                });
            });
            describe('香取改・鹿島改', () => {
                [香取改, 鹿島改].forEach((sid) => {
                    it('九四式爆雷投射機 | 三式爆雷投射機 集中配備 | 九三式水中聴音機 | 四式水中聴音機', () => {
                        expect(
                            calculate.bonus(sid, [44, 287, 46, 149])
                        ).toEqual({
                            asw: 5,
                            evasion: 5,
                        });
                    });
                    it('25mm対空機銃', () => {
                        expect(calculate.bonus(sid, [49, 39, 40, 131])).toEqual(
                            {
                                fire: 4,
                                aa: 8,
                                evasion: 8,
                            }
                        );
                    });
                });
            });
            describe('時雨改三', () => {
                it('13号対空電探', () => {
                    expect(calculate.bonus(時雨改三, [27])).toEqual({
                        fire: 1,
                        aa: 2,
                        evasion: 3,
                    });
                });
                it('二式爆雷改二', () => {
                    expect(calculate.bonus(時雨改二, [488], [8])).toEqual({
                        asw: 7,
                        hit: 3,
                        evasion: 7,
                    });
                });
                it('二式爆雷改二', () => {
                    expect(calculate.bonus(時雨改三, [488], [8])).toEqual({
                        asw: 7,
                        hit: 3,
                        evasion: 7,
                    });
                });
                it('12.7cm連装砲C型改二 | 水上電探', () => {
                    expect(calculate.bonus(時雨改三, [266, 266, 28])).toEqual({
                        fire: 5,
                        torpedo: 3,
                        evasion: 5,
                        hit: 2,
                    });
                });
            });
            describe('沖波改二', () => {
                it('13号対空電探', () => {
                    expect(calculate.bonus(沖波改二, [27])).toEqual({
                        fire: 1,
                        aa: 2,
                        evasion: 3,
                    });
                });
                it('12.7cm連装砲D型改三', () => {
                    expect(calculate.bonus(沖波改二, [366])).toEqual({
                        fire: 5,
                        aa: 5,
                        evasion: 1,
                        hit: 1,
                    });
                });
                it('12.7cm連装砲D型改三 | 13号対空電探', () => {
                    expect(calculate.bonus(沖波改二, [27, 366])).toEqual({
                        fire: 1 + 5 + 1,
                        aa: 2 + 5 + 5,
                        evasion: 3 + 1 + 3,
                        hit: 1 + 1,
                    });
                });
                it('12.7cm連装砲D型改三 | 33号対水上電探', () => {
                    expect(calculate.bonus(沖波改二, [29, 366])).toEqual({
                        fire: 5 + 2,
                        torpedo: 4,
                        aa: 5,
                        evasion: 1 + 2,
                        hit: 1 + 2,
                    });
                });
                it('12.7cm連装砲D型改三 | GFCS Mk.37', () => {
                    expect(calculate.bonus(沖波改二, [307, 366])).toEqual({
                        fire: 5 + 1 + 2 + 1,
                        torpedo: 4,
                        aa: 5 + 2 + 5,
                        evasion: 1 + 3 + 2 + 3,
                        hit: 1 + 2 + 1,
                    });
                });
            });
            describe('秋雲改二', () => {
                it('12.7cm連装砲D型改二 | 探照灯', () => {
                    expect(calculate.bonus(秋雲改二, [267, 74])).toEqual({
                        fire: 8,
                        evasion: -2,
                    });
                });
                it('12.7cm連装砲D型改三 | 探照灯', () => {
                    expect(calculate.bonus(秋雲改二, [366, 74])).toEqual({
                        fire: 10,
                        aa: 5,
                        evasion: -2,
                        hit: 1,
                    });
                });
                it('12.7cm連装砲D型改二 | 12.7cm連装砲D型改三', () => {
                    expect(calculate.bonus(秋雲改二, [267, 366])).toEqual({
                        fire: 8,
                        aa: 5,
                        evasion: 2,
                        hit: 1,
                    });
                });
                it('12.7cm連装砲D型改二 | 12.7cm連装砲D型改三 | 探照灯', () => {
                    expect(calculate.bonus(秋雲改二, [267, 366, 74])).toEqual({
                        fire: 13,
                        aa: 5,
                        hit: 1,
                        evasion: -1,
                    });
                });
            });
            describe('丹陽', () => {
                it('12.7cm連装砲C型改二 | 12.7cm連装砲D型改二 | 12.7cm連装砲D型改三', () => {
                    expect(calculate.bonus(丹陽, [266, 267, 366])).toEqual({
                        fire: 3,
                        evasion: 3,
                    });
                });
                it('現地改装12.7cm連装高角砲 | 現地改装12.7cm連装高角砲⭐4 | 22号対水上電探', () => {
                    expect(
                        calculate.bonus(丹陽, [397, 397, 28], [0, 4, 0])
                    ).toEqual({
                        fire: 17,
                        aa: 4,
                        evasion: 6,
                    });
                });
                it('対潜短魚雷(試作初期型) | RUR-4A Weapon Alpha改 | 試製15cm9連装対潜噴進砲', () => {
                    expect(calculate.bonus(丹陽, [378, 377, 288], [])).toEqual({
                        asw: 2,
                        evasion: 3,
                    });
                });
            });
            describe('雪風改二', () => {
                it('12.7cm連装砲C型改二 | 12.7cm連装砲D型改二 | 12.7cm連装砲D型改三', () => {
                    expect(calculate.bonus(雪風改二, [266, 267, 366])).toEqual({
                        fire: 2 + 2 + 2,
                        aa: 2,
                        evasion: 1 + 1 + 1,
                    });
                });
                it('5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                    expect(calculate.bonus(雪風改二, [308])).toEqual({
                        fire: 2,
                        aa: 1,
                        evasion: 1,
                    });
                });
                it('10cm高角砲＋高射装置 | 22号対水上電探', () => {
                    expect(calculate.bonus(雪風改二, [122, 28])).toEqual({});
                });
                it('10cm高角砲＋高射装置⭐4 | 22号対水上電探', () => {
                    expect(
                        calculate.bonus(雪風改二, [122, 28], [4, 0])
                    ).toEqual({
                        fire: 9,
                        aa: 3,
                        evasion: 5,
                    });
                });
                it('対潜短魚雷(試作初期型) | RUR-4A Weapon Alpha改 | 試製15cm9連装対潜噴進砲 | 三式爆雷投射機 集中配備', () => {
                    expect(
                        calculate.bonus(雪風改二, [378, 377, 288], [])
                    ).toEqual({
                        asw: 4,
                        evasion: 4,
                    });
                    expect(
                        calculate.bonus(雪風改二, [378, 377, 287], [])
                    ).toEqual({
                        asw: 3,
                        evasion: 4,
                    });
                });
            });
            describe('最上改二 & 最上改二特', () => {
                [最上改二, 最上改二特].forEach((ship) => {
                    describe('20.3cm(3号)連装砲', () => {
                        it('20.3cm(3号)連装砲', () => {
                            expect(calculate.bonus(ship, [50])).toEqual({
                                fire: 3,
                                evasion: 1,
                            });
                        });
                        it('20.3cm(3号)連装砲 | 20.3cm(3号)連装砲', () => {
                            expect(calculate.bonus(ship, [50, 50])).toEqual({
                                fire: 8,
                                evasion: 2,
                            });
                        });
                        it('20.3cm(3号)連装砲 | 32号対水上電探', () => {
                            expect(calculate.bonus(ship, [50, 31])).toEqual({
                                fire: 7,
                                torpedo: 2,
                                evasion: 4,
                            });
                        });
                        it('20.3cm(3号)連装砲 | 21号対空電探', () => {
                            expect(calculate.bonus(ship, [50, 30])).toEqual({
                                fire: 4,
                                aa: 6,
                                evasion: 5,
                                los: 2,
                            });
                        });
                        it('20.3cm(3号)連装砲 | 21号対空電探改二', () => {
                            expect(calculate.bonus(ship, [50, 410])).toEqual({
                                fire: 11,
                                torpedo: 2,
                                aa: 8,
                                evasion: 10,
                                los: 2,
                                armor: 1,
                            });
                        });
                        it('20.3cm(3号)連装砲 | 32号対水上電探 | 21号対空電探改二', () => {
                            expect(
                                calculate.bonus(ship, [50, 31, 410])
                            ).toEqual({
                                fire: 11,
                                torpedo: 2,
                                aa: 8,
                                evasion: 10,
                                los: 2,
                                armor: 1,
                            });
                        });
                    });
                    describe('8cm高角砲', () => {
                        it('8cm高角砲改 | 8cm高角砲改', () => {
                            expect(calculate.bonus(ship, [66, 66])).toEqual({
                                fire: 2,
                                aa: 4,
                                evasion: 4,
                            });
                        });
                        it('8cm高角砲改 | 8cm高角砲改 | 61cm四連装(酸素)魚雷後期型', () => {
                            expect(
                                calculate.bonus(ship, [66, 66, 286])
                            ).toEqual({
                                fire: 2,
                                aa: 4,
                                evasion: 4,
                            });
                        });
                        it('8cm高角砲改 | 8cm高角砲改 | 21号対空電探', () => {
                            expect(calculate.bonus(ship, [66, 66, 30])).toEqual(
                                {
                                    fire: 2,
                                    aa: 8,
                                    evasion: 8,
                                    los: 2,
                                }
                            );
                        });
                        it('8cm高角砲改 | 8cm高角砲改 | 42号対空電探', () => {
                            expect(calculate.bonus(ship, [66, 66, 32])).toEqual(
                                {
                                    fire: 2,
                                    aa: 5,
                                    evasion: 6,
                                }
                            );
                        });
                        it('8cm高角砲改 | 8cm高角砲改 | FuMO25 レーダー', () => {
                            expect(
                                calculate.bonus(ship, [66, 66, 124])
                            ).toEqual({
                                fire: 2,
                                aa: 5,
                                evasion: 6,
                            });
                        });
                        it('8cm高角砲改 | 8cm高角砲改 | GFCS Mk.37', () => {
                            expect(
                                calculate.bonus(ship, [66, 66, 307])
                            ).toEqual({
                                fire: 2,
                                aa: 5,
                                evasion: 6,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃', () => {
                            expect(calculate.bonus(ship, [220, 220])).toEqual({
                                fire: 4,
                                aa: 10,
                                evasion: 8,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 61cm四連装(酸素)魚雷後期型 | 零式水中聴音機', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 286, 132])
                            ).toEqual({
                                fire: 4,
                                aa: 10,
                                evasion: 8,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 13号対空電探改', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 106])
                            ).toEqual({
                                fire: 4,
                                aa: 14,
                                evasion: 13,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 21号対空電探', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 30])
                            ).toEqual({
                                fire: 4,
                                aa: 17,
                                evasion: 15,
                                los: 2,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 42号対空電探', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 32])
                            ).toEqual({
                                fire: 4,
                                aa: 14,
                                evasion: 13,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | FuMO25 レーダー', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 124])
                            ).toEqual({
                                fire: 4,
                                aa: 14,
                                evasion: 13,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | GFCS Mk.37', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 307])
                            ).toEqual({
                                fire: 4,
                                aa: 14,
                                evasion: 13,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 8cm高角砲改 | 8cm高角砲改', () => {
                            expect(
                                calculate.bonus(ship, [
                                    220,
                                    220,
                                    66,
                                    undefined,
                                    66,
                                ])
                            ).toEqual({
                                fire: 6,
                                aa: 14,
                                evasion: 12,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 8cm高角砲改 | 13号対空電探改 | 8cm高角砲改', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 66, 106, 66])
                            ).toEqual({
                                fire: 6,
                                aa: 18,
                                evasion: 17,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 8cm高角砲改 | 21号対空電探 | 8cm高角砲改', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 66, 30, 66])
                            ).toEqual({
                                fire: 6,
                                aa: 21,
                                evasion: 19,
                                los: 2,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 8cm高角砲改 | 42号対空電探 | 8cm高角砲改', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 66, 32, 66])
                            ).toEqual({
                                fire: 6,
                                aa: 18,
                                evasion: 17,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 8cm高角砲改 | FuMO25 レーダー | 8cm高角砲改', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 66, 124, 66])
                            ).toEqual({
                                fire: 6,
                                aa: 18,
                                evasion: 17,
                            });
                        });
                        it('8cm高角砲改+増設機銃 | 8cm高角砲改+増設機銃 | 8cm高角砲改 | GFCS Mk.37 | 8cm高角砲改', () => {
                            expect(
                                calculate.bonus(ship, [220, 220, 66, 307, 66])
                            ).toEqual({
                                fire: 6,
                                aa: 18,
                                evasion: 17,
                            });
                        });
                    });
                    describe('水上偵察機', () => {
                        it('紫雲', () => {
                            expect(calculate.bonus(ship, [118])).toEqual({
                                fire: 2,
                            });
                        });
                        it('紫雲 x4', () => {
                            expect(
                                calculate.bonus(ship, [118, 118, 118, 118])
                            ).toEqual({
                                fire: 2,
                            });
                        });
                        it('零式水上観測機', () => {
                            expect(calculate.bonus(ship, [59])).toEqual({
                                fire: 2,
                                aa: 1,
                                evasion: 1,
                            });
                        });
                        it('零式水上観測機 x4', () => {
                            expect(
                                calculate.bonus(ship, [59, 59, 59, 59])
                            ).toEqual({
                                fire: 2,
                                aa: 1,
                                evasion: 1,
                            });
                        });
                        it('紫雲 |  零式水上観測機', () => {
                            expect(calculate.bonus(ship, [118, 59])).toEqual({
                                fire: 2,
                                aa: 1,
                                evasion: 1,
                            });
                        });
                        it('紫雲 | 紫雲 | 零式水上観測機 | 零式水上観測機', () => {
                            expect(
                                calculate.bonus(ship, [118, 118, 59, 59])
                            ).toEqual({
                                fire: 2,
                                aa: 1,
                                evasion: 1,
                            });
                        });
                    });
                    describe('水上爆撃機', () => {
                        it('水上爆撃機 (T0)', () => {
                            expect(calculate.bonus(ship, [194])).toEqual({
                                fire: 1,
                                evasion: 1,
                            });
                        });
                        it('水上爆撃機 (T0) x4', () => {
                            expect(
                                calculate.bonus(ship, [194, 367, 368, 369])
                            ).toEqual({
                                fire: 1,
                                evasion: 1,
                            });
                        });
                        it('水上爆撃機 (T1)', () => {
                            expect(calculate.bonus(ship, [26])).toEqual({
                                fire: 3,
                                aa: 1,
                                evasion: 2,
                            });
                        });
                        it('水上爆撃機 (T1) x4', () => {
                            expect(
                                calculate.bonus(ship, [26, 62, 208, 79])
                            ).toEqual({
                                fire: 3,
                                aa: 4,
                                evasion: 5,
                            });
                        });
                        it('水上爆撃機 (T2)', () => {
                            expect(calculate.bonus(ship, [237])).toEqual({
                                fire: 4,
                                aa: 1,
                                evasion: 3,
                            });
                        });
                        it('水上爆撃機 (T2) x4', () => {
                            expect(
                                calculate.bonus(ship, [237, 237, 322, 323])
                            ).toEqual({
                                fire: 13,
                                aa: 4,
                                evasion: 9,
                            });
                        });
                        it('水上爆撃機 T0 + T1 + T1 + T2', () => {
                            expect(
                                calculate.bonus(ship, [367, 62, 208, 322])
                            ).toEqual({
                                fire: 6,
                                aa: 3,
                                evasion: 5,
                            });
                        });
                    });
                    describe('水上戦闘機', () => {
                        it('二式水戦改', () => {
                            expect(calculate.bonus(ship, [165])).toEqual({
                                aa: 2,
                                evasion: 2,
                            });
                        });
                        it('二式水戦改 | 二式水戦改', () => {
                            expect(calculate.bonus(ship, [165, 165])).toEqual({
                                aa: 2,
                                evasion: 2,
                            });
                        });
                        it('二式水戦改(熟練)', () => {
                            expect(calculate.bonus(ship, [216])).toEqual({
                                aa: 2,
                                evasion: 2,
                            });
                        });
                        it('二式水戦改(熟練) | 二式水戦改(熟練)', () => {
                            expect(calculate.bonus(ship, [216, 216])).toEqual({
                                aa: 2,
                                evasion: 2,
                            });
                        });
                        it('二式水戦改 | 二式水戦改(熟練)', () => {
                            expect(calculate.bonus(ship, [165, 216])).toEqual({
                                aa: 2,
                                evasion: 2,
                            });
                        });
                        it('二式水戦改 | 二式水戦改(熟練) | 強風改 | 強風改', () => {
                            expect(
                                calculate.bonus(ship, [165, 216, 217, 217])
                            ).toEqual({
                                fire: 2,
                                aa: 12,
                                evasion: 8,
                            });
                        });
                    });
                });
            });
            describe('VMF', () => {
                it('130mm B-13連装砲 | 533mm 三連装魚雷(53-39型)', () => {
                    expect(calculate.bonus(395, [282])).toEqual({
                        fire: 2,
                        armor: 1,
                    });
                    expect(calculate.bonus(395, [400])).toEqual({
                        fire: 1,
                        torpedo: 5,
                        armor: 1,
                        evasion: 2,
                    });
                    expect(calculate.bonus(395, [282, 400])).toEqual({
                        fire: 5,
                        torpedo: 5,
                        armor: 2,
                        evasion: 2,
                    });
                });
            });
            describe('MN', () => {
                it('Jean Bart 改 || 38cm四連装砲改 deux | 15.2cm三連装砲', () => {
                    expect(calculate.bonus(724, [468, 247])).toEqual({
                        fire: 3 + 2 + 2,
                        hit: 1 + 2 + 2,
                        evasion: 2,
                    });
                });
                it('Jean Bart 改 || 38cm四連装砲改 deux | 15.2cm三連装砲 | 15.2cm三連装砲', () => {
                    expect(calculate.bonus(724, [468, 247, 247])).toEqual({
                        fire: 3 + 2 + 2 + 2 + 2,
                        hit: 1 + 2 + 2 + 2 + 2,
                        evasion: 2 + 2,
                    });
                });
                it('Jean Bart 改 || 38cm四連装砲 | 38cm四連装砲改 deux | 15.2cm三連装砲 | 15.2cm三連装砲', () => {
                    expect(calculate.bonus(724, [245, 468, 247, 247])).toEqual({
                        fire: 2 + 3 + 2 + 2 + 2 + 2,
                        hit: 1 + 1 + 2 + 2 + 2 + 2,
                        evasion: 2 + 2,
                    });
                });
            });
            describe('榛名改二乙', () => {
                it('35.6cm連装砲改四', () => {
                    expect(calculate.bonus(榛名改二乙, [503])).toEqual({
                        fire: 4,
                        aa: 4,
                        hit: 2,
                    });
                });
                it('35.6cm連装砲改四 | 33号', () => {
                    expect(calculate.bonus(榛名改二乙, [503, 29])).toEqual({
                        fire: 4 + 2,
                        aa: 4,
                        evasion: 1,
                        hit: 2 + 2,
                    });
                });
                it('35.6cm連装砲改四 | 33号 | 22改四', () => {
                    expect(calculate.bonus(榛名改二乙, [503, 29, 88])).toEqual({
                        fire: 4 + 2 + 2,
                        aa: 4,
                        evasion: 1 + 2,
                        hit: 2 + 2 + 2,
                    });
                });
                it('35.6cm連装砲改四 | 33号 | 22改四 | 53cm連装魚雷', () => {
                    expect(
                        calculate.bonus(榛名改二乙, [503, 29, 88, 174])
                    ).toEqual({
                        fire: 4 + 2 + 2,
                        torpedo: 9,
                        aa: 4,
                        evasion: 1 + 2 + 2,
                        hit: 2 + 2 + 2,
                    });
                });
                it('35.6cm連装砲改四 | 33号 | 22改四 | 53cm連装魚雷+MAX', () => {
                    expect(
                        calculate.bonus(
                            榛名改二乙,
                            [503, 29, 88, 174],
                            [0, 0, 0, 10]
                        )
                    ).toEqual({
                        fire: 4 + 2 + 2 + 1,
                        torpedo: 10,
                        aa: 4,
                        evasion: 1 + 2 + 2,
                        hit: 2 + 2 + 2 + 1,
                    });
                });
            });
        });

        it('pass stat', () => {
            expect(calculate.bonus(146, [268, 268, 268], 'fire')).toEqual(0);
            expect(calculate.bonus(146, [268, 268, 268], 'armor')).toEqual(2);
        });
    });
    describe('ship', () => {
        describe('speed...', () => {
            it('type: low-1', () => {
                // 大和 改
                expect(
                    calculate.ship.speed(136, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(5);
                expect(
                    calculate.ship.speed(136, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(136, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(136, [34, 34, 34, undefined, 33])
                ).toBe(10);
                expect(calculate.ship.speed(136, [34, 34, 34, 34, 33])).toBe(
                    10
                );
                expect(
                    calculate.ship.speed(136, [
                        undefined,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(136, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(136, [34, 34, undefined, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(136, [34, 34, 34, 87, 33])).toBe(
                    20
                );
                expect(
                    calculate.ship.speed(136, [
                        undefined,
                        undefined,
                        87,
                        87,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(136, [34, undefined, 87, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(136, [34, 34, 87, 87, 33])).toBe(
                    20
                );
                expect(
                    calculate.ship.speed(136, [undefined, 87, 87, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(136, [34, 87, 87, 87, 33])).toBe(
                    20
                );
            });
            it('type: low-2', () => {
                // 扶桑 改二
                expect(
                    calculate.ship.speed(411, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(5);
                expect(
                    calculate.ship.speed(411, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(411, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(411, [34, 34, 34, undefined, 33])
                ).toBe(15);
                expect(calculate.ship.speed(411, [34, 34, 34, 34, 33])).toBe(
                    15
                );
                expect(
                    calculate.ship.speed(411, [
                        undefined,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(411, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(411, [34, 34, undefined, 87, 33])
                ).toBe(15);
                expect(calculate.ship.speed(411, [34, 34, 34, 87, 33])).toBe(
                    15
                );
                expect(
                    calculate.ship.speed(411, [
                        undefined,
                        undefined,
                        87,
                        87,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(411, [34, undefined, 87, 87, 33])
                ).toBe(15);
                expect(calculate.ship.speed(411, [34, 34, 87, 87, 33])).toBe(
                    15
                );
                expect(
                    calculate.ship.speed(411, [undefined, 87, 87, 87, 33])
                ).toBe(15);
                expect(calculate.ship.speed(411, [34, 87, 87, 87, 33])).toBe(
                    15
                );
            });
            it('type: low-3', () => {
                // 明石 改
                expect(
                    calculate.ship.speed(187, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(5);
                expect(
                    calculate.ship.speed(187, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(187, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(187, [34, 34, 34, undefined, 33])
                ).toBe(10);
                expect(calculate.ship.speed(187, [34, 34, 34, 34, 33])).toBe(
                    10
                );
                expect(
                    calculate.ship.speed(187, [
                        undefined,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(187, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(187, [34, 34, undefined, 87, 33])
                ).toBe(10);
                expect(calculate.ship.speed(187, [34, 34, 34, 87, 33])).toBe(
                    10
                );
                expect(
                    calculate.ship.speed(187, [
                        undefined,
                        undefined,
                        87,
                        87,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(187, [34, undefined, 87, 87, 33])
                ).toBe(10);
                expect(calculate.ship.speed(187, [34, 34, 87, 87, 33])).toBe(
                    10
                );
                expect(
                    calculate.ship.speed(187, [undefined, 87, 87, 87, 33])
                ).toBe(10);
                expect(calculate.ship.speed(187, [34, 87, 87, 87, 33])).toBe(
                    10
                );
            });
            it('type: low-4', () => {
                // Samuel B.Roberts
                expect(
                    calculate.ship.speed(561, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                // Samuel B.Roberts 改
                expect(
                    calculate.ship.speed(681, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(681, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(681, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(681, [
                        34,
                        87,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(681, [
                        87,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(681, [34, 34, 34, undefined, 33])
                ).toBe(15);
                expect(
                    calculate.ship.speed(681, [34, 34, 87, undefined, 33])
                ).toBe(15);
                expect(
                    calculate.ship.speed(681, [
                        87,
                        87,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(15);
            });
            it('type: high-1', () => {
                // 翔鹤 改二甲
                expect(
                    calculate.ship.speed(466, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(466, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(466, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(466, [34, 34, 34, undefined, 33])
                ).toBe(20);
                expect(calculate.ship.speed(466, [34, 34, 34, 34, 33])).toBe(
                    20
                );
                expect(
                    calculate.ship.speed(466, [
                        undefined,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(466, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(466, [34, 34, undefined, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(466, [34, 34, 34, 87, 33])).toBe(
                    20
                );
                expect(
                    calculate.ship.speed(466, [
                        undefined,
                        undefined,
                        87,
                        87,
                        33,
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(466, [34, undefined, 87, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(466, [34, 34, 87, 87, 33])).toBe(
                    20
                );
                expect(
                    calculate.ship.speed(466, [undefined, 87, 87, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(466, [34, 87, 87, 87, 33])).toBe(
                    20
                );
            });
            it('type: high-2', () => {
                // 苍龙 改二
                expect(
                    calculate.ship.speed(197, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(197, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(197, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(197, [34, 34, 34, undefined, 33])
                ).toBe(20);
                expect(calculate.ship.speed(197, [34, 34, 34, 34, 33])).toBe(
                    20
                );
                expect(
                    calculate.ship.speed(197, [
                        undefined,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(197, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(197, [34, 34, undefined, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(197, [34, 34, 34, 87, 33])).toBe(
                    20
                );
                expect(
                    calculate.ship.speed(197, [
                        undefined,
                        undefined,
                        87,
                        87,
                        33,
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(197, [34, undefined, 87, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(197, [34, 34, 87, 87, 33])).toBe(
                    20
                );
                expect(
                    calculate.ship.speed(197, [undefined, 87, 87, 87, 33])
                ).toBe(20);
                expect(calculate.ship.speed(197, [34, 87, 87, 87, 33])).toBe(
                    20
                );
            });
            it('type: high-3', () => {
                // 秋月 改
                expect(
                    calculate.ship.speed(330, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(330, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(330, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(330, [34, 34, 34, undefined, 33])
                ).toBe(20);
                expect(
                    calculate.ship.speed(330, [
                        undefined,
                        undefined,
                        87,
                        undefined,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(330, [
                        34,
                        undefined,
                        87,
                        undefined,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(330, [34, 34, 87, undefined, 33])
                ).toBe(20);
                expect(
                    calculate.ship.speed(330, [
                        undefined,
                        87,
                        87,
                        undefined,
                        33,
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(330, [34, 87, 87, undefined, 33])
                ).toBe(20);
                expect(
                    calculate.ship.speed(330, [87, 87, 87, undefined, 33])
                ).toBe(20);
            });
            it('type: high-4', () => {
                // 加贺 改
                expect(
                    calculate.ship.speed(278, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(278, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(278, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(278, [34, 34, 34, undefined, 33])
                ).toBe(15);
                expect(calculate.ship.speed(278, [34, 34, 34, 34, 33])).toBe(
                    15
                );
                expect(
                    calculate.ship.speed(278, [
                        undefined,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(278, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(278, [34, 34, undefined, 87, 33])
                ).toBe(15);
                expect(calculate.ship.speed(278, [34, 34, 34, 87, 33])).toBe(
                    15
                );
                expect(
                    calculate.ship.speed(278, [
                        undefined,
                        undefined,
                        87,
                        87,
                        33,
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(278, [34, undefined, 87, 87, 33])
                ).toBe(15);
                expect(calculate.ship.speed(278, [34, 34, 87, 87, 33])).toBe(
                    15
                );
                expect(
                    calculate.ship.speed(278, [undefined, 87, 87, 87, 33])
                ).toBe(15);
                expect(calculate.ship.speed(278, [34, 87, 87, 87, 33])).toBe(
                    15
                );
            });
        });
        describe('level for oasw...', () => {
            describe('神鷹', () => {
                it('empty', () => {
                    expect(calculate.ship.levelOASW(534, [])).toBe(false);
                });
                it('HF/DF+Type144/147 ASDIC', () => {
                    expect(calculate.ship.levelOASW(534, [262])).toBe(false);
                });
                it('HF/DF+Type144/147 ASDIC ＋ カ号観測機', () => {
                    expect(calculate.ship.levelOASW(534, [262, 69])).toBe(
                        false
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ 三式指揮連絡機(対潜)', () => {
                    expect(calculate.ship.levelOASW(534, [262, 70])).toBe(
                        false
                    );
                });
                it('カ号観測機', () => {
                    expect(calculate.ship.levelOASW(534, [262, 69])).toBe(
                        false
                    );
                });
                it('三式指揮連絡機(対潜)', () => {
                    expect(calculate.ship.levelOASW(534, [262, 70])).toBe(
                        false
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ Re.2001 G改', () => {
                    expect(calculate.ship.levelOASW(534, [262, 262, 188])).toBe(
                        false
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ Swordfish', () => {
                    expect(calculate.ship.levelOASW(534, [262, 262, 242])).toBe(
                        124
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(534, [262, 262, 244])).toBe(
                        1
                    );
                });
                it('Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(534, [244])).toBe(79);
                });
                it('HF/DF+Type144/147 ASDIC ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(534, [262, 277])).toBe(
                        false
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(534, [262, 262, 277])).toBe(
                        137
                    );
                });
            });
            describe('神鷹改', () => {
                it('empty', () => {
                    expect(calculate.ship.levelOASW(381, [])).toBe(false);
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(381, [262, 262, 277])).toBe(
                        60
                    );
                });
                it('FM-2', () => {
                    expect(calculate.ship.levelOASW(381, [277])).toBe(60);
                });
                it('Swordfish', () => {
                    expect(calculate.ship.levelOASW(381, [242])).toBe(60);
                });
                it('カ号観測機', () => {
                    expect(calculate.ship.levelOASW(381, [69])).toBe(false);
                });
                it('三式指揮連絡機(対潜)', () => {
                    expect(calculate.ship.levelOASW(381, [70])).toBe(60);
                });
                it('Re.2001 G改', () => {
                    expect(calculate.ship.levelOASW(381, [188])).toBe(false);
                });
            });
            describe('神鷹改二', () => {
                it('empty', () => {
                    expect(calculate.ship.levelOASW(536, [])).toBe(false);
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(536, [262, 262, 277])).toBe(
                        85
                    );
                });
                it('FM-2', () => {
                    expect(calculate.ship.levelOASW(536, [277])).toBe(85);
                });
                it('Swordfish', () => {
                    expect(calculate.ship.levelOASW(536, [242])).toBe(85);
                });
                it('カ号観測機', () => {
                    expect(calculate.ship.levelOASW(536, [69])).toBe(85);
                });
                it('Re.2001 G改', () => {
                    expect(calculate.ship.levelOASW(536, [188])).toBe(false);
                });
            });
            describe('Gambier Bay', () => {
                it('empty', () => {
                    expect(calculate.ship.levelOASW(544, [])).toBe(false);
                });
                it('HF/DF+Type144/147 ASDIC', () => {
                    expect(calculate.ship.levelOASW(544, [262])).toBe(false);
                });
                it('HF/DF+Type144/147 ASDIC ＋ カ号観測機', () => {
                    expect(calculate.ship.levelOASW(544, [262, 69])).toBe(90);
                });
                it('カ号観測機', () => {
                    expect(calculate.ship.levelOASW(544, [262, 69])).toBe(90);
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ Re.2001 G改', () => {
                    expect(calculate.ship.levelOASW(544, [262, 262, 188])).toBe(
                        false
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ Swordfish', () => {
                    expect(calculate.ship.levelOASW(544, [262, 262, 242])).toBe(
                        false
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(544, [262, 262, 244])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(544, [132, 132, 244])).toBe(
                        false
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(544, [262, 277])).toBe(
                        false
                    );
                });
                it('HF/DF+Type144/147 ASDIC ＋ HF/DF+Type144/147 ASDIC ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(544, [262, 262, 277])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(544, [132, 132, 277])).toBe(
                        false
                    );
                });
            });
            describe('瑞鳳改二', () => {
                it('empty', () => {
                    expect(calculate.ship.levelOASW(555, [])).toBe(false);
                });
                it('零式水中聴音機', () => {
                    expect(calculate.ship.levelOASW(555, [132])).toBe(false);
                });
                it('零式水中聴音機 ＋ カ号観測機', () => {
                    expect(calculate.ship.levelOASW(555, [132, 69])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 三式指揮連絡機(対潜)', () => {
                    expect(calculate.ship.levelOASW(555, [132, 70])).toBe(
                        false
                    );
                });
                it('カ号観測機', () => {
                    expect(calculate.ship.levelOASW(555, [132, 69])).toBe(
                        false
                    );
                });
                it('三式指揮連絡機(対潜)', () => {
                    expect(calculate.ship.levelOASW(555, [132, 70])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ Re.2001 G改', () => {
                    expect(calculate.ship.levelOASW(555, [132, 132, 188])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ Swordfish', () => {
                    expect(calculate.ship.levelOASW(555, [132, 132, 242])).toBe(
                        false
                    );
                });
                it('Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(555, [244])).toBe(false);
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(555, [132, 132, 244])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(555, [132, 277])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(555, [132, 132, 277])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ 零式水中聴音機 ＋ Swordfish Mk.III(熟練)', () => {
                    expect(
                        calculate.ship.levelOASW(555, [132, 132, 132, 244])
                    ).toBe(false);
                });
            });
            describe('瑞鳳改二乙', () => {
                it('empty', () => {
                    expect(calculate.ship.levelOASW(560, [])).toBe(false);
                });
                it('零式水中聴音機', () => {
                    expect(calculate.ship.levelOASW(560, [132])).toBe(false);
                });
                it('零式水中聴音機 ＋ カ号観測機', () => {
                    expect(calculate.ship.levelOASW(560, [132, 69])).toBe(80);
                });
                it('零式水中聴音機 ＋ 三式指揮連絡機(対潜)', () => {
                    expect(calculate.ship.levelOASW(560, [132, 70])).toBe(80);
                });
                it('カ号観測機', () => {
                    expect(calculate.ship.levelOASW(560, [132, 69])).toBe(80);
                });
                it('三式指揮連絡機(対潜)', () => {
                    expect(calculate.ship.levelOASW(560, [132, 70])).toBe(80);
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ Re.2001 G改', () => {
                    expect(calculate.ship.levelOASW(560, [132, 132, 188])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ Swordfish', () => {
                    expect(calculate.ship.levelOASW(560, [132, 132, 242])).toBe(
                        false
                    );
                });
                it('Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(560, [244])).toBe(143);
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(560, [132, 132, 244])).toBe(
                        80
                    );
                });
                it('零式水中聴音機 ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(560, [132, 277])).toBe(
                        false
                    );
                });
                it('零式水中聴音機 ＋ 零式水中聴音機 ＋ FM-2', () => {
                    expect(calculate.ship.levelOASW(560, [132, 132, 277])).toBe(
                        false
                    );
                });
                it('九七式艦攻改(熟練) 試製三号戊型(空六号電探改装備機)', () => {
                    expect(calculate.ship.levelOASW(560, [345])).toBe(161);
                });
            });
            it('日向改二', () => {
                expect(calculate.ship.levelOASW(554, [])).toBe(false);
                // カ号観測機
                expect(calculate.ship.levelOASW(554, [69])).toBe(false);
                // カ号観測機 + カ号観測機
                expect(calculate.ship.levelOASW(554, [69, 69])).toBe(90);
                // カ号観測機 + オ号観測機改
                expect(calculate.ship.levelOASW(554, [69, 324])).toBe(90);
                // オ号観測機改 + オ号観測機改二
                expect(calculate.ship.levelOASW(554, [324, 325])).toBe(90);
                // S-51J
                expect(calculate.ship.levelOASW(554, [326])).toBe(90);
                // S-51J改
                expect(calculate.ship.levelOASW(554, [327])).toBe(90);
                // HF/DF + Type144/147 ASDIC + Ju87C改二(KMX搭載機/熟練)
                expect(calculate.ship.levelOASW(554, [262, 306])).toBe(false);
                // HF/DF + Type144/147 ASDIC
                expect(calculate.ship.levelOASW(554, [262])).toBe(false);
            });
            describe('other samples', () => {
                it('最上 改', () => {
                    expect(calculate.ship.levelOASW(73, [])).toBe(false);
                });
                it('古鷹 改二', () => {
                    expect(calculate.ship.levelOASW(416, [])).toBe(false);
                });
                it('五十鈴 改二', () => {
                    expect(calculate.ship.levelOASW(141, [])).toBe(true);
                });
                it('朝潮 改二', () => {
                    expect(calculate.ship.levelOASW(463, [])).toBe(false);
                });
                it('朝潮 改二 + 四式水中聴音機', () => {
                    expect(calculate.ship.levelOASW(463, [149])).toBe(false);
                });
                it('朝潮 改二 + 四式水中聴音機 x3', () => {
                    expect(calculate.ship.levelOASW(463, [149, 149, 149])).toBe(
                        114
                    );
                });
                it('朝潮 改二丁', () => {
                    expect(calculate.ship.levelOASW(468, [])).toBe(false);
                });
                it('朝潮 改二丁 + 12.7cm連装高角砲(後期型)', () => {
                    expect(calculate.ship.levelOASW(468, [91])).toBe(false);
                });
                it('朝潮 改二丁 + 四式水中聴音機', () => {
                    expect(calculate.ship.levelOASW(468, [149])).toBe(97);
                });
                it('大鷹 改二', () => {
                    expect(calculate.ship.levelOASW(529, [])).toBe(false);
                });
                it('大鷹 改二 + 四式水中聴音機', () => {
                    expect(calculate.ship.levelOASW(529, [149])).toBe(false);
                });
                it('大鷹 改二 + 天山一二型(村田隊)', () => {
                    expect(calculate.ship.levelOASW(529, [144])).toBe(85);
                });
                it('大鷹 改二 + 彗星(江草隊)', () => {
                    expect(calculate.ship.levelOASW(529, [100])).toBe(85);
                });
                it('大鷹 改二 + 四式水中聴音機 ➕天山一二型(村田隊)', () => {
                    expect(calculate.ship.levelOASW(529, [149, 144])).toBe(85);
                });
                it('大鷹 改', () => {
                    expect(calculate.ship.levelOASW(526, [])).toBe(false);
                });
                it('大鷹 改 + 天山一二型(村田隊) x4', () => {
                    expect(
                        calculate.ship.levelOASW(526, [144, 144, 144, 144])
                    ).toBe(false);
                });
                it('大鷹 改 + 彗星(江草隊) x4', () => {
                    expect(
                        calculate.ship.levelOASW(526, [100, 100, 100, 100])
                    ).toBe(false);
                });
                it('大鷹 改 + 天山(九三一空)', () => {
                    expect(calculate.ship.levelOASW(526, [83])).toBe(91);
                });
                it('大鷹 改 + Swordfish Mk.III(熟練)', () => {
                    expect(calculate.ship.levelOASW(526, [244])).toBe(83);
                });
                it('占守 改', () => {
                    expect(calculate.ship.levelOASW(376, [])).toBe(95);
                });
                it('占守 改 + 四式水中聴音機', () => {
                    expect(calculate.ship.levelOASW(376, [149])).toBe(40);
                });
            });
        });
    });
});
