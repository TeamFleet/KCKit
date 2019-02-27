const BB_NagatoClass2ndRemodel = [
    541, // 長門改二
    573, // 陸奥改二
]
const BB_KongouClass2ndRemodel = [
    149, // 金剛改二
    150, // 比叡改二
    151, // 榛名改二
    152, // 霧島改二
]
const BB_IseClassRemodel = [
    82, // 伊勢改
    88, // 日向改
]
const BB_IseClass2ndRemodel = [
    553, // 伊勢改二
]
const BB_IseClassRemodelAll = BB_IseClassRemodel.concat(BB_IseClass2ndRemodel)
const BB_FusouClass2ndRemodel = [
    411, // 扶桑改二
    412, // 山城改二
]
const BB_IseClassRemodel_PLUS_FusouClass2ndRemodel = BB_IseClassRemodel.concat(BB_FusouClass2ndRemodel)


/*************************************************************************/


const CVE_TaiyouClassRemodelAll = [
    380, // 大鹰改
    529, // 大鹰改二
    381, // 神鷹改
    536, // 神鷹改二
]
const CVE = [
    526, // 大鹰
    534, // 神鷹
    544, // Gambier Bay
    396, // Gambier Bay改
    560, // 瑞鳳改二乙
    ...CVE_TaiyouClassRemodelAll
]


/*************************************************************************/


const CL_KumaClassRemodel = [
    216, // 多摩改
    217, // 木曽改
]
const CL_KumaClass2ndRemodel = [
    547, // 多摩改二
    146, // 木曽改二
]
const CL_KumaClassRemodelAll = CL_KumaClassRemodel.concat(CL_KumaClass2ndRemodel)
const CL_NagaraClass2ndRemodel = [
    488, // 由良改二
    487, // 鬼怒改二
]


/*************************************************************************/


const DD_FubukiClass2ndRemodel = [
    426, // 吹雪改二
    420, // 叢雲改二
]
const DD_AyanamiClassRemodel = [
    207, // 綾波改
    208, // 敷波改
    390, // 天霧改
    391, // 狭霧改
    230, // 朧改
    231, // 曙改
    232, // 漣改
    233, // 潮改
]
const DD_AyanamiClass2ndRemodel = [
    195, // 綾波改二
    407, // 潮改二
]
const DD_AyanamiClassRemodelAll = DD_AyanamiClassRemodel.concat(DD_AyanamiClass2ndRemodel)
const DD_AkatsukiClassRemodel = [
    234, // 暁改
    235, // 響改
    236, // 雷改
    237, // 電改
]
const DD_AkatsukiClass2ndRemodel = [
    437, // 暁改二
    147, // Верный
]
const DD_AkatsukiClassRemodelAll = DD_AkatsukiClassRemodel.concat(DD_AkatsukiClass2ndRemodel)
const DD_HatsuharuClassRemodel = [
    238, // 初春改
    239, // 子日改
    240, // 若葉改
    241, // 初霜改
]
const DD_HatsuharuClass2ndRemodel = [
    326, // 初春改二
    419, // 初霜改二
]
const DD_HatsuharuClassRemodelAll = DD_HatsuharuClassRemodel.concat(DD_HatsuharuClass2ndRemodel)
const DD_ShiratsuyuClass2ndRemodel = [
    497, // 白露改二
    145, // 時雨改二
    498, // 村雨改二
    144, // 夕立改二
    469, // 江風改二
]
const DD_AsashioClass2ndRemodel = [
    463, // 朝潮改二
    468, // 朝潮改二丁
    199, // 大潮改二
    489, // 満潮改二
    490, // 荒潮改二
    198, // 霰改二
    464, // 霞改二
    470, // 霞改二乙
]
const DD_KagerouClassRemodel = [
    225, // 陽炎改
    226, // 不知火改
    227, // 黒潮改
    362, // 親潮改
    300, // 初風改
    228, // 雪風改
    316, // 天津風改
    322, // 時津風改
    317, // 浦風改
    556, // 浦風丁改
    320, // 磯風改
    557, // 磯風乙改
    312, // 浜風改
    558, // 浜風乙改
    313, // 谷風改
    559, // 谷風丁改
    329, // 野分改
    354, // 嵐改
    355, // 萩風改
    294, // 舞風改
    301, // 秋雲改
]
const DD_KagerouClass2ndRemodel = [
    566, // 陽炎改二
    567, // 不知火改二
    568, // 黒潮改二
]
const DD_KagerouClassRemodelB = [
    557, // 磯風乙改
    558, // 浜風乙改
]
const DD_KagerouClassRemodelAll = DD_KagerouClassRemodel.concat(DD_KagerouClass2ndRemodel)
const DD_YuugumoClass2ndRemodel = [
    542, // 夕雲改二
    563, // 巻雲改二
    564, // 風雲改二
    543, // 長波改二
]
const DD_ShimakazeRemodel = [
    229, // 島風改
]
const DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel = DD_YuugumoClass2ndRemodel.concat(DD_ShimakazeRemodel)


/*************************************************************************/


const rn_BB = [
    571, 576, // Nelson
    439, 364, // Warspite
]
const rn = [
    ...rn_BB,
    515, 393, // Ark Royal
    519, 394, // Jervis
]
const usn_BB = [
    440, 360, // Iowa
]
const usn_CV = [
    544, 396, // Gambier Bay
    549, 397, // Interpid
    433, 438, 545, 550, // Saratoga
]
const usn_DD = [
    561, 681, // Samuel B.Roberts
    562, 689, // Johston
]
const usn = [
    ...usn_BB,
    ...usn_CV,
    ...usn_DD
]
const vmf_DD = [
    516, 395, // Ташкент
    147 // Верный
]
const vmf = [
    ...vmf_DD
]


/*************************************************************************/


module.exports = {
    BB_NagatoClass2ndRemodel,
    BB_KongouClass2ndRemodel,
    BB_IseClassRemodel, BB_IseClass2ndRemodel, BB_IseClassRemodelAll,
    BB_FusouClass2ndRemodel,
    BB_IseClassRemodel_PLUS_FusouClass2ndRemodel,

    CVE,
    CVE_TaiyouClassRemodelAll,

    CL_KumaClassRemodel, CL_KumaClass2ndRemodel, CL_KumaClassRemodelAll,
    CL_NagaraClass2ndRemodel,
    Yuubari: [115, 293],
    Yahagi: [139, 307],
    Ooyodo: [183, 321],
    Kashima: [465, 356],

    DD_FubukiClass2ndRemodel,
    DD_AyanamiClassRemodel, DD_AyanamiClass2ndRemodel, DD_AyanamiClassRemodelAll,
    DD_AkatsukiClassRemodel, DD_AkatsukiClass2ndRemodel, DD_AkatsukiClassRemodelAll,
    DD_HatsuharuClassRemodel, DD_HatsuharuClass2ndRemodel, DD_HatsuharuClassRemodelAll,
    DD_ShiratsuyuClass2ndRemodel,
    DD_AsashioClass2ndRemodel,
    DD_KagerouClassRemodel, DD_KagerouClassRemodelB, DD_KagerouClass2ndRemodel, DD_KagerouClassRemodelAll,
    DD_YuugumoClass2ndRemodel,
    DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel,
    DD_ShimakazeRemodel,
    Kamikaze: [471, 476],
    Harukaze: [473, 363],
    Ushio: [16, 233, 407],
    Hibiki: [35, 235, 147],
    Ikazuchi: [36, 236],
    Hatsushimo: [41, 241, 419],
    Shigure: [43, 243, 145],
    Yamakaze: [457, 369],
    Yamagumo: [414, 328],
    Kasumi: [49, 253, 464, 470],
    Yukikaze: [20, 228],
    Isokaze: [167, 320, 557],
    Hamakaze: [170, 312, 558],
    Maikaze: [122, 294],
    Kishinami: [527, 686],
    Asashimo: [425, 344],
    Suzutsuki: [532, 537],

    rn, rn_BB,
    usn, usn_BB, usn_CV, usn_DD,
    vmf, vmf_DD
}
