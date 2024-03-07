// ============================================================================
//
// BB
//
// ============================================================================const BB_Ise = 2;
const BB_Ise = 2;
const BBV_Ise = 6;
const BBVR_Ise = 113;
const group_BB_Ise = [BB_Ise, BBV_Ise, BBVR_Ise];
const BB_Fusou = 4;
const BBV_Fusou = 11;
const group_BB_Fusou = [BB_Fusou, BBV_Fusou];
const BB_Yamato = 83;
const BC_Yamato = 153;
const BBV_Yamato = 154;
const group_BB_Yamato = [BB_Yamato, BC_Yamato, BBV_Yamato];
const BB_Bismarck = 7;
const BB_VittorioVeneto = 70;
const BB_ConteDiCavour = 148;
const BB_Colorado = 122;
const BB_Nevada = 163;
const BB_Iowa = 82;
const BB_SouthDakota = 134;
const BB_NorthCarolina = 141;
const BB_QueenElizabeth = 85;
const BB_Nelson = 115;
const BB_Richelieu = 100;
const BB_Gangut = 93;
const group_BC_Navy_USN = [BB_Iowa, BB_SouthDakota, BB_NorthCarolina];
const group_BB_exclude_BC_Navy_USN = [BB_Colorado, BB_Nevada];
const group_BB_Navy_USN = [
    ...group_BB_exclude_BC_Navy_USN,
    ...group_BC_Navy_USN,
];
const group_BB_Navy_RN = [BB_QueenElizabeth, BB_Nelson];
const group_BB_Navy_KM = [BB_Bismarck];
const group_BB_Navy_RM = [BB_VittorioVeneto, BB_ConteDiCavour];
const group_BB_Navy_MN = [BB_Richelieu];

// ============================================================================
//
// CV
//
// ============================================================================
const CV_Kaga = 27;
const CV_KagaRevised = 137;
const CVB_Lexington = 105;
const CVB_Illustrious = 149;
const CV_Lexington = 87;
const CV_Essex = 110;
const CV_Ranger = 157;
const CV_Yorktown = 135;
const CV_ArkRoyal = 101;
const CV_GrafZeppelin = 80;
const CV_Aquila = 91;
const CV_Casablanca = 106;
const CV_Independence = 156;
const group_CV_Navy_KM = [CV_GrafZeppelin];
const group_CV_Navy_RM = [CV_Aquila];
const group_CV_Navy_USN = [
    CVB_Lexington,
    CV_Lexington,
    CV_Essex,
    CV_Ranger,
    CV_Yorktown,
    CV_Casablanca,
    CV_Independence,
];
const group_CV_Navy_RN = [CVB_Illustrious, CV_ArkRoyal];

const CVL_Houshou = 33;
const CVL_HoushouRevised = 158;
const CVL_Ryuujou = 34;
const CVL_Ryuuhou = 35;
const CVL_RyuuhouRevised = 145;
const CVL_Shouhou = 36;
const CVL_Hiyou = 37;
const CVL_Chitose = 38;

// ============================================================================
//
// CA
//
// ============================================================================
const CAV_Mogami = 45;
const CAV_MogamiRevised = 90;
const CAV_MogamiSuper = 144;
const CAV_Tone = 46;
const group_CAV_Navy_IJN = [
    CAV_Mogami,
    CAV_MogamiRevised,
    CAV_MogamiSuper,
    CAV_Tone,
];
const CA_Furutaka = 39;
const CA_Aoba = 40;
const CA_Myoukou = 41;
const CA_Takao = 42;
const CA_Northampton = 124;
const CA_NewOrleans = 160;
const CA_Mogami = 43;
const CA_Tone = 44;
const CA_AdmiralHipper = 57;
const group_CA_Navy_IJN = [
    CA_Furutaka,
    CA_Aoba,
    CA_Mogami,
    CA_Myoukou,
    CA_Takao,
    CA_Tone,
];
const CA_Zara = 81;
const group_CA_Navy_USN = [CA_Northampton, CA_NewOrleans];
const group_CA_Navy_KM = [CA_AdmiralHipper];
const group_CA_Navy_RM = [CA_Zara];

// ============================================================================
//
// CL
//
// ============================================================================
// 重雷装巡洋艦
const CLT_Kuma = 54;
// 軽航空巡洋艦
const CLV_Gotland = 116;
// 兵装実験軽巡洋艦
const CL_Yuubari2 = 129;
// 防空巡洋艦
const CL_Atlanta = 128;
// 軽巡洋艦
const CL_Tenryuu = 47;
const CL_Kuma = 48;
const CL_KumaRevised = 142;
const CL_Nagara = 49;
const CL_Sendai = 50;
const CL_Yuubari = 51;
const CL_Agano = 52;
const CL_AganoRevised = 143;
const CL_Ooyodo = 53;
const CL_Gotland = 114;
const CL_Abruzzi = 120;
const CL_DeRuyter = 127;
const CL_Perth = 125;
const CL_Brooklyn = 147;
const CL_StLouis = 136;
const CL_Town = 140;
// 練習巡洋艦
const CT_Katori = 55;
// GROUPS
const group_CL_Navy_IJN = [
    CL_Tenryuu,
    CL_Kuma,
    CL_KumaRevised,
    CL_Nagara,
    CL_Sendai,
    CL_Yuubari,
    CL_Agano,
    CL_AganoRevised,
    CL_Ooyodo,
];
const group_CL_Navy_RN = [CL_Town];
const group_CL_Navy_RM = [CL_Abruzzi];
const group_CL_Navy_RNLN = [CL_DeRuyter];
const group_CL_Navy_RAN = [CL_Perth];
const group_CL_Navy_USN = [CL_Atlanta, CL_Brooklyn, CL_StLouis];
const group_CL_S_Navy_IJN = [
    CLT_Kuma,
    CL_Yuubari2,
    ...group_CL_Navy_IJN,
    CT_Katori,
];

// ============================================================================
//
// DD
//
// ============================================================================
const DD_Kamikaze = 84;
const DD_Mutsuki = 12;
const DD_Fubuki = 15;
const DD_Ayanami = 16;
const DD_Akatsuki = 17;
const DD_Hatsuharu = 18;
const DD_Shiratsuyu = 19;
const DD_ShiratsuyuRevised = 150;
const DD_Asashio = 20;
const DD_Kagerou = 21;
const DD_KagerouROCN = 138;
const DD_Kagerou2 = 139;
const DD_Yuugumo = 22;
const DD_Shimakaze = 24;
const DD_Akizuki = 23;
const DD_Matsu = 131;
const DD_1934 = 25;
const DD_Maestrale = 78;
const DD_JohnCButler = 112;
const DD_Fletcher = 117;
const DD_J = 107;
// GROUPS
const group_DD_Navy_IJN = [
    DD_Kamikaze,
    DD_Mutsuki,
    DD_Fubuki,
    DD_Ayanami,
    DD_Akatsuki,
    DD_Hatsuharu,
    DD_Shiratsuyu,
    DD_ShiratsuyuRevised,
    DD_Asashio,
    DD_Kagerou,
    DD_Kagerou2,
    DD_Yuugumo,
    DD_Akizuki,
    DD_Shimakaze,
    DD_Matsu,
];
const group_DD_Navy_USN = [DD_JohnCButler, DD_Fletcher];
const group_DD_Navy_RN = [DD_J];
const group_DD_Navy_RM = [DD_Maestrale];
const group_DD_Navy_KM = [DD_1934];

// ============================================================================
//
// DE
//
// ============================================================================
const DE_Mikura = 123;

// ============================================================================
//
// SS
//
// ============================================================================
const SS_Gato = 151;
const SS_Salmon = 164;
const group_SS_Navy_USN = [SS_Gato, SS_Salmon];

// ============================================================================
//
// Aux
//
// ============================================================================
const Aux_LHA_特種船丙型 = 56;
const Aux_AO_特2TL型 = 152;
const Aux_AV_CTeste = 86;
const Aux_AV_MogamiSuper = 168;
const group_Aux_Navy_MN = [Aux_AV_CTeste];

module.exports = {
    // ========================================================================
    BB_Ise,
    BBV_Ise,
    BBVR_Ise,
    group_BB_Ise,
    BB_Fusou,
    BBV_Fusou,
    group_BB_Fusou,
    BB_Nagato: 10,
    BB_Yamato,
    BC_Yamato,
    BBV_Yamato,
    group_BB_Yamato,
    BB_Kongou: 9,
    BB_Kongou2: 119,
    BB_Bismarck,
    BB_VittorioVeneto,
    BB_ConteDiCavour,
    BB_Colorado,
    BB_Nevada,
    BB_Iowa,
    BB_SouthDakota,
    BB_NorthCarolina,
    BB_QueenElizabeth,
    BB_Nelson,
    BB_Richelieu,
    BB_Gangut,
    group_BC_Navy_USN,
    group_BB_exclude_BC_Navy_USN,
    group_BB_Navy_USN,
    group_BB_Navy_RN,
    group_BB_Navy_KM,
    group_BB_Navy_RM,
    group_BB_Navy_MN,

    // ========================================================================
    CV_Kaga,
    CV_KagaRevised,
    CV_Lexington,
    CVB_Lexington,
    CVB_Illustrious,
    CV_Essex,
    CV_Ranger,
    CV_Yorktown,
    CV_ArkRoyal,
    CV_GrafZeppelin,
    CV_Aquila,
    group_CV_Navy_KM,
    group_CV_Navy_RM,
    group_CV_Navy_USN,
    group_CV_Navy_RN,

    CV_Houshou: 33,
    CV_Kagasumaru: 95,
    CV_Taiyou_SP: 96,
    CV_Taiyou: 97,
    CV_Casablanca,
    CV_Independence,

    CVL_Houshou,
    CVL_HoushouRevised,
    CVL_Ryuujou,
    CVL_Ryuuhou,
    CVL_RyuuhouRevised,
    CVL_Shouhou,
    CVL_Hiyou,
    CVL_Chitose,

    // ========================================================================
    CAV_Mogami,
    CAV_MogamiRevised,
    CAV_MogamiSuper,
    CAV_Tone,
    group_CAV_Navy_IJN,
    CA_Furutaka,
    CA_Aoba,
    CA_Myoukou,
    CA_Takao,
    CA_Mogami,
    CA_Tone,
    CA_AdmiralHipper,
    CA_Northampton,
    CA_NewOrleans,
    CA_Zara,
    group_CA_Navy_IJN,
    group_CA_Navy_USN,
    group_CA_Navy_KM,
    group_CA_Navy_RM,

    // ========================================================================
    // 重雷装巡洋艦
    CLT_Kuma,
    // 軽航空巡洋艦
    CLV_Gotland,
    // 兵装実験軽巡洋艦
    CL_Yuubari2,
    // 防空巡洋艦
    CL_Atlanta,
    // 軽巡洋艦
    CL_Tenryuu,
    CL_Kuma,
    CL_KumaRevised,
    CL_Nagara,
    CL_Sendai,
    CL_Yuubari,
    CL_Agano,
    CL_AganoRevised,
    CL_Ooyodo,
    CL_Gotland,
    CL_Abruzzi,
    CL_DeRuyter,
    CL_Perth,
    CL_Brooklyn,
    CL_StLouis,
    // 練習巡洋艦
    CT_Katori,
    // GROUPS
    group_CL_Navy_IJN,
    group_CL_Navy_RNLN,
    group_CL_Navy_RAN,
    group_CL_Navy_USN,
    group_CL_Navy_RN,
    group_CL_Navy_RM,
    group_CL_S_Navy_IJN,

    // ========================================================================
    DD_Kamikaze,
    DD_Mutsuki,
    DD_Special: [DD_Fubuki, DD_Ayanami, DD_Akatsuki],
    DD_Tokugata: [DD_Fubuki, DD_Ayanami, DD_Akatsuki],
    DD_Fubuki,
    DD_Ayanami,
    DD_Akatsuki,
    DD_Hatsuharu,
    DD_Shiratsuyu,
    DD_ShiratsuyuRevised,
    DD_Asashio,
    DD_Kagerou,
    DD_KagerouROCN,
    DD_Kagerou2,
    DD_Yuugumo,
    DD_Akizuki,
    DD_Shimakaze,
    DD_1934,
    DD_Matsu,
    DD_Maestrale,
    DD_J,
    DD_JohnCButler,
    DD_Fletcher,
    group_DD_Tokugata: [DD_Fubuki, DD_Ayanami, DD_Akatsuki],
    group_DD_Navy_IJN,
    group_DD_Navy_USN,
    group_DD_Navy_RN,
    group_DD_Navy_RM,
    group_DD_Navy_KM,

    // ========================================================================
    DE_Mikura,

    // ========================================================================
    AV_Nisshin: 118,
    AV_CommandantTeste: 86,
    AV_Mizuho: 77,
    AO_Kamoi: 98,
    AV_Kamoi: 99,

    // ========================================================================
    SS_Gato,
    SS_Salmon,
    group_SS_Navy_USN,

    // ========================================================================
    Aux_LHA_特種船丙型,
    Aux_AO_特2TL型,
    Aux_AV_CTeste,
    Aux_AV_MogamiSuper,
    group_Aux_Navy_MN,

    // ========================================================================
    group_Navy_USN: [
        ...group_BB_Navy_USN,
        ...group_CV_Navy_USN,
        ...group_CA_Navy_USN,
        ...group_CL_Navy_USN,
        ...group_DD_Navy_USN,
        ...group_SS_Navy_USN,
    ],
    group_Navy_KM: [
        ...group_BB_Navy_KM,
        ...group_CV_Navy_KM,
        ...group_CA_Navy_KM,
        ...group_DD_Navy_KM,
    ],
    group_Navy_RN: [
        ...group_BB_Navy_RN,
        ...group_CV_Navy_RN,
        ...group_CL_Navy_RN,
        ...group_DD_Navy_RN,
    ],
    group_Navy_RM: [
        ...group_BB_Navy_RM,
        ...group_CV_Navy_RM,
        ...group_CA_Navy_RM,
        ...group_CL_Navy_RM,
        ...group_DD_Navy_RM,
    ],
    group_Navy_RNLN: [...group_CL_Navy_RNLN],
    group_Navy_RAN: [...group_CL_Navy_RAN],
    group_Navy_MN: [...group_BB_Navy_MN, ...group_Aux_Navy_MN], // 法国
};
