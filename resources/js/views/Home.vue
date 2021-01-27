<template>
    <div id="home-view">
        <div class="img-banner-div analytics">
            <img idalt="banner" src="../images/parallex-min.jpg" height="1000" class="blurred-parallex">

        </div>

        <v-row
            align="center"
            justify="center"
            class="unblur-parallex-text"
        >
            <v-col class="text-center" cols="12">
                <h1 class="banner-name">
                    <div class="name">
                        Robbe Vaes
                    </div>
                </h1>
                <h4 class="subheading" >
                    I <vue-typer class="sub-title-typer" :text='toTypeText'  erase-style='backspace'   :erase-delay='80'></vue-typer>
                </h4>
            </v-col>
        </v-row>

        <div class="content-box">
            <div>
                <info-box-collection></info-box-collection>

            </div>


        </div>


        <div id="contact-me-title">Contact me</div>

        <div id="card-stack-div">

            <card-stack @showSocials="showSocials" class="card-stack"></card-stack>

        </div>



        <social-dialog :dialog="showDialog" @hideDialog="hideDialog"></social-dialog>

    </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import CardStack from '../components/CardStack/CardStack'
import SocialDialog from '../components/SocialDialog/SocialDialog'
import InfoBoxCollection from '../components/InfoBox/InfoBoxCollection'


    export default {
        data: function() {
            return {
                toTypeText: ['am a web developer.','am a team player!', 'think out of the box :)', 'am a laravel enthusiast!', 'am a cat dad?'],
                showDialog: false
            }
        },
        name: "Home",
        components: {
            VueTyper,
            CardStack,
            SocialDialog,
            InfoBoxCollection
        },

        methods: {
            showSocials: function(event) {
                document.getElementsByClassName('v-application--wrap')[0].classList.add('blurred-app');

                this.showDialog = true;
            },
            hideDialog: function() {

                document.getElementsByClassName('v-application--wrap')[0].classList.remove('blurred-app');

                this.showDialog = false;
            }
        },
        mounted: function() {
            window.gsap.from('.banner-name .name', {duration: 3, yPercent: 100, ease: "bounce", stagger: 0.1});
        }
    }
</script>

<style lang="scss">
    @import '~vuetify/src/styles/styles.sass';

.blurred-parallex {
    filter: blur(8px);
    -webkit-filter: blur(8px);
    border-radius: 50%;
    will-change: unset;
    width: 100%;

}

.unblur-parallex-text {
    position: absolute;
    top: 350px;
    z-index: 15;
    color:white;
}
.img-banner-div {
    border-bottom-left-radius:50%;
    border-bottom-right-radius:50%;
    margin: -200px -500px 0px -500px;
    box-shadow: none;


}

.content-box {
    border-radius: 50%;

    padding: 250px;
    margin: 200px -2000px;
    background-color:var(--v-accent-lighten4) !important;

}

.content-box > div {
    display:flex;
    justify-content: center;
    padding: 10px;
    flex:1;
    width: 100%;

}
.vue-typer .custom.char{
    color: white;
}
    .card-stack {
        height: 600px
    }
    #card-stack-div {
        height: 600px;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    .banner-name {
        font-size: 100px !important;
        color: white;
        font-family: "titleFont", Roboto, sans-serif !important;
        overflow:hidden !important;
        text-shadow: 0 1px 0 #ccc,
        0 2px 0 #c9c9c9,
        0 3px 0 #bbb,
        0 4px 0 #b9b9b9,
        0 5px 0 #aaa,
        0 6px 1px rgba(0,0,0,.1),
        0 0 5px rgba(0,0,0,.1),
        0 1px 3px rgba(0,0,0,.3),
        0 3px 5px rgba(0,0,0,.2),
        0 5px 10px rgba(0,0,0,.25),
        0 10px 10px rgba(0,0,0,.2),
        0 20px 20px rgba(0,0,0,.15);
        display: flex;
        justify-content: center;
    }
    #home-view {
        width: 100%;
    }

    #contact-me-title {
        margin: 60px 60px 60px 30px;
        color: var(--v-primary-base);
        font-size: 30px;
        font-family: "brushKing", Roboto, sans-serif;
        text-align: center;
    }
    .name {
        width: 100vw;
        text-align: center;
        font-size: 100px !important;
        overflow: hidden;

    }

    @media only screen and (max-width: 820px) {

    }


</style>
