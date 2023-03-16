module.exports = {
    compiler: {
        // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
        styledComponents: {
            ssr: true,
            displayName: true,
            cssProp: true
        }
    },
    experimental: {
        fontLoaders: [
            { loader: '@next/font/google', options: { subsets: ['cyrillic'] } },
        ],
    },
    env: {
        SERVER_URL: process.env.SERVER_URL
    }
}