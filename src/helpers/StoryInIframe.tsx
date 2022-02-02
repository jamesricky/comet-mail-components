import * as React from "react";
import { renderToString } from "react-dom/server";

/**
 * This component's children will be rendered to an HTML-string, which "dehydrates" react to simulate server-side-rendered html that can be sent to an email-client.
 */
export const StoryInIframe: React.FC = ({ children }) => {
    const iframeRef = React.useRef<HTMLIFrameElement>(null);

    React.useEffect(() => {
        if (iframeRef && iframeRef.current && iframeRef.current.contentWindow) {
            iframeRef.current.contentWindow.document.write(renderToString(<>{children}</>));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <iframe style={{ width: "100vw", height: "100vh", border: "none" }} ref={iframeRef} src="about:blank" />;
};
