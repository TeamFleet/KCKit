/**
 * 处理 ship.slots 数组，在 index=4 插入一个 0，原 index >=4 均后延一位
 */
module.exports = arrSlot => {
    const slots = [];
    arrSlot.forEach((value, index) => {
        slots[index >= 4 ? index + 1 : index] = value;
    });
    // let slots = arrSlot.map(value => value)
    slots[4] = 0;
    return slots;
};
