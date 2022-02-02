import * as React from "react";

import { defaultTheme } from "../../theme/defaultTheme";
import { ThemeContext } from "../../theme/ThemeContext";
import { Theme } from "../../theme/types";

export interface ThemeProviderProps {
    theme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
    return <ThemeContext.Provider value={theme ? theme : defaultTheme}>{children}</ThemeContext.Provider>;
};
