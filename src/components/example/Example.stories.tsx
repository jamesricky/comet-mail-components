import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { StoryRoot } from "../../helpers/StoryRoot";
import { Example } from "./Example";

export default {
    title: "Components/Example",
    component: Example,
    argTypes: {
        foo: {
            control: { type: "boolean" },
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Example>;

export const Template: ComponentStory<typeof Example> = (args) => (
    <StoryRoot>
        <Example {...args} />
    </StoryRoot>
);
