/**
 * @module
 * 装备额外属性收益
 * 338. **烈風改二戊型**
 * 339. **烈風改二戊型(一航戦/熟練)**
 */

module.exports = [
    // ========================================================================
    // 烈風改二戊型
    // https://wikiwiki.jp/kancolle/%E7%83%88%E9%A2%A8%E6%94%B9%E4%BA%8C%E6%88%8A%E5%9E%8B
    // ========================================================================
    {
        equipment: 338,
        ship: {
            isID: [
                277, // 赤城改
                278 // 加賀改
            ]
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2
        }
    },
    {
        equipment: 338,
        ship: {
            isID: [594] // 赤城改二
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3
        }
    },
    {
        equipment: 338,
        ship: {
            isID: [599] // 赤城改二戊
        },
        bonus: {
            fire: 4,
            aa: 3,
            evasion: 4
        }
    },

    // ========================================================================
    // 烈風改二戊型(一航戦/熟練)
    // https://wikiwiki.jp/kancolle/%E7%83%88%E9%A2%A8%E6%94%B9%E4%BA%8C%E6%88%8A%E5%9E%8B%28%E4%B8%80%E8%88%AA%E6%88%A6%EF%BC%8F%E7%86%9F%E7%B7%B4%29
    // ========================================================================
    {
        equipment: 339,
        ship: {
            isID: [
                277 // 赤城改
            ]
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 2
        }
    },
    {
        equipment: 339,
        ship: {
            isID: [
                278 // 加賀改
            ]
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3
        }
    },
    {
        equipment: 339,
        ship: {
            isID: [594] // 赤城改二
        },
        bonus: {
            fire: 1,
            aa: 3,
            evasion: 4
        }
    },
    {
        equipment: 339,
        ship: {
            isID: [599] // 赤城改二戊
        },
        bonus: {
            fire: 6,
            aa: 4,
            evasion: 5
        }
    }
];
