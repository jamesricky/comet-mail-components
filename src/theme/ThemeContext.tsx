import * as React from "react";

import { defaultTheme } from "./defaultTheme";
import { Theme } from "./types";

export const ThemeContext = React.createContext<Theme>(defaultTheme);

export const useTheme = (): Theme => {
    return React.useContext(ThemeContext);
};
