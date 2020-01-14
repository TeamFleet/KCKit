const BB_Ise = 2;
const BBV_Ise = 6;
const BBVR_Ise = 113;
const group_BB_Ise = [BB_Ise, BBV_Ise, BBVR_Ise];
const BB_Fusou = 4;
const BBV_Fusou = 11;
const group_BB_Fusou = [BB_Fusou, BBV_Fusou];
const BB_Colorado = 122;
const BB_Iowa = 82;
const BB_QueenElizabeth = 85;
const BB_Nelson = 115;
const group_BB_Navy_USN = [BB_Colorado, BB_Iowa];
const group_BB_Navy_RN = [BB_QueenElizabeth, BB_Nelson];

const CVB_Lexington = 105;
const CV_Lexington = 87;
const CV_Essex = 110;
const CV_ArkRoyal = 101;
const CV_GrafZeppelin = 80;
const CV_Aquila = 91;
const CV_Casablanca = 106;
const group_CV_Navy_KM = [CV_GrafZeppelin];
const group_CV_Navy_RM = [CV_Aquila];
const group_CV_Navy_USN = [
    CVB_Lexington,
    CV_Lexington,
    CV_Essex,
    CV_Casablanca
];
const group_CV_Navy_RN = [CV_ArkRoyal];

const CA_Houston = 124;
const group_CA_Navy_USN = [CA_Houston];

const CL_Abruzzi = 120;
const CL_DeRuyter = 127;
const CL_Perth = 125;
const CL_Atlanta = 128;
const group_CL_Navy_RM = [CL_Abruzzi];
const group_CL_Navy_RNLN = [CL_DeRuyter];
const group_CL_Navy_RAN = [CL_Perth];
const group_CL_Navy_USN = [CL_Atlanta];

const DD_JohnCButler = 112;
const DD_Fletcher = 117;
const DD_J = 107;
const group_DD_Navy_USN = [DD_JohnCButler, DD_Fletcher];

module.exports = {
    BB_Ise,
    BBV_Ise,
    BBVR_Ise,
    group_BB_Ise,
    BB_Fusou,
    BBV_Fusou,
    group_BB_Fusou,
    BB_Colorado,
    BB_Iowa,
    BB_QueenElizabeth,
    BB_Nelson,
    group_BB_Navy_USN,
    group_BB_Navy_RN,

    CV_Lexington,
    CVB_Lexington,
    CV_Essex,
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

    CAV_Mogami: 45,
    CAV_MogamiRevised: 90,
    CA_Furutaka: 39,
    CA_Aoba: 40,
    CA_Mogami: 43,
    CA_Houston,
    group_CA_Navy_USN,

    CL_Tenryuu: 47,
    CL_Kuma: 48,
    CL_Nagara: 49,
    CL_Sendai: 50,
    CL_Yuubari: 51,
    CL_Yuubari2: 129,
    CL_Agano: 52,
    CL_Ooyodo: 53,
    CL_Gotland: 114,
    CL_Abruzzi,
    CL_DeRuyter,
    CL_Perth,
    CL_Atlanta,
    CLT_Kuma: 54,
    CLV_Gotland: 116,
    CT_Katori: 55,
    group_CL_Navy_USN,

    DD_Kamikaze: 84,
    DD_Special: [15, 16, 17],
    DD_Tokugata: [15, 16, 17],
    DD_Fubuki: 15,
    DD_Ayanami: 16,
    DD_Akatsuki: 17,
    DD_Hatsuharu: 18,
    DD_Shiratsuyu: 19,
    DD_Shimakaze: 24,
    DD_Akizuki: 23,
    DD_J,
    DD_JohnCButler,
    DD_Fletcher,
    group_DD_Tokugata: [15, 16, 17],
    group_DD_Navy_USN,

    AV_Nisshin: 118,

    group_Navy_USN: [
        ...group_BB_Navy_USN,
        ...group_CV_Navy_USN,
        ...group_CA_Navy_USN,
        ...group_CL_Navy_USN,
        ...group_DD_Navy_USN
    ],
    group_Navy_KM: [...group_CV_Navy_KM],
    group_Navy_RN: [...group_BB_Navy_RN, ...group_CV_Navy_RN, DD_J],
    group_Navy_RM: [...group_CV_Navy_RM, ...group_CL_Navy_RM],
    group_Navy_RNLN: [...group_CL_Navy_RNLN],
    group_Navy_RAN: [...group_CL_Navy_RAN]
};
