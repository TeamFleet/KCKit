const getShipAndEquipments = require('../../get/ship-and-equipments')

/**
 * 计算舰娘航速
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {(number|Equipment[])} [equipments] 装备列表
 * @return {number} 航速ID
 */
module.exports = (
    ship,
    equipments = []
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

    let increase = 0

    equipments.forEach(equipment => {
        if (!equipment) return
        // let id = equipment.id
        if (typeof count[equipment.id] !== 'undefined')
            count[equipment.id]++
    })

    if (!count[33]) return getResult()

    const {
        [34]: countX,
        [87]: countY
    } = count

    switch (rule) {
        // x - +10
        // y - +13
        case 'low-1': {
            // 低速A
            // 	基础		5
            // 	最大		20
            // 	1x + 0y		+5		0.3x    0.3
            // 	2x + 0y		+5		0.3x    0.6
            // 	3x + 0y		+5		0.3x    0.9
            // 	4x + 0y		+5		0.3x    1.2
            // 	0x + 1y		+5		0.7x
            // 	1x + 1y		+10		1x
            // 	2x + 1y		+15		1x
            // 	3x + 1y		+15		1x
            // 	0x + 2y		+10		1.4x
            // 	1x + 2y		+15		1.7x
            // 	2x + 2y		+15		1.7x
            // 	0x + 3y		+15		2.1x
            // 	1x + 3y		+15
            // 	x = 0.3
            // 	y = 0.7
            if (countX && !countY) {
                increase = 0.5
            } else if (countX >= 2 && countY) {
                increase = 1.5
            } else {
                increase =
                    0.3 * Math.min(countX, 1)
                    + 0.7 * countY
            }
            break
        }
        case 'low-2':
        case 'high-3': {
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
            if (countX || countY)
                increase = Math.min(
                    1,
                    countX / 3 + 0.5 * countY
                )
            break
        }
        case 'low-3':
        case 'high-4': {
            // 低速C
            // 	基础		5
            // 	最大		10
            // 高速D
            // 	基础		10
            // 	最大		15
            if (countX || countY)
                result += 5
            break
        }
        case 'high-1': {
            // 高速A
            // 	基础		10
            // 	最大 		20
            // 	1x + 0y		+5		0.5x
            // 	2x + 0y		+10		1x
            // 	1x + 1y		+10		1.5x
            // 	0x + 1y		+10		1x
            // 	x = 0.5
            // 	y = 1
            increase = 0.5 * countX + 1 * countY
            break
        }
        case 'high-2': {
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
            increase = 0.5 * countX + 0.5 * countY
            break
        }
        case 'low-4': {
            // 低速4
            // 	基础		5
            // 	最大 		20
            // 	1x + 0y		+5		0.5x
            // 	2x + 0y		+10		1x
            // 	0x + 1y		+5		0.5x
            // 	1x + 1y		+10		1x
            // 	0x + 2y		+10		1x
            // 	x = 0.5
            // 	y = 0.5
            increase = 0.5
            break
        }
    }

    // console.log(
    //     ship, equipments_by_slot,
    //     count,
    //     rule,
    //     increase
    // )

    if (increase > 0 && increase < 1)
        result += 5
    else if (increase >= 1 && increase < 1.5)
        result += 10
    else if (increase >= 1.5)
        result += 15

    return getResult()
}
