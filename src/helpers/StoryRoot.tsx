import * as React from "react";

import { ThemeProvider } from "../components/themeProvider/ThemeProvider";
import { defaultTheme } from "../theme/defaultTheme";

export const StoryRoot: React.FC = ({ children }) => {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
