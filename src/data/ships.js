const S = require('./ship-series');
const {
    大和改二,
    大和改二重,
    武蔵改二,
    扶桑改二,
    山城改二,
    長門改二,
    陸奥改二,
    金剛改二丙,
    比叡改二丙,
    榛名改二,
    榛名改二乙,
    榛名改二丙,
    'South Dakota': SouthDakota,
    'South Dakota改': SouthDakota改,

    Hornet,
    Hornet改,

    鳳翔改二,
    鳳翔改二戦,
    龍鳳改二戊,
    龍鳳改二,
    大鷹,
    大鷹改,
    大鷹改二,
    雲鷹,
    雲鷹改,
    雲鷹改二,
    神鷹,
    神鷹改,
    神鷹改二,
    'Gambier Bay': GambierBay,
    'Gambier Bay改': GambierBay改,
    'Gambier Bay Mk.II': GambierBayMkII,
    Langley,
    Langley改,

    最上改二,
    最上改二特,
    三隈改二,

    能代改二,
    矢矧改二,
    矢矧改二乙,

    鹿島,
    鹿島改,

    深雪改二,
    磯波改二,
    浦波改二,
    天霧改,
    天霧改二,
    天霧改二丁,
    曙改,
    曙改二,
    潮改,
    潮改二,
    初霜改二,
    山風改二,
    山風改二丁,
    時雨改三,
    親潮改,
    親潮改二,
    霰改二,
    早潮改,
    早潮改二,
    丹陽,
    雪風改二,
    天津風改,
    天津風改二,
    磯風乙改,
    浜風乙改,
    秋雲改,
    秋雲改二,
    長波改二,
    沖波改二,
    高波改二,
    清霜改二,
    清霜改二丁,

    三隈改二特,
} = require('./ship-ids');

// ============================================================================

const BB_NagatoClassRemodel = [
    275, // 長門改
    276, // 陸奥改
];
const BB_NagatoClass2ndRemodel = [長門改二, 陸奥改二];
const BB_NagatoClassRemodelAll = [
    ...BB_NagatoClassRemodel,
    ...BB_NagatoClass2ndRemodel,
];
const BB_KongouClassRemodel = [
    209, // 金剛改
    210, // 比叡改
    211, // 榛名改
    212, // 霧島改
];
const BB_KongouClass2ndRemodel = [
    149, // 金剛改二
    金剛改二丙,
    150, // 比叡改二
    比叡改二丙,
    榛名改二,
    榛名改二乙,
    榛名改二丙,
    152, // 霧島改二
];
const BB_KongouClassRemodelAll = [
    ...BB_KongouClassRemodel,
    ...BB_KongouClass2ndRemodel,
];
const BB_IseClassRemodel = [
    82, // 伊勢改
    88, // 日向改
];
const BB_IseClass2ndRemodel = [
    553, // 伊勢改二
    554, // 日向改二
];
const BB_IseClassRemodelAll = BB_IseClassRemodel.concat(BB_IseClass2ndRemodel);
const BB_FusouClass2ndRemodel = [扶桑改二, 山城改二];
const BB_IseClassRemodel_PLUS_FusouClass2ndRemodel = BB_IseClassRemodel.concat(
    BB_FusouClass2ndRemodel,
);
const BB_YamatoClass2ndRemodel = [大和改二, 大和改二重, 武蔵改二];
const BB_NelsonClassRemodel = [
    576, // Nelson改
];

/*************************************************************************/

const CV_AkagiClassRemodel = [
    277, // 赤城改
];
const CV_AkagiClass2ndRemodel = [
    594, // 赤城改二
    599, // 赤城改二戊
];
const CV_AkagiClassRemodelAll = [
    ...CV_AkagiClassRemodel,
    ...CV_AkagiClass2ndRemodel,
];
const CV_KagaClassRemodel = [
    278, // 加賀改
];
const CV_KagaClass2ndRemodel = [
    698, // 加賀改二
    610, // 加賀改二戊
    646, // 加賀改二護
];
const CV_KagaClassRemodelAll = [
    ...CV_KagaClassRemodel,
    ...CV_KagaClass2ndRemodel,
];
const CV_ShoukakuClass2ndRemodel = [
    461, // 翔鶴改二
    466, // 翔鶴改二甲
    462, // 瑞鶴改二
    467, // 瑞鶴改二甲
];
const CVL_Houshou2ndRemodel = [鳳翔改二, 鳳翔改二戦];
const CVE_TaiyouClassRemodelAll = [
    大鷹改,
    大鷹改二,
    雲鷹改,
    雲鷹改二,
    神鷹改,
    神鷹改二,
];
const CVE = [
    大鷹,
    雲鷹,
    神鷹,
    鳳翔改二,
    鳳翔改二戦,
    560, // 瑞鳳改二乙
    龍鳳改二戊,
    龍鳳改二,
    GambierBay,
    GambierBay改,
    GambierBayMkII,
    Langley,
    Langley改,
    ...CVE_TaiyouClassRemodelAll,
];

/*************************************************************************/

const CAV_MogamiClassSuperRemodel = [
    最上改二,
    最上改二特,
    三隈改二,
    三隈改二特,
];

/*************************************************************************/

const CL_KumaClassRemodel = [
    216, // 多摩改
    217, // 木曽改
];
const CL_KumaClass2ndRemodel = [
    547, // 多摩改二
    146, // 木曽改二
];
const CL_KumaClassRemodelAll = CL_KumaClassRemodel.concat(
    CL_KumaClass2ndRemodel,
);
const CL_NagaraClass2ndRemodel = [
    488, // 由良改二
    487, // 鬼怒改二
];
const CL_AganoClass2ndRemodel = [能代改二, 矢矧改二, 矢矧改二乙];
const CL_YuubariClass2ndRemodel = [622, 623, 624];

/*************************************************************************/

const DD_Div7_Remodel = [
    230, // 朧改
    曙改,
    232, // 漣改
    潮改,
];
const DD_Div7_2ndRemodel = [曙改二, 潮改二];
const DD_FubukiClass2ndRemodel = [
    426, // 吹雪改二
    深雪改二,
    420, // 叢雲改二
    磯波改二,
    浦波改二,
];
const DD_AyanamiClassRemodel = [
    207, // 綾波改
    208, // 敷波改
    天霧改,
    391, // 狭霧改
    ...DD_Div7_Remodel,
];
const DD_AyanamiClass2ndRemodel = [
    195, // 綾波改二
    627, // 敷波改二
    天霧改二,
    天霧改二丁,
    ...DD_Div7_2ndRemodel,
];
const DD_AyanamiClassRemodelAll = DD_AyanamiClassRemodel.concat(
    DD_AyanamiClass2ndRemodel,
);
const DD_AkatsukiClassRemodel = [
    234, // 暁改
    235, // 響改
    236, // 雷改
    237, // 電改
];
const DD_AkatsukiClass2ndRemodel = [
    437, // 暁改二
    147, // Верный
];
const DD_AkatsukiClassRemodelAll = DD_AkatsukiClassRemodel.concat(
    DD_AkatsukiClass2ndRemodel,
);
const DD_HatsuharuClassRemodel = [
    238, // 初春改
    239, // 子日改
    240, // 若葉改
    241, // 初霜改
    703, // 有明改
];
const DD_HatsuharuClass2ndRemodel = [
    326, // 初春改二
    初霜改二,
];
const DD_HatsuharuClassRemodelAll = DD_HatsuharuClassRemodel.concat(
    DD_HatsuharuClass2ndRemodel,
);
const DD_ShiratsuyuClassRevised = [
    587, // 海風改二
    山風改二,
    山風改二丁,
    時雨改三,
];
const DD_ShiratsuyuClass2ndRemodel = [
    497, // 白露改二
    145, // 時雨改二
    498, // 村雨改二
    144, // 夕立改二
    ...DD_ShiratsuyuClassRevised,
    469, // 江風改二
];
const DD_AsashioClass2ndRemodel = [
    463, // 朝潮改二
    468, // 朝潮改二丁
    199, // 大潮改二
    489, // 満潮改二
    490, // 荒潮改二
    霰改二,
    464, // 霞改二
    470, // 霞改二乙
];
const DD_KagerouClassRemodel = [
    225, // 陽炎改
    226, // 不知火改
    227, // 黒潮改
    親潮改,
    早潮改,
    300, // 初風改
    228, // 雪風改
    天津風改,
    322, // 時津風改
    317, // 浦風改
    556, // 浦風丁改
    320, // 磯風改
    磯風乙改, // 磯風乙改
    312, // 浜風改
    浜風乙改,
    313, // 谷風改
    559, // 谷風丁改
    329, // 野分改
    354, // 嵐改
    355, // 萩風改
    294, // 舞風改
    秋雲改,
];
const DD_KagerouClass2ndRemodelExcludeAkigumo = [
    566, // 陽炎改二
    567, // 不知火改二
    568, // 黒潮改二
    親潮改二,
    早潮改二,
    丹陽,
    雪風改二,
    天津風改二,
];
const DD_KagerouClass2ndRemodel = [
    ...DD_KagerouClass2ndRemodelExcludeAkigumo,
    秋雲改二,
];
const DD_KagerouClassRemodelB = [磯風乙改, 浜風乙改];
const DD_KagerouClassRemodelAll = DD_KagerouClassRemodel.concat(
    DD_KagerouClass2ndRemodel,
);
const DD_YuugumoClass2ndRemodel = [
    542, // 夕雲改二
    563, // 巻雲改二
    564, // 風雲改二
    長波改二,
    高波改二,
    沖波改二,
    578, // 朝霜改二
    清霜改二,
    清霜改二丁,
];
const DD_ShimakazeRemodel = [
    229, // 島風改
];
const DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel =
    DD_YuugumoClass2ndRemodel.concat(DD_ShimakazeRemodel);

/*************************************************************************/

const rn_BB = [
    571,
    576, // Nelson
    439,
    364, // Warspite
];
const rn_CL = [...S.Sheffield];
const rn = [
    ...rn_BB,
    515,
    393, // Ark Royal
    ...rn_CL,
    519,
    394, // Jervis
    520, // Janus
    893, // Janus改
];
const ran = [];
const usn_BB = [
    601, // Colorado
    1496, // Colorado改
    440,
    360, // Iowa
    SouthDakota,
    SouthDakota改,
    ...S.Washington,
];
const usn_CV = [
    GambierBay,
    GambierBay改,
    GambierBayMkII,
    549,
    397, // Interpid
    433,
    438,
    545,
    550, // Saratoga
    Hornet,
    Hornet改,
];
const usn_DD = [
    561,
    681, // Samuel B.Roberts
    596, // Fletcher
    692, // Flechter改
    562,
    689, // Johston
];
const usn = [...usn_BB, ...usn_CV, ...usn_DD];
const vmf_DD = [
    516,
    395, // Ташкент
    147, // Верный
];
const vmf = [...vmf_DD];
const rocn_DD = [丹陽];

/*************************************************************************/

module.exports = {
    BB_NagatoClassRemodel,
    BB_NagatoClass2ndRemodel,
    BB_NagatoClassRemodelAll,
    BB_KongouClassRemodel,
    BB_KongouClass2ndRemodel,
    BB_KongouClassRemodelAll,
    BB_IseClassRemodel,
    BB_IseClass2ndRemodel,
    BB_IseClassRemodelAll,
    BB_FusouClass2ndRemodel,
    BB_IseClassRemodel_PLUS_FusouClass2ndRemodel,
    BB_YamatoClass2ndRemodel,
    BB_NelsonClassRemodel,

    CV_AkagiClassRemodel,
    CV_AkagiClass2ndRemodel,
    CV_AkagiClassRemodelAll,
    CV_KagaClassRemodel,
    CV_KagaClass2ndRemodel,
    CV_KagaClassRemodelAll,
    CV_ShoukakuClass2ndRemodel,
    CVL_Houshou2ndRemodel,
    CVE,
    CVE_TaiyouClassRemodelAll,

    CAV_MogamiClassSuperRemodel,

    CL_KumaClassRemodel,
    CL_KumaClass2ndRemodel,
    CL_KumaClassRemodelAll,
    CL_NagaraClass2ndRemodel,
    CL_AganoClass2ndRemodel,
    CL_YuubariClass2ndRemodel,
    Yahagi: S.Yahagi,
    Ooyodo: S.Ooyodo,
    Kashima: [鹿島, 鹿島改],

    DD_FubukiClass2ndRemodel,
    DD_AyanamiClassRemodel,
    DD_AyanamiClass2ndRemodel,
    DD_AyanamiClassRemodelAll,
    DD_Div7_Remodel,
    DD_Div7_2ndRemodel,
    DD_AkatsukiClassRemodel,
    DD_AkatsukiClass2ndRemodel,
    DD_AkatsukiClassRemodelAll,
    DD_HatsuharuClassRemodel,
    DD_HatsuharuClass2ndRemodel,
    DD_HatsuharuClassRemodelAll,
    DD_ShiratsuyuClass2ndRemodel,
    DD_ShiratsuyuClassRevised,
    DD_AsashioClass2ndRemodel,
    DD_KagerouClassRemodel,
    DD_KagerouClassRemodelB,
    DD_KagerouClass2ndRemodelExcludeAkigumo,
    DD_KagerouClass2ndRemodel,
    DD_KagerouClassRemodelAll,
    DD_YuugumoClass2ndRemodel,
    DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel,
    DD_ShimakazeRemodel,
    Kamikaze: S.Kamikaze,
    Harukaze: S.Harukaze,
    Ushio: [16, 233, 407],
    Hibiki: [35, 235, 147],
    Ikazuchi: [36, 236],
    Hatsushimo: [41, 241, 419],
    Shigure: S.Shigure,
    Yamakaze: S.Yamakaze,
    Yamagumo: [414, 328],
    Kasumi: [49, 253, 464, 470],
    Yukikaze: S.Yukikaze,
    Isokaze: [167, 320, 磯風乙改],
    Hamakaze: [170, 312, 558],
    Maikaze: S.Maikaze,
    Kishinami: [527, 686],
    Asashimo: S.Asashimo,
    Suzutsuki: [532, 537],

    //

    rn,
    rn_BB,
    ran,
    usn,
    usn_BB,
    usn_CV,
    usn_DD,
    vmf,
    vmf_DD,
    rocn_DD,
};
