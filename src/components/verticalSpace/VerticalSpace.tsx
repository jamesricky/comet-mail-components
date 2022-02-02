import * as React from "react";

import { getUniqueClassName } from "../../helpers/getUniqueClassName";
import { useTheme } from "../../theme/ThemeContext";
import { OptionallyBreakpointDependant, ThemeBreakpoints } from "../../theme/types";

export type VerticalSpaceProps = {
    height: OptionallyBreakpointDependant<number>;
};

export const VerticalSpace = ({ height: heightProp }: VerticalSpaceProps): React.ReactElement => {
    const theme = useTheme();
    const defaultHeight = typeof heightProp === "number" ? heightProp : heightProp[theme.defaultBreakpoint];

    const tdClass = getUniqueClassName();

    return (
        <>
            <style type="text/css">
                {typeof heightProp !== "number" &&
                    Object.keys(theme.breakpoints)
                        .reverse()
                        .map((breakpointKey: keyof ThemeBreakpoints) => {
                            const breakpointValue = theme.breakpoints[breakpointKey];
                            const isBeforeDefaultBreakpoint = breakpointValue < theme.breakpoints[theme.defaultBreakpoint];
                            const isAfterDefaultBreakpoint = breakpointValue > theme.breakpoints[theme.defaultBreakpoint];

                            if (isBeforeDefaultBreakpoint) {
                                return `
                                    @media (max-width: ${breakpointValue}px) {
                                        .${tdClass} {
                                            height: ${heightProp[breakpointKey]}px;
                                            font-size: ${heightProp[breakpointKey]}px !important;
                                            line-height: ${heightProp[breakpointKey]}px !important;
                                        }
                                    }
                                `;
                            } else if (isAfterDefaultBreakpoint) {
                                return `
                                    @media (min-width: ${breakpointValue}px) {
                                        .${tdClass} {
                                            height: ${heightProp[breakpointKey]}px;
                                            font-size: ${heightProp[breakpointKey]}px !important;
                                            line-height: ${heightProp[breakpointKey]}px !important;
                                        }
                                    }
                                `;
                            }
                        })}
            </style>
            <table width="100%" cellPadding="0" cellSpacing="0">
                <tr>
                    <td className={tdClass} height={defaultHeight} style={{ fontSize: `${defaultHeight}px`, lineHeight: `${defaultHeight}px` }}>
                        &nbsp;
                    </td>
                </tr>
            </table>
        </>
    );
};
