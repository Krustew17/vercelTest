import routePrefixes from "./routePrefixes";

const apiEndpoints = {
    auth: {
        refreshToken: {
            url: `${routePrefixes.auth}/refresh-token`,
            method: "POST",
        },
    },
};

export default apiEndpoints;
