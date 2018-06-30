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
]

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
const DD_KagerouClassRemodelAll = DD_KagerouClassRemodel.concat(DD_KagerouClass2ndRemodel)
const DD_YuugumoClass2ndRemodel = [
    543, // 長波改二
]
const DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel = DD_YuugumoClass2ndRemodel.concat([
    229, // 島風改
])

module.exports = {
    BB_KongouClass2ndRemodel,
    BB_IseClassRemodel, BB_IseClass2ndRemodel, BB_IseClassRemodelAll,
    BB_FusouClass2ndRemodel,
    BB_IseClassRemodel_PLUS_FusouClass2ndRemodel,

    CL_KumaClassRemodel, CL_KumaClass2ndRemodel, CL_KumaClassRemodelAll,
    CL_NagaraClass2ndRemodel,

    DD_FubukiClass2ndRemodel,
    DD_AyanamiClassRemodel, DD_AyanamiClass2ndRemodel, DD_AyanamiClassRemodelAll,
    DD_AkatsukiClassRemodel, DD_AkatsukiClass2ndRemodel, DD_AkatsukiClassRemodelAll,
    DD_HatsuharuClassRemodel, DD_HatsuharuClass2ndRemodel, DD_HatsuharuClassRemodelAll,
    DD_ShiratsuyuClass2ndRemodel,
    DD_AsashioClass2ndRemodel,
    DD_KagerouClassRemodel, DD_KagerouClass2ndRemodel, DD_KagerouClassRemodelAll,
    DD_YuugumoClass2ndRemodel,
    DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel,
}
