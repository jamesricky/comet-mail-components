import * as React from "react";

import { useTheme } from "../../theme/ThemeContext";
import { ThemeBreakpoints } from "../../theme/types";

export interface ExampleProps {
    foo?: "bar";
}

export const Example: React.FC<ExampleProps> = ({ foo }) => {
    const [a, setA] = React.useState<number>(0);
    const theme = useTheme();

    return (
        <>
            <h1>Example</h1>
            <code>
                THEME:
                {Object.keys(theme.breakpoints).map((k: keyof ThemeBreakpoints) => {
                    return (
                        <p key={k}>
                            {k}: {theme.breakpoints[k]}px <br />
                        </p>
                    );
                })}
            </code>
            <p>lorem ipsum - {foo ? "foo" : "bar"}</p>
            <button onClick={() => setA(a + 1)}>{a}++ (this should not work when rendered in an email, because SSR)</button>
        </>
    );
};
