import vuetify from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true, // enable server side randering
    css: ["@/assets/scss/style.scss"], // import vuetify css
    // build vuetify
    build: {
        transpile: ["vuetify"]
    },
    // config vite with vuetify
    vite:{
        ssr: {
            noExternal:["vuetify"],
        },
        define:{
            "process.env.DEBUG": false,
        }
    },
        // config vuetify
        modules: [
            "nuxt-icon",
            [
                "@nuxtjs/robots",
                {
                    UserAgent:"*",
                    Disallow:"/",
                }
            ],
            async (options, nuxt) => {
                // @ts-ignore
                nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()))
            }
        ],
        // app config
        app:{
            head:{
                htmlAttrs:{
                    lang:"en",
                },
                bodyAttrs:{
                    class:"demo",
                },
                charset:"utf-8",
                titleTemplate: '%s - Nuxt3 Vuetify',
                link:[
                    {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@200;300;400;500;600;700&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap",
                    },
                    {
                        rel: "icon", 
                        type: "image/x-icon", 
                        href: "/favicon.ico"
                    }
                ],
                meta:[
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1, maximum-scale=5'
                    },
                    {
                        name: 'author',
                        content: "IT Genius Engineering Ltd., Thailand"
                    },         
                ]
            }
        }
})
