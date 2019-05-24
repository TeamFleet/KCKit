const BB_Ise = 2;
const BBV_Ise = 6;
const BBVR_Ise = 113;
const group_BB_Ise = [BB_Ise, BBV_Ise, BBVR_Ise];
const BB_Fusou = 4;
const BBV_Fusou = 11;
const group_BB_Fusou = [BB_Fusou, BBV_Fusou];
const BB_Iowa = 82;
const BB_QueenElizabeth = 85;
const BB_Nelson = 115;

const CVB_Lexington = 105;
const CV_Lexington = 87;
const CV_Essex = 110;
const CV_ArkRoyal = 101;
const CV_GrafZeppelin = 80;
const CV_Aquila = 91;
const group_CV_Navy_KM = [CV_GrafZeppelin];
const group_CV_Navy_RM = [CV_Aquila];

const CL_Abruzzi = 120;
const group_CL_Navy_RM = [CL_Abruzzi];

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
    BB_Iowa,
    BB_QueenElizabeth,
    BB_Nelson,

    CV_Lexington,
    CVB_Lexington,
    CV_Essex,
    CV_ArkRoyal,
    CV_GrafZeppelin,
    CV_Aquila,
    group_CV_Navy_KM,
    group_CV_Navy_RM,

    CA_Furutaka: 39,
    CA_Aoba: 40,

    CL_Kuma: 48,
    CL_Nagara: 49,
    CL_Sendai: 50,
    CL_Yuubari: 51,
    CL_Agano: 52,
    CL_Gotland: 114,
    CL_Abruzzi,
    CLT_Kuma: 54,
    CLV_Gotland: 116,
    CT_Katori: 55,

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
        BB_Iowa,
        CV_Lexington,
        CVB_Lexington,
        CV_Essex,
        ...group_DD_Navy_USN
    ],
    group_Navy_KM: [...group_CV_Navy_KM],
    group_Navy_RN: [BB_QueenElizabeth, BB_Nelson, CV_ArkRoyal, DD_J],
    group_Navy_RM: [...group_CV_Navy_RM, ...group_CL_Navy_RM]
};
