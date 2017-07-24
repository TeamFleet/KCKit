const getShipAndEquipments = require('../get/ship-and-equipments')

module.exports = (
    ship,
    equipments = [],
    // equipmentStars = [],
    // equipmentRanks = []
) => {
    ({ ship, equipments } = getShipAndEquipments(ship, equipments))
    if (!ship) return false

    // console.log(ship.id, equipments.map(equipment => equipment ? equipment.id : undefined))

    const speed = ship.stat.speed
    let result = speed
    const getResult = () => Math.min(20, result)
    const rule = ship.getSpeedRule() || 'low-2'
    const count = {
        [33]: 0, // 改良型艦本式タービン
        [34]: 0, // 強化型艦本式缶
        [87]: 0, // 新型高温高圧缶
    }

    let multiper = 0

    equipments.forEach(equipment => {
        if (!equipment) return
        let id = equipment.id
        if (typeof count[equipment.id] !== 'undefined')
            count[equipment.id]++
    })

    if (!count[33]) return getResult()

    switch (rule) {
        case 'low-1':
            // 低速A
            // 	基础		5
            // 	最大		20
            // 	1x + 0y		+5		0.3x
            // 	2x + 0y		+5		0.3x
            // 	3x + 0y		+5		0.3x
            // 	4x + 0y		+5		0.3x
            // 	0x + 1y		+5		0.7x
            // 	1x + 1y		+10		1x
            // 	2x + 1y		+10		1x
            // 	3x + 1y		+10		1x
            // 	0x + 2y		+10		1.4x
            // 	1x + 2y		+15		1.7x
            // 	2x + 2y		+15		1.7x
            // 	0x + 3y		+15		2.1x
            // 	1x + 3y		+15
            // 	x = 0.3
            // 	y = 0.7
            multiper =
                0.3 * Math.min(count[34], 1)
                + 0.7 * count[87]
            break
        case 'low-2':
        case 'high-3':
            // 低速B
            // 	基础		5
            // 	最大		15
            // 	1x + 0y		+5		0.33x
            // 	2x + 0y		+5		0.66x
            // 	3x + 0y		+10		1x
            // 	4x + 0y		+10		1x
            // 	0x + 1y		+5		0.5x
            // 	1x + 1y		+5		0.83x
            // 	2x + 1y		+10		1.33x
            // 	3x + 1y		+10		1.33x
            // 	0x + 2y		+10		1x
            // 	x = 0.33
            // 	y = 0.5
            // 高速C
            // 	基础		10
            // 	最大		20
            // 	1x + 0y		+5		0.33x
            // 	2x + 0y		+5		0.66x
            // 	3x + 0y		+10		1x
            // 	0x + 1y		+5		0.5x
            // 	1x + 1y		+5		0.83x
            // 	2x + 1y		+10		1.33x
            // 	0x + 2y		+10		1x
            // 	x = 0.33
            // 	y = 0.5
            if (count[34] || count[87])
                multiper = Math.min(
                    1,
                    count[34] / 3 + 0.5 * count[87]
                )
            break
        case 'low-3':
        case 'high-4':
            // 低速C
            // 	基础		5
            // 	最大		10
            // 高速D
            // 	基础		10
            // 	最大		15
            if (count[34] || count[87])
                result += 5
            break
        case 'high-1':
            // 高速A
            // 	基础		10
            // 	最大 		20
            // 	1x + 0y		+5		0.5x
            // 	2x + 0y		+10		1x
            // 	1x + 1y		+10		1.5x
            // 	0x + 1y		+10		1x
            // 	x = 0.5
            // 	y = 1
            multiper = 0.5 * count[34] + 1 * count[87]
            break
        case 'high-2':
            // 高速B
            // 	基础		10
            // 	最大 		20
            // 	1x + 0y		+5		0.5x
            // 	2x + 0y		+10		1x
            // 	0x + 1y		+5		0.5x
            // 	1x + 1y		+10		1x
            // 	0x + 2y		+10		1x
            // 	x = 0.5
            // 	y = 0.5
            multiper = 0.5 * count[34] + 0.5 * count[87]
            break
    }

    // console.log(
    //     ship, equipments_by_slot,
    //     count,
    //     rule,
    //     multiper
    // )

    if (multiper > 0 && multiper < 1)
        result += 5
    else if (multiper >= 1 && multiper < 1.5)
        result += 10
    else if (multiper >= 1.5)
        result += 15

    return getResult()
}