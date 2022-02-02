let last = 0;

export const getUniqueClassName = (prefix?: string) => {
    last++;

    const parts: string[] = ["comet-mail-components"];
    if (prefix) parts.push(prefix);
    parts.push(last.toString());
    return parts.join("-");
};
