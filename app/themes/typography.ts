import {
  LexendDeca_100Thin as LexendThin,
  LexendDeca_200ExtraLight as LexendExtraLight,
  LexendDeca_300Light as LexendLight,
  LexendDeca_400Regular as LexendRegular,
  LexendDeca_500Medium as LexendMedium,
  LexendDeca_600SemiBold as LexendSemiBold,
  LexendDeca_700Bold as LexendBold,
  LexendDeca_800ExtraBold as LexendExtraBold,
} from "@expo-google-fonts/lexend-deca";

export const customFontLoad = {
  LexendBold,
  LexendExtraBold,
  LexendExtraLight,
  LexendLight,
  LexendMedium,
  LexendRegular,
  LexendSemiBold,
  LexendThin,
};

const font = {
  lexendFont: {
    bold: "LexendBold",
    extraBold: "LexendExtraBold",
    extraLight: "LexendExtraLight",
    light: "LexendLight",
    medium: "LexendMedium",
    regular: "LexendRegular",
    semiBold: "LexendSemiBold",
    thin: "LexendThin",
  },
};

export const typography = {
  primary: font.lexendFont,
};
