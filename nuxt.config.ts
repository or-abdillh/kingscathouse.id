// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/google-fonts",
        "nuxt-simple-robots",
        "@nuxt/image"
    ],
    googleFonts: {
        families: {
            Raleway: [400, 500, 600, 700],
            Nunito: [300, 400, 500]
        },
        useStylesheet: true
    },
    site: {
        url: "https://example.com"
    },
    app: {
        head: {
            script: [
                { src: "https://kit.fontawesome.com/b026c11a83.js", crossorigin: "anonymous" }
            ]
        }
    }
})
