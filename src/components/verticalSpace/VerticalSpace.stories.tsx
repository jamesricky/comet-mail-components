import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { StoryRoot } from "../../helpers/StoryRoot";
import { OptionallyBreakpointDependant } from "../../theme/types";
import { VerticalSpace } from "./VerticalSpace";

const heightOptions: OptionallyBreakpointDependant<number>[] = [
    20,
    50,
    100,
    {
        sm: 10,
        md: 50,
        lg: 100,
    },
    {
        sm: 80,
        md: 150,
        lg: 200,
    },
];

const heightOptionsObject: {
    [key: string | number]: OptionallyBreakpointDependant<number>;
} = {};

heightOptions.forEach((val) => {
    const valueAsString = typeof val === "object" ? JSON.stringify(val, null, 1) : val;
    heightOptionsObject[valueAsString] = val;
});

export default {
    title: "Components/VerticalSpace",
    component: VerticalSpace,
    argTypes: {
        height: {
            control: { type: "radio" },
            options: heightOptionsObject,
            defaultValue: 20,
        },
    },
} as ComponentMeta<typeof VerticalSpace>;

export const Template: ComponentStory<typeof VerticalSpace> = (args) => (
    <StoryRoot>
        <div style={{ height: 20, backgroundColor: "coral", color: "white", padding: 5 }}>Above Space</div>
        <VerticalSpace {...args} />
        <div style={{ height: 20, backgroundColor: "coral", color: "white", padding: 5 }}>Below Space</div>
    </StoryRoot>
);
