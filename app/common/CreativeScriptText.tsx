import React from "react";
import {
  StyleProp,
  Text as CreativeScript,
  TextStyle,
  TextProps as CreativeScriptProps,
} from "react-native";
import { typography } from "../themes/typography";
import colors from "../themes/colors";

type Sizes = keyof typeof sizeStyles;
type Weights = keyof typeof typography.primary;
type Presets = keyof typeof presets;

export interface TextProps extends CreativeScriptProps {
  text?: string;
  style?: StyleProp<TextStyle>;
  preset?: Presets;
  weight?: Weights;
  size?: Sizes;
  children?: React.ReactNode;
}

const Text = (props: TextProps) => {
  const {
    weight,
    size,
    text,
    children,
    style: $styleOverride,
    ...rest
  } = props;
  const content = text || children;
  const preset: Presets = props.preset ?? "default";
  const styles: StyleProp<TextStyle> = [
    presets[preset],
    weight && fontWeightStyles[weight],
    size && sizeStyles[size],
    $styleOverride,
  ];
  return (
    <CreativeScript {...rest} style={styles}>
      {content}
    </CreativeScript>
  );
};

const sizeStyles = {
  xl: { fontSize: 24, lineHeight: 34, fontWeight: "600" } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
};

const fontWeightStyles = Object.entries(typography.primary).reduce(
  (acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } };
  },
  {}
) as Record<Weights, TextStyle>;

const baseStyle: StyleProp<TextStyle> = [
  sizeStyles.sm,
  fontWeightStyles.thin,
  { color: colors.text },
];

const presets = {
  default: baseStyle,

  bold: [baseStyle, fontWeightStyles.bold] as StyleProp<TextStyle>,

  heading: [
    baseStyle,
    sizeStyles.xl,
    fontWeightStyles.bold,
  ] as StyleProp<TextStyle>,

  subheading: [
    baseStyle,
    sizeStyles.lg,
    fontWeightStyles.medium,
  ] as StyleProp<TextStyle>,

  formLabel: [baseStyle, fontWeightStyles.medium] as StyleProp<TextStyle>,

  formHelper: [
    baseStyle,
    sizeStyles.sm,
    fontWeightStyles.thin,
  ] as StyleProp<TextStyle>,

  medium: [
    baseStyle,
    sizeStyles.md,
    fontWeightStyles.medium
  ]
};

export default Text;
