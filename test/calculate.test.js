// const path = require('path')
// const fs = require('fs')
// const camelCase = require('camelcase')
const dbnames = require('./samples/dbnames');

let db;
beforeAll(() =>
    new Promise(async resolve => {
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
                        1: 1
                    }
                })
            ).toBe(5);
            expect(
                calculate.tp({
                    shipType: {
                        '1': 1
                    }
                })
            ).toBe(5);
        });
        it('case 2', () => {
            expect(
                calculate.tp({
                    shipType: {
                        1: 2
                    },
                    equipmentType: {
                        LandingCraft: 3
                    }
                })
            ).toBe(34);
        });
        it('case 3', () => {
            expect(
                calculate.tp({
                    shipType: {
                        1: 2,
                        15: 1
                    },
                    equipmentType: {
                        LandingCraft: 3,
                        48: 1
                    }
                })
            ).toBe(47);
        });
    });
    describe('bonus...', () => {
        describe('common...', () => {
            it('陽炎改二 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(566, 267)).toEqual({
                    fire: 2,
                    evasion: 1
                });
            });
            it('陽炎改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(566, [267, 267])).toEqual({
                    fire: 3,
                    evasion: 2
                });
            });
            it('陽炎改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(566, [267, 267, 267])).toEqual({
                    fire: 4,
                    evasion: 3
                });
            });
            it('陽炎改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二 ➕22号対水上電探改四', () => {
                expect(calculate.bonus(566, [267, 267, 88])).toEqual({
                    fire: 3,
                    evasion: 2
                });
            });
            it('長波改 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(304, 267)).toEqual({
                    fire: 2,
                    evasion: 1
                });
            });
            it('長波改 || 12.7cm連装砲D型改二 ➕33号対水上電探', () => {
                expect(calculate.bonus(304, [267, 29])).toEqual({
                    fire: 4,
                    torpedo: 3,
                    evasion: 2
                });
            });
            it('長波改二 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(543, 267)).toEqual({
                    fire: 3,
                    evasion: 1
                });
            });
            it('長波改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(543, [267, 267, 267])).toEqual({
                    fire: 9,
                    evasion: 3
                });
            });
            it('長波改二 || 12.7cm連装砲D型改二 ➕12.7cm連装砲D型改二 ➕22号対水上電探改四', () => {
                expect(calculate.bonus(543, [267, 267, 88])).toEqual({
                    fire: 9,
                    torpedo: 4,
                    evasion: 5
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(567, [15])).toEqual({
                    torpedo: 2
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷 ➕61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(567, [15, 15])).toEqual({
                    torpedo: 4
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷 ➕61cm四連装(酸素)魚雷 ➕61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(567, [15, 15, 15])).toEqual({
                    torpedo: 4
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷後期型 ➕61cm四連装(酸素)魚雷後期型', () => {
                expect(calculate.bonus(567, [286, 286])).toEqual({
                    torpedo: 4,
                    evasion: 2
                });
            });
            it('不知火改二 || 61cm四連装(酸素)魚雷後期型(MAX) ➕61cm四連装(酸素)魚雷後期型(⭐+5)', () => {
                expect(calculate.bonus(567, [286, 286], [10, 5])).toEqual({
                    fire: 1,
                    torpedo: 6,
                    evasion: 2
                });
            });
            it('不知火改二 || 12.7cm連装砲D型改二 ➕61cm四連装(酸素)魚雷後期型(MAX) ➕61cm四連装(酸素)魚雷後期型(⭐+5)', () => {
                expect(
                    calculate.bonus(567, [267, 286, 286], [0, 10, 5])
                ).toEqual({
                    fire: 3,
                    torpedo: 6,
                    evasion: 3
                });
            });
            it('木曽改二 || 北方迷彩(＋北方装備)', () => {
                expect(calculate.bonus(146, [268])).toEqual({
                    armor: 2,
                    evasion: 7
                });
            });
            it('木曽改二 || 北方迷彩(＋北方装備) ➕北方迷彩(＋北方装備) ➕北方迷彩(＋北方装備)', () => {
                expect(calculate.bonus(146, [268, 268, 268])).toEqual({
                    armor: 2,
                    evasion: 7
                });
            });
            it('由良改二 || 12.7cm単装高角砲(後期型)⭐MAX ➕12.7cm単装高角砲(後期型)⭐MAX ➕FuMO25 レーダー', () => {
                expect(calculate.bonus(488, [229, 229, 124], [10, 10])).toEqual(
                    {
                        fire: 7,
                        aa: 6,
                        evasion: 2
                    }
                );
            });
            it('由良改二 || 12.7cm単装高角砲(後期型)⭐5 ➕FuMO25 レーダー', () => {
                expect(calculate.bonus(488, [229, 124], [5])).toEqual({});
            });
            it('占守改 || 12.7cm単装高角砲(後期型)⭐MAX', () => {
                expect(calculate.bonus(376, [229], [10])).toEqual({
                    fire: 1,
                    aa: 1
                });
            });
            it('占守改 || 12.7cm単装高角砲(後期型)⭐MAX ➕22号対水上電探', () => {
                expect(calculate.bonus(376, [229, 28], [10])).toEqual({
                    fire: 2,
                    aa: 1,
                    evasion: 4
                });
            });
            it('伊勢改二 || 二式艦上偵察機 ➕二式艦上偵察機', () => {
                expect(calculate.bonus(553, [61, 61])).toEqual({
                    fire: 6,
                    armor: 2,
                    evasion: 4,
                    range: '1'
                });
            });
            it('叢雲改二 || 61cm三連装(酸素)魚雷後期型', () => {
                expect(calculate.bonus(420, [285])).toEqual({
                    torpedo: 2,
                    evasion: 1
                });
            });
            it('叢雲改二 || 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(420, [285], [10])).toEqual({
                    fire: 1,
                    torpedo: 2,
                    evasion: 1
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二', () => {
                expect(calculate.bonus(420, [294])).toEqual({
                    fire: 1
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕33号対水上電探', () => {
                expect(calculate.bonus(420, [294, 29])).toEqual({
                    fire: 4,
                    torpedo: 1,
                    evasion: 2
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷', () => {
                expect(calculate.bonus(420, [294, 125])).toEqual({
                    fire: 2,
                    torpedo: 3
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(420, [294, 285], [0, 10])).toEqual({
                    fire: 3,
                    torpedo: 6,
                    evasion: 1
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [294, 125, 285], [0, 0, 10])
                ).toEqual({
                    fire: 4,
                    torpedo: 9,
                    evasion: 1
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷後期型 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [294, 285, 285], [0, 0, 10])
                ).toEqual({
                    fire: 4,
                    torpedo: 10,
                    evasion: 2
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕61cm三連装(酸素)魚雷後期型⭐MAX ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [294, 285, 285], [0, 10, 10])
                ).toEqual({
                    fire: 5,
                    torpedo: 10,
                    evasion: 2
                });
            });
            it('叢雲改二 || 12.7cm連装砲A型改二 ➕33号対水上電探 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [294, 29, 285], [0, 0, 10])
                ).toEqual({
                    fire: 6,
                    torpedo: 7,
                    evasion: 3
                });
            });
            it('初春改二 || 12.7cm連装砲A型改三(戦時改修)+高射装置 ➕13号対空電探改 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(420, [295, 106, 285], [0, 0, 10])
                ).toEqual({
                    fire: 4,
                    torpedo: 6,
                    aa: 8,
                    evasion: 1
                });
            });
            it('夕立改二 || 12.7cm連装砲B型改四(戦時改修)+高射装置 ➕13号対空電探改 ➕61cm四連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(144, [296, 106, 286], [0, 0, 10])
                ).toEqual({
                    fire: 4,
                    torpedo: 6,
                    aa: 6,
                    evasion: 2
                });
            });
            it('夕立改二 || 12.7cm連装砲B型改四(戦時改修)+高射装置 ➕12.7cm連装砲B型改二 ➕61cm四連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(144, [296, 63, 286], [0, 0, 10])
                ).toEqual({
                    fire: 5,
                    torpedo: 7,
                    aa: 1,
                    evasion: 4
                });
            });
            it('夕立改二 || 12.7cm連装砲B型改四(戦時改修)+高射装置 ➕12.7cm連装砲C型改二 ➕33号対水上電探', () => {
                expect(calculate.bonus(144, [296, 266, 29])).toEqual({
                    fire: 5,
                    torpedo: 7,
                    evasion: 4
                });
            });
            it('Warspite改 || 16inch Mk.I三連装砲 ➕16inch Mk.I三連装砲', () => {
                expect(calculate.bonus(364, [298, 298])).toEqual({
                    fire: 4,
                    armor: 2,
                    evasion: -4
                });
            });
            it('Warspite改 || 16inch Mk.I三連装砲 ➕16inch Mk.I三連装砲 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(364, [298, 298, 301])).toEqual({
                    fire: 4,
                    aa: 2,
                    armor: 3,
                    evasion: -3
                });
            });
            it('北上 || Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(25, [303])).toEqual({
                    fire: 1,
                    aa: 1
                });
            });
            it('北上改二 || Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(119, [303])).toEqual({
                    fire: 1,
                    aa: 1
                });
            });
            it('大鷹改二 || 九七式艦攻(九三一空) ➕Ju87C改二(KMX搭載機)', () => {
                expect(calculate.bonus(529, [82, 305])).toEqual({
                    asw: 2,
                    evasion: 2
                });
            });
            it('Graf Zeppelin改 || 九七式艦攻(九三一空) ➕Ju87C改二(KMX搭載機)', () => {
                expect(calculate.bonus(353, [82, 305])).toEqual({
                    fire: 1,
                    evasion: 1
                });
            });
            it('睦月改二 || 12cm単装砲改二 ➕33号対水上電探', () => {
                expect(calculate.bonus(434, [293, 29])).toEqual({
                    fire: 4,
                    torpedo: 1,
                    aa: 1,
                    evasion: 6
                });
            });
            it('睦月改二 || 12cm単装砲改二 ➕33号対水上電探 ➕53cm連装魚雷', () => {
                expect(calculate.bonus(434, [293, 29, 174])).toEqual({
                    fire: 6,
                    torpedo: 5,
                    aa: 1,
                    evasion: 6
                });
            });
            it('睦月改二 || 12cm単装砲改二 ➕53cm連装魚雷 ➕53cm連装魚雷', () => {
                expect(calculate.bonus(434, [293, 174, 174])).toEqual({
                    fire: 5,
                    torpedo: 7,
                    aa: 1,
                    evasion: 3
                });
            });
            it('Gotland || Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(574, [303])).toEqual({
                    fire: 1,
                    aa: 2,
                    evasion: 1
                });
            });
            it('Gotland || Bofors 15.2cm連装砲 Model 1930 ➕Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(574, [303, 303])).toEqual({
                    fire: 2,
                    aa: 4,
                    evasion: 2
                });
            });
            it('Gotland改 || Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(579, [303])).toEqual({
                    fire: 1,
                    aa: 2,
                    evasion: 1
                });
            });
            it('Gotland改 || Bofors 15.2cm連装砲 Model 1930 ➕Bofors 15.2cm連装砲 Model 1930', () => {
                expect(calculate.bonus(579, [303, 303])).toEqual({
                    fire: 2,
                    aa: 4,
                    evasion: 2
                });
            });
            it('Warspite改 || 16inch Mk.I三連装砲改＋FCR type284 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(364, [300, 301])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: -1,
                    armor: 2
                });
            });
            it('Nelson改 || 16inch Mk.I三連装砲改＋FCR type284 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(576, [298, 301])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: 1,
                    armor: 2
                });
            });
            it('Warspite改 || 16inch Mk.I三連装砲 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(364, [298, 301])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: -1,
                    armor: 2
                });
            });
            it('Nelson改 || 16inch Mk.I三連装砲改＋FCR type284 ➕20連装7inch UP Rocket Launchers', () => {
                expect(calculate.bonus(576, [300, 301])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: 1,
                    armor: 2
                });
            });
            it('長門改二 || 5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(541, [308])).toEqual({});
            });
            it('睦月 || 5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(1, [308])).toEqual({
                    fire: 1
                });
            });
            it('睦月 || 5inch単装砲 Mk.30改+GFCS Mk.37 ➕5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(1, [308, 308])).toEqual({
                    fire: 2
                });
            });
            it('Samuel B.Roberts改 || 5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(681, [308])).toEqual({
                    fire: 2,
                    aa: 1,
                    evasion: 1
                });
            });
            it('Samuel B.Roberts改 || 5inch単装砲 Mk.30改+GFCS Mk.37 ➕5inch単装砲 Mk.30改+GFCS Mk.37 ➕5inch単装砲 Mk.30改+GFCS Mk.37', () => {
                expect(calculate.bonus(681, [308, 308, 308])).toEqual({
                    fire: 6,
                    aa: 3,
                    evasion: 3
                });
            });
            it('長門改二 || GFCS Mk.37', () => {
                expect(calculate.bonus(541, [307])).toEqual({});
            });
            it('Iowa || GFCS Mk.37', () => {
                expect(calculate.bonus(440, [307])).toEqual({
                    fire: 1,
                    aa: 1,
                    evasion: 1
                });
            });
            it('Iowa改 || GFCS Mk.37', () => {
                expect(calculate.bonus(360, [307])).toEqual({
                    fire: 1,
                    aa: 1,
                    evasion: 1
                });
            });
            it('Iowa改 || GFCS Mk.37 ➕GFCS Mk.37', () => {
                expect(calculate.bonus(360, [307, 307])).toEqual({
                    fire: 2,
                    aa: 2,
                    evasion: 2
                });
            });
            it('金剛改二丙 || 16inch Mk.I三連装砲 ➕35.6cm連装砲改二 ➕ 35.6cm三連装砲改(ダズル迷彩仕様)➕53cm連装魚雷', () => {
                expect(calculate.bonus(591, [298, 329, 289, 174])).toEqual({
                    fire: 4,
                    torpedo: 8,
                    aa: 1,
                    evasion: 4
                });
            });
        });

        describe('小口径主砲...', () => {
            describe('130mm B-13連装砲...', () => {
                it('Верный || 130mm B-13連装砲', () => {
                    expect(calculate.bonus(147, [282])).toEqual({
                        fire: 2,
                        armor: 1
                    });
                });
                it('Верный || 130mm B-13連装砲 ➕12.7cm連装砲A型改三(戦時改修)+高射装置', () => {
                    expect(calculate.bonus(147, [282, 295])).toEqual({
                        fire: 4,
                        aa: 2,
                        armor: 1
                    });
                });
                it('夕張 || 130mm B-13連装砲', () => {
                    expect(calculate.bonus(115, [282])).toEqual({
                        fire: 2,
                        armor: 1
                    });
                });
            });
        });

        describe('中口径主砲...', () => {
            describe('20.3cm(2号)連装砲...', () => {
                it('青葉改 || 20.3cm(2号)連装砲', () => {
                    expect(calculate.bonus(264, [90])).toEqual({
                        fire: 1,
                        aa: 1
                    });
                });
                it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲', () => {
                    expect(calculate.bonus(264, [90, 90])).toEqual({
                        fire: 2,
                        aa: 2
                    });
                });
                it('青葉改 || 20.3cm(2号)連装砲 ➕GFCS Mk.37', () => {
                    expect(calculate.bonus(264, [90, 307])).toEqual({
                        fire: 4,
                        aa: 6,
                        torpedo: 2,
                        evasion: 4
                    });
                });
                it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕32号対水上電探', () => {
                    expect(calculate.bonus(264, [90, 90, 31])).toEqual({
                        fire: 5,
                        aa: 2,
                        torpedo: 2,
                        evasion: 2
                    });
                });
                it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37', () => {
                    expect(calculate.bonus(264, [90, 90, 307])).toEqual({
                        fire: 5,
                        aa: 7,
                        torpedo: 2,
                        evasion: 4
                    });
                });
                it('青葉改 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                    expect(calculate.bonus(264, [90, 90, 307, 307])).toEqual({
                        fire: 5,
                        aa: 7,
                        torpedo: 2,
                        evasion: 4
                    });
                });
                it('衣笠改二 || 20.3cm(2号)連装砲', () => {
                    expect(calculate.bonus(142, [90])).toEqual({
                        fire: 2,
                        evasion: 1
                    });
                });
                it('衣笠改二 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲', () => {
                    expect(calculate.bonus(142, [90, 90])).toEqual({
                        fire: 4,
                        evasion: 2
                    });
                });
                it('衣笠改二 || 20.3cm(2号)連装砲 ➕GFCS Mk.37', () => {
                    expect(calculate.bonus(142, [90, 307])).toEqual({
                        fire: 5,
                        evasion: 3,
                        torpedo: 2
                    });
                });
                it('衣笠改二 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37', () => {
                    expect(calculate.bonus(142, [90, 90, 307])).toEqual({
                        fire: 7,
                        evasion: 4,
                        torpedo: 2
                    });
                });
                it('衣笠改二 || 20.3cm(2号)連装砲 ➕20.3cm(2号)連装砲 ➕GFCS Mk.37 ➕GFCS Mk.37', () => {
                    expect(calculate.bonus(142, [90, 90, 307, 307])).toEqual({
                        fire: 7,
                        evasion: 4,
                        torpedo: 2
                    });
                });
            });
        });

        describe('大口径主砲...', () => {
            describe('41cm...', () => {
                it('扶桑改二 || 41cm連装砲改二 ➕41cm連装砲改二', () => {
                    expect(calculate.bonus(411, [318, 318])).toEqual({
                        fire: 2
                    });
                });
                it('扶桑改二 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(411, [318, 290])).toEqual({
                        fire: 2
                    });
                });
                it('扶桑改二 || 41cm連装砲改二 ➕41cm三連装砲改二 ➕21号対空電探', () => {
                    expect(calculate.bonus(411, [318, 290, 30])).toEqual({
                        fire: 2
                    });
                });
                it('伊勢改 || 41cm連装砲改二 ➕41cm連装砲改二', () => {
                    expect(calculate.bonus(82, [318, 318])).toEqual({
                        fire: 4,
                        aa: 4,
                        evasion: 4
                    });
                });
                it('伊勢改 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(82, [318, 290])).toEqual({
                        fire: 4,
                        aa: 4,
                        evasion: 5,
                        armor: 1
                    });
                });
                it('伊勢改 || 41cm連装砲改二 ➕41cm三連装砲改二 ➕21号対空電探', () => {
                    expect(calculate.bonus(82, [318, 290, 30])).toEqual({
                        fire: 4,
                        aa: 8,
                        evasion: 11,
                        armor: 1
                    });
                });
                it('伊勢改二 || 41cm連装砲改二 ➕41cm連装砲改二', () => {
                    expect(calculate.bonus(553, [318, 318])).toEqual({
                        fire: 4,
                        aa: 4,
                        evasion: 4
                    });
                });
                it('伊勢改二 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(553, [318, 290])).toEqual({
                        fire: 5,
                        aa: 4,
                        evasion: 5,
                        armor: 1
                    });
                });
                it('伊勢改二 || 41cm連装砲改二 ➕41cm三連装砲改二 ➕21号対空電探', () => {
                    expect(calculate.bonus(553, [318, 290, 30])).toEqual({
                        fire: 5,
                        aa: 8,
                        evasion: 11,
                        armor: 1
                    });
                });
                it('長門改二 || 41cm連装砲改二 ➕41cm連装砲改二', () => {
                    expect(calculate.bonus(541, [318, 318])).toEqual({
                        fire: 6,
                        aa: 4,
                        evasion: 2
                    });
                });
                it('長門改二 || 41cm連装砲改二 ➕41cm三連装砲改二', () => {
                    expect(calculate.bonus(541, [318, 290])).toEqual({
                        fire: 5,
                        aa: 2,
                        evasion: 3,
                        armor: 1
                    });
                });
                it('長門改二 || 41cm連装砲改二 ➕41cm三連装砲改二 ➕21号対空電探', () => {
                    expect(calculate.bonus(541, [318, 290, 30])).toEqual({
                        fire: 5,
                        aa: 2,
                        evasion: 3,
                        armor: 1
                    });
                });
                it('伊勢改二 || 35.6cm連装砲改', () => {
                    expect(calculate.bonus(553, [328])).toEqual({
                        fire: 1
                    });
                });
                it('金剛改二 || 35.6cm連装砲改', () => {
                    expect(calculate.bonus(149, [328])).toEqual({
                        fire: 2,
                        evasion: 1
                    });
                });
                it('伊勢改二 || 35.6cm連装砲改二', () => {
                    expect(calculate.bonus(553, [329])).toEqual({
                        fire: 1
                    });
                });
                it('金剛改 || 35.6cm連装砲改二', () => {
                    expect(calculate.bonus(209, [329])).toEqual({
                        fire: 2,
                        evasion: 1
                    });
                });
                it('金剛改二 || 35.6cm連装砲改二', () => {
                    expect(calculate.bonus(149, [329])).toEqual({
                        fire: 3,
                        aa: 1,
                        evasion: 1
                    });
                });
                it('Nelson改 || 16inch Mk.I連装砲 ➕16inch Mk.V連装砲 ➕16inch Mk.I三連装砲 ➕16inch Mk.I三連装砲', () => {
                    expect(calculate.bonus(576, [330, 331, 298, 298])).toEqual({
                        fire: 8,
                        armor: 2
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
                        armor: 1
                    });
                });
                it('Верный || 533mm 三連装魚雷 ➕61cm三連装(酸素)魚雷後期型', () => {
                    expect(calculate.bonus(147, [283, 285])).toEqual({
                        fire: 1,
                        torpedo: 5,
                        armor: 1,
                        evasion: 1
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
                        evasion: 7
                    });
                });
                it('Graf Zeppelin改 || Re.2001 OR改 ➕Re.2005 改 ➕Re.2001 CB改 ➕Re.2001 G改', () => {
                    expect(calculate.bonus(353, [184, 189, 316, 188])).toEqual({
                        aa: 1,
                        evasion: 2
                    });
                });
            });
            describe('二式艦上偵察機', () => {
                it('Saratoga・Mk.II Mod.2 || 二式艦上偵察機 ➕二式艦上偵察機⭐1 ➕二式艦上偵察機⭐2 ➕二式艦上偵察機⭐MAX', () => {
                    expect(
                        calculate.bonus(550, [61, 61, 61, 61], [0, 1, 2, 10])
                    ).toEqual({
                        fire: 2,
                        los: 4
                    });
                });
                it('蒼龍改二 || 二式艦上偵察機 ➕二式艦上偵察機⭐1 ➕二式艦上偵察機⭐2 ➕二式艦上偵察機⭐MAX', () => {
                    expect(
                        calculate.bonus(197, [61, 61, 61, 61], [0, 1, 2, 10])
                    ).toEqual({
                        fire: 12,
                        los: 14,
                        range: '1'
                    });
                });
            });
            describe('江草隊', () => {
                it('蒼龍改二 || 九九式艦爆(江草隊) ➕九九式艦爆(江草隊) ➕彗星(江草隊) ➕彗星(江草隊)', () => {
                    expect(
                        calculate.bonus(197, [99, 99, 100, 100], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 10
                    });
                });
                it('飛龍改二 || 九九式艦爆(江草隊) ➕九九式艦爆(江草隊) ➕彗星(江草隊) ➕彗星(江草隊)', () => {
                    expect(
                        calculate.bonus(196, [99, 99, 100, 100], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4
                    });
                });
            });
            describe('友永隊', () => {
                it('蒼龍改二 || 九七式艦攻(友永隊) ➕九七式艦攻(友永隊) ➕天山一二型(友永隊) ➕天山一二型(友永隊)', () => {
                    expect(
                        calculate.bonus(197, [93, 93, 94, 94], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4
                    });
                });
                it('飛龍改二 || 九七式艦攻(友永隊) ➕九七式艦攻(友永隊) ➕天山一二型(友永隊) ➕天山一二型(友永隊)', () => {
                    expect(
                        calculate.bonus(196, [93, 93, 94, 94], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 10
                    });
                });
            });
            describe('村田隊', () => {
                it('龍驤改二 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(157, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 2
                    });
                });
                it('赤城改 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(277, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 6
                    });
                });
                it('加賀改 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(278, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4
                    });
                });
                it('翔鶴改 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(288, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 4
                    });
                });
                it('翔鶴改二甲 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(466, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 6
                    });
                });
                it('瑞鶴改 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(112, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 2
                    });
                });
                it('瑞鶴改二甲 || 九七式艦攻(村田隊) ➕九七式艦攻(村田隊) ➕天山一二型(村田隊) ➕天山一二型(村田隊)', () => {
                    expect(
                        calculate.bonus(467, [143, 143, 144, 144], [0, 0, 0, 0])
                    ).toEqual({
                        fire: 3
                    });
                });
            });
            describe('流星', () => {
                it('赤城改二戊 || 流星 ➕流星 ➕流星 ➕流星改 ➕流星改', () => {
                    expect(calculate.bonus(599, [18, 18, 18, 52, 52])).toEqual({
                        fire: 10,
                        evasion: 5
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
                        armor: 2
                    });
                });
                it('時雨改二 || 13号対空電探改 ➕13号対空電探改', () => {
                    expect(calculate.bonus(145, [106, 106])).toEqual({
                        fire: 2,
                        aa: 4,
                        evasion: 6,
                        armor: 2
                    });
                });
                it('長門改二 || 13号対空電探改', () => {
                    expect(calculate.bonus(541, [106])).toEqual({
                        fire: 1,
                        aa: 2,
                        evasion: 3,
                        armor: 1
                    });
                });
                it('涼月改 || 13号対空電探改', () => {
                    expect(calculate.bonus(537, [106])).toEqual({
                        aa: 2,
                        evasion: 2,
                        armor: 1
                    });
                });
            });
        });

        describe('対潜兵装...', () => {
            describe('三式水中探信儀...', () => {
                it('山雲改 || 三式水中探信儀 ➕三式水中探信儀', () => {
                    expect(calculate.bonus(328, [47, 47])).toEqual({
                        evasion: 4,
                        asw: 4
                    });
                });
                it('時雨改二 || 三式水中探信儀 ➕三式水中探信儀', () => {
                    expect(calculate.bonus(145, [47, 47])).toEqual({
                        fire: 2,
                        evasion: 4,
                        asw: 6
                    });
                });
            });
        });

        describe('その他...', () => {
            it('比叡改二 || 三式弾改 ➕三式弾改', () => {
                expect(calculate.bonus(150, [317, 317])).toEqual({
                    fire: 2,
                    aa: 2
                });
            });
            it('比叡改二 || 探照灯', () => {
                expect(calculate.bonus(150, [74])).toEqual({
                    fire: 2,
                    evasion: -1
                });
            });
            it('比叡改二 || 探照灯 ➕探照灯', () => {
                expect(calculate.bonus(150, [74, 74])).toEqual({
                    fire: 2,
                    evasion: -1
                });
            });
            it('比叡改二 || 探照灯 ➕探照灯 ➕96式150cm探照灯', () => {
                expect(calculate.bonus(150, [74, 74, 140])).toEqual({
                    fire: 5,
                    evasion: -3
                });
            });
            it('比叡改二 || 探照灯 ➕探照灯 ➕96式150cm探照灯 ➕96式150cm探照灯', () => {
                expect(calculate.bonus(150, [74, 74, 140, 140])).toEqual({
                    fire: 5,
                    evasion: -3
                });
            });
            it('陽炎改二 || 53cm艦首(酸素)魚雷', () => {
                expect(calculate.bonus(566, [67])).toEqual({
                    torpedo: -5
                });
            });
            it('Johnston改 || SG レーダー(初期型)', () => {
                expect(calculate.bonus(689, [315])).toEqual({
                    fire: 3,
                    evasion: 3,
                    los: 4,
                    range: 1
                });
            });
            it('Samuel B.Roberts改 || SG レーダー(初期型)', () => {
                expect(calculate.bonus(681, [315])).toEqual({
                    fire: 3,
                    evasion: 3,
                    los: 4,
                    range: 1
                });
            });
        });

        describe('Sets...', () => {
            it('吹雪改二 || 12.7cm連装砲A型改三(戦時改修)＋高射装置 ➕61cm三連装(酸素)魚雷 ➕61cm三連装(酸素)魚雷後期型', () => {
                expect(calculate.bonus(426, [295, 125, 285])).toEqual({
                    fire: 4,
                    torpedo: 8,
                    aa: 2,
                    evasion: 1
                });
            });
            it('吹雪改二 || 12.7cm連装砲A型改三(戦時改修)＋高射装置 ➕61cm三連装(酸素)魚雷 ➕61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(
                    calculate.bonus(426, [295, 125, 285], [0, 0, 10])
                ).toEqual({
                    fire: 5,
                    torpedo: 8,
                    aa: 2,
                    evasion: 1
                });
            });
            it('金剛改二丙 || 三式弾 ➕三式弾 ➕三式弾改 ➕三式弾改', () => {
                expect(
                    calculate.bonus(591, [35, 35, 317, 317], [0, 0, 0])
                ).toEqual({
                    fire: 4,
                    aa: 4
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
                        33
                    ])
                ).toBe(5);
                expect(
                    calculate.ship.speed(136, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(136, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33
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
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(136, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33
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
                        33
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
                        33
                    ])
                ).toBe(5);
                expect(
                    calculate.ship.speed(411, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(411, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33
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
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(411, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33
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
                        33
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
                        33
                    ])
                ).toBe(5);
                expect(
                    calculate.ship.speed(187, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(187, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33
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
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(187, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33
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
                        33
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
                        33
                    ])
                ).toBe(10);
                // Samuel B.Roberts 改
                expect(
                    calculate.ship.speed(681, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(681, [34, 34, 34, undefined, 33])
                ).toBe(10);
                expect(
                    calculate.ship.speed(681, [87, 87, 87, undefined, 33])
                ).toBe(10);
            });
            it('type: high-1', () => {
                // 翔鹤 改二甲
                expect(
                    calculate.ship.speed(466, [
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(466, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(466, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33
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
                        33
                    ])
                ).toBe(20);
                expect(
                    calculate.ship.speed(466, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33
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
                        33
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
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(197, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(197, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33
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
                        33
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(197, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33
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
                        33
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
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(330, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(330, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33
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
                        33
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(330, [
                        34,
                        undefined,
                        87,
                        undefined,
                        33
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
                        33
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
                        33
                    ])
                ).toBe(10);
                expect(
                    calculate.ship.speed(278, [
                        34,
                        undefined,
                        undefined,
                        undefined,
                        33
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(278, [
                        34,
                        34,
                        undefined,
                        undefined,
                        33
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
                        33
                    ])
                ).toBe(15);
                expect(
                    calculate.ship.speed(278, [
                        34,
                        undefined,
                        undefined,
                        87,
                        33
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
                        33
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
