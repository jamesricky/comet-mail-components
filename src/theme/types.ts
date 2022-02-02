export interface ThemeBreakpoints {
    sm: number;
    md: number;
    lg: number;
}

export type ThemeDefaultBreakpoint = keyof ThemeBreakpoints;

export interface Theme {
    breakpoints: ThemeBreakpoints;
    defaultBreakpoint: ThemeDefaultBreakpoint;
}

export type BreakpointDependant<T> = {
    [key in keyof ThemeBreakpoints]: T;
};

export type OptionallyBreakpointDependant<T> = T | BreakpointDependant<T>;
