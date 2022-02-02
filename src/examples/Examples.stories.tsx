import * as React from "react";

import { Example } from "../components/example/Example";
import { StoryInIframe } from "../helpers/StoryInIframe";
import { StoryRoot } from "../helpers/StoryRoot";

export default {
    title: "Examples/Complete Mail",
    parameters: {
        previewTabs: {
            "storybook/docs/panel": {
                hidden: true,
            },
        },
        layout: "fullscreen",
    },
};

export const ExampleMailOne = () => {
    return (
        <StoryInIframe>
            <StoryRoot>
                <html>
                    <head>
                        <title>Example title</title>
                    </head>
                    <body>
                        <h1>Example Mail</h1>
                        <hr />
                        <Example />
                        <hr />
                        <Example foo="bar" />
                    </body>
                </html>
            </StoryRoot>
        </StoryInIframe>
    );
};
