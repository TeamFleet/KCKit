/**
 * 装备改修收益
 * @module
 */

module.exports = {

    // 装备类型集合

    SmallCalibers: {
        shelling: 1,
        night: 1
    },
    MediumCalibers: {
        shelling: 1,
        night: 1
    },
    LargeCalibers: {
        shelling: 1.5,
        night: 1
    },
    SecondaryGuns: {
        shelling: 1,
        night: 1,
        hit: 1,
    },
    APShells: {
        shelling: 1,
        night: 1
    },
    AAShells: {
        shelling: 1,
        night: 1
    },
    AAFireDirectors: {
        shelling: 1,
        night: 1
    },
    Searchlights: {
        shelling: 1,
        night: 1
    },
    AAGuns: {
        shelling: 1,
        torpedo: 1.2
    },
    Torpedos: {
        torpedo: 1.2,
        night: 1
    },
    DepthCharges: {
        shelling: 0.75,
        antisub: 1
    },
    Sonars: {
        shelling: 0.75,
        antisub: 1
    },
    SmallRadars: {
        los: 1.25
    },
    LargeRadars: {
        los: 1.4
    },
    Seaplanes: {
    },
    SeaplaneRecons: {
        los: 1.2
    },
    SeaplaneFighters: {
        fighter: 0.2
    },
    SeaplaneBomber: {
        // fighter: 0.2
        los: 1.15
    },
    CarrierFighters: {
        fighter: 0.2
    },
    DiveBombers: {
        fighter: 0.25,
        night: 1
    },
    CarrierRecons: {
        los: 1.2
    },
    LandingCrafts: {
        shelling: 1,
        night: 1
    },
    Interceptors: {
        fighter: 0.2
    },

    // 独立装备 (如果和类型集合结果冲突，覆盖)

    _10: {
        shelling: ['multiplication', 0.2],
        night: 1,
    },
    _66: {
        shelling: ['multiplication', 0.2],
        night: 1,
        // aa
        // aaFleet
    },
    _220: {
        shelling: ['multiplication', 0.2],
        night: 1,
        // aa
        // aaFleet
    },
    _275: {
        shelling: ['multiplication', 0.2],
        night: 1,
        // aa
        // aaFleet
    },
    // _247: {
    //     _type: 'multiplication',
    //     shelling: 0.3,
    //     night: 0.3,
    // },
    _12: {
        shelling: ['multiplication', 0.3],
        night: ['multiplication', 0.3],
    },
    _234: {
        shelling: ['multiplication', 0.3],
        night: ['multiplication', 0.3],
    },
}
