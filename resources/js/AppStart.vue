<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-app id="inspire">



        <v-main>
            <v-container
                class="fill-height"
                style="overflow: hidden"
                fluid
            >
                <router-view></router-view>
            </v-container>
        </v-main>

        <bottom-navigation></bottom-navigation>
    </v-app>
</template>

<script>
    import NavigationDrawer from "./layout/Navigation/NavigationDrawer";
    import CardStack from "./components/CardStack/CardStack";
    import BottomNavigation from "./layout/Navigation/BottomNavigation";

    export default {
        name: "AppStart",

        props: {
            source: String,
        },
        components: {
            NavigationDrawer,
            CardStack,
            BottomNavigation

        },
        data: () => ({
            drawer: null,
        }),
    }
</script>

<style lang="scss">

    @font-face {
        font-family: "akaDora";
        src: local("akaDora"),
        url(../fonts/fancy-text/akaDora.ttf) format("truetype");
    }

    @font-face {
        font-family: "titleFont";
        src: local("titleFont"),
        url(../fonts/fancy-text/TitleText.ttf) format("truetype");
    }

    @font-face {
        font-family: "brushKing";
        src: local("brushKing"),
        url(../fonts/fancy-text/brushKing.otf) format("truetype");
    }


    .blurred-app {
        filter: blur(5px);
    }

    #inspire {
        background-color:var(--v-secondary-base) !important;

    }
    .v-main {
        margin-bottom: 100px;
    }

</style>
