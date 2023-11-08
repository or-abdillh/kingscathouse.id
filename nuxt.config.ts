// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-simple-robots"],
    googleFonts: {
        families: {
            Raleway: true,
            Nunito: true
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
