import { createIconSetFromIcoMoon } from "@expo/vector-icons";

import icoMoonConfig from "../../../assets/icons/selection.json";

const CreativeScriptIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  "IcoMoon",
  "../../../assets/icons/icomoon.ttf",
);

export default CreativeScriptIcon;