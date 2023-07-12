// const deepExtend = require('deep-extend')
const getDB = require('./get/db');

const vars = {
    locale: 'ja_jp',
    joint: '・',

    maxShipLv: 180,
    maxHqLv: 120,

    rank: {
        1: '|',
        2: '||',
        3: '|||',
        4: '\\',
        5: '\\\\',
        6: '\\\\\\',
        7: '》',
    },

    extPic: '.png',

    db: {},
    pathPics: {},

    hiddenShipIdRange: [1000, 1400],
    enemyIdStartFrom: 1500,
    cgBookShipMax: 420,

    exSlotEquipmentTypes: undefined,
    exSlotOtherEquipments: undefined,

    shipStatExtraMax: {
        hp: 2,
        asw: 9,
    },

    fieldPlanesPerSlot: {
        recon: 4,
        attacker: 18,
        large: 9,
    },
};

// 确定exslot装备类型和额外装备
const defineExslotVars = (dbname, key) => {
    if (Array.isArray(vars[key])) return;
    const db = getDB(dbname, vars.db);
    if (!db) return;
    for (const id in db) {
        if (db[id].equipable_exslot) {
            if (!vars[key]) vars[key] = [];
            vars[key].push(db[id].id);
        }
    }
};

Object.defineProperty(vars, 'register', {
    value: (settings = {}) => {
        // deepExtend(vars, settings)
        Object.assign(vars, settings);
        // console.log(settings.db.ships[1]._name)
        // console.log(vars.db.ships[1]._name)

        // 确定exslot装备类型和额外装备
        defineExslotVars('equipmentTypes', 'exSlotEquipmentTypes');
        defineExslotVars('equipments', 'exSlotOtherEquipments');

        return vars;
    },
});

module.exports = vars;
