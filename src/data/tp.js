// const shipTypes = require('../types/ships')
const equipmentTypes = require('../types/equipments')

module.exports = {
    shipType: {
        // DD
        1: 5,
        19: 5,

        // CL
        2: 2,
        28: 2,

        // CT
        21: 6,

        // CAV
        5: 4,

        // BBV
        8: 7,

        // AV
        12: 9.5,
        24: 9.5,

        // SSV
        14: 1,

        // LHA
        15: 12,

        // AO
        29: 15,

        // AS
        17: 7
    },

    equipmentType: {
        [equipmentTypes.CombatRation]: 1,
        [equipmentTypes.SupplyContainer]: 5,
        [equipmentTypes.LandingCraft]: 8,
        [equipmentTypes.AmphibiousCraft]: 2
    }
}