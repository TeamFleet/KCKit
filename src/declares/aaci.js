var AACITable = {};

// typeIcons is a array including [ship icon, equip icon, ...]
// predicateShipMst is a function f: f(mst)
// predicateShipObj is a function f: f(shipObj)
// returns a boolean to indicate whether the ship in question (with equipments)
// is capable of performing such type of AACI
function declareAACI(
    apiId,
    fixedBonus,
    modifier,
    typeIcons,
    predicateShipSlots,
    predicateWithEquips) {
    AACITable[apiId] = {
        id: apiId,
        fixed: fixedBonus,
        modifier: modifier,
        icons: typeIcons,
        predicateShipMst: predicateShipSlots,
        predicateShipObj: predicateWithEquips
    };
}


// all non-sub ships
declareAACI(
    5,
    4, 1.5,
    [surfaceShipIcon, biHaMountIcon, biHaMountIcon, radarIcon],
    predAllOf(isNotSubmarine, slotNumAtLeast(3)),
    withEquipmentMsts(
        predAllOf(
            hasAtLeast(isBuiltinHighAngleMount, 2),
            hasSome(isAARadar))
    )
);

declareAACI(
    8, 4, 1.4,
    [surfaceShipIcon, biHaMountIcon, radarIcon],
    predAllOf(isNotSubmarine, slotNumAtLeast(2)),
    withEquipmentMsts(
        predAllOf(
            hasSome(isBuiltinHighAngleMount),
            hasSome(isAARadar))
    )
);

declareAACI(
    7, 3, 1.35,
    [surfaceShipIcon, haMountIcon, aaFdIcon, radarIcon],
    predAllOf(isNotSubmarine, slotNumAtLeast(2)),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isAAFD),
            hasSome(isAARadar))
    )
);

declareAACI(
    9, 2, 1.3,
    [surfaceShipIcon, haMountIcon, aaFdIcon],
    predAllOf(isNotSubmarine, slotNumAtLeast(1)),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isAAFD))
    )
);

declareAACI(
    12, 3, 1.25,
    [surfaceShipIcon, cdmgIcon, aaGunIcon, radarIcon],
    predAllOf(isNotSubmarine, slotNumAtLeast(2)),
    withEquipmentMsts(
        predAllOf(
            hasSome(isCDMG),
            /* CDMGs are AAGuns, so we need at least 2 AA guns 
               including the CDMG one we have just counted */
            hasAtLeast(isAAGun, 2),
            hasSome(isAARadar))
    )
);

// battleship special AACIs
declareAACI(
    4, 6, 1.4,
    [battleShipIcon, lcMainGunIcon, type3ShellIcon, aaFdIcon, radarIcon],
    predAllOf(isBattleship, slotNumAtLeast(4)),
    withEquipmentMsts(
        predAllOf(
            hasSome(isLargeCaliberMainGun),
            hasSome(isType3Shell),
            hasSome(isAAFD),
            hasSome(isAARadar))
    )
);

declareAACI(
    6, 4, 1.45,
    [battleShipIcon, lcMainGunIcon, type3ShellIcon, aaFdIcon],
    predAllOf(isBattleship, slotNumAtLeast(3)),
    withEquipmentMsts(
        predAllOf(
            hasSome(isLargeCaliberMainGun),
            hasSome(isType3Shell),
            hasSome(isAAFD))
    )
);

// Akizuki-class AACIs
declareAACI(
    1, 7, 1.7,
    [akizukiIcon, haMountIcon, haMountIcon, radarIcon],
    predAllOf(isAkizukiClass),
    withEquipmentMsts(
        predAllOf(
            hasAtLeast(isHighAngleMount, 2),
            hasSome(isRadar))
    )
);
declareAACI(
    2, 6, 1.7,
    [akizukiIcon, haMountIcon, radarIcon],
    predAllOf(isAkizukiClass),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isRadar))
    )
);
declareAACI(
    3, 4, 1.6,
    [akizukiIcon, haMountIcon, haMountIcon],
    predAllOf(isAkizukiClass),
    withEquipmentMsts(
        hasAtLeast(isHighAngleMount, 2)
    )
);

// Maya K2
declareAACI(
    10, 8, 1.65,
    [mayaK2Icon, haMountIcon, cdmgIcon, radarIcon],
    // Omitted slot num for specified ship, same below
    predAllOf(isMayaK2),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isCDMG),
            hasSome(isAARadar))
    )
);
declareAACI(
    11, 6, 1.5,
    [mayaK2Icon, haMountIcon, cdmgIcon],
    predAllOf(isMayaK2),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isCDMG))
    )
);

// Isuzu K2
declareAACI(
    14, 4, 1.45,
    [isuzuK2Icon, haMountIcon, aaGunIcon, radarIcon],
    predAllOf(isIsuzuK2),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isAAGun),
            hasSome(isAARadar))
    )
);
declareAACI(
    15, 3, 1.3,
    [isuzuK2Icon, haMountIcon, aaGunIcon],
    predAllOf(isIsuzuK2),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isAAGun))
    )
);

// Kasumi K2B
declareAACI(
    16, 4, 1.4,
    [kasumiK2BIcon, haMountIcon, aaGunIcon, radarIcon],
    predAllOf(isKasumiK2B),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isAAGun),
            hasSome(isAARadar))
    )
);
declareAACI(
    17, 2, 1.25,
    [kasumiK2BIcon, haMountIcon, aaGunIcon],
    predAllOf(isKasumiK2B),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isAAGun))
    )
);

// Satsuki K2
declareAACI(
    18, 2, 1.2,
    [satsukiK2Icon, cdmgIcon],
    predAllOf(isSatsukiK2),
    withEquipmentMsts(
        hasSome(isCDMG)
    )
);

// Kinu K2
declareAACI(
    19, 5, 1.45,
    [kinuK2Icon, haMountNbifdIcon, cdmgIcon],
    predAllOf(isKinuK2),
    withEquipmentMsts(
        predAllOf(
            /* any HA with builtin AAFD will not work  */
            predNot(hasSome(isBuiltinHighAngleMount)),
            hasSome(isHighAngleMount),
            hasSome(isCDMG))
    )
);
declareAACI(
    20, 3, 1.25,
    [kinuK2Icon, cdmgIcon],
    predAllOf(isKinuK2),
    withEquipmentMsts(
        hasSome(isCDMG)
    )
);

// Yura K2
declareAACI(
    21, 5, 1.45,
    [yuraK2Icon, haMountIcon, radarIcon],
    predAllOf(isYuraK2),
    withEquipmentMsts(
        predAllOf(
            hasSome(isHighAngleMount),
            hasSome(isAARadar))
    )
);