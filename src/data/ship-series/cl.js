const {
    川内,
    川内改,
    川内改二,

    夕張,
    夕張改,
    夕張改二,
    夕張改二特,
    夕張改二丁,

    Sheffield,
    Sheffield改,

    香取,
    香取改,
    鹿島,
    鹿島改,
} = require('../ship-ids');

module.exports = {
    // 轻巡洋舰
    Sendai: [川内, 川内改, 川内改二],
    Jintsu: [
        55, // 神通
        223, // 神通改
        159, // 神通改二
    ],
    Yuubari: [夕張, 夕張改, 夕張改二, 夕張改二特, 夕張改二丁],
    Sheffield: [Sheffield, Sheffield改],

    // 练习巡洋舰
    Katori: [香取, 香取改],
    Kashima: [鹿島, 鹿島改],
};
