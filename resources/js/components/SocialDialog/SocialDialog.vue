
<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="60%" content-class="no-shadow">
            <v-card class="match-dialog">
                <v-card-title class="headline" id="match-font">
                    It's a match!

                </v-card-title>

                <v-card-text>
                        <div id="avatar-flexbox">

                            <v-avatar size="200px" >
                                <img
                                    :src="selectedImage"
                                    alt="Robbe"
                                    class="tinder-match-image"
                                >
                            </v-avatar>
                            <v-avatar size="200px" class="you-match">
                                <img
                                    src="images/you.png"
                                    alt="You"
                                    class="tinder-match-image"
                                    style="background: white"
                                >
                            </v-avatar>
                        </div>
                        <social-collection></social-collection>
                </v-card-text>
                <v-btn id="close-dialog" @click="hideDialog" fab dark small color="primary">
                    <i class="fa fa-times fa-2x"></i>
                </v-btn>

            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import SocialCollection from './SocialCollection';


    export default {
        components: {SocialCollection},
        props: {
            dialog: Boolean
        },
        methods: {
            hideDialog: function() {
                this.$emit('hideDialog')

            }
        },
        computed: {
            selectedImage () {
                return this.$store.state.currentImage.currentImage;
            },
        },

        created: function () {
        },


    }

</script>

<style>
    body {
        background-color: #444;
        margin: 0;
    }
    .card {
        justify-content: center;
        position: absolute;
    }

    .match-dialog {
        background-color: transparent !important;
        height: 60vh;
        box-shadow: none !important;
    }
    .v-application--wrap {
    }

    #avatar-flexbox {
        display:flex;
        flex: 2;
        justify-content: center;
        align-content: center;

    }

    #match-font {
        display:flex;
        flex: 1;
        justify-content:center;
        font-family: "akaDora", Roboto, sans-serif !important;
        font-size: 100px !important;
        color: white;
        margin-top: 30px
    }

    .v-avatar {
        margin: 50px;
    }

    .no-shadow {
        box-shadow: none !important;
    }

    #close-dialog {
        position: absolute;
        top: 20px;
        right: 20px;
        font-family: Roboto, sans-serif !important;
    }

    .tinder-match-image {
        object-fit: cover;
    }


    #social-contact {
        display:flex;
        justify-content: center;
        align-items: center;

        flex-direction: column;
        text-align: center;

    }

    #social-contact > a{
        margin-top: 20px;
        width: 180px;
        text-align: center;
    }

    @media only screen and (max-width: 820px) {
        #match-font {
            font-size: 30px !important;

        }
        #close-dialog {
            position: absolute;
            bottom: 0;
            right: calc(50% - 20px);
            font-family: Roboto, sans-serif !important;
        }
        .match-dialog {
            background-color: white !important;
        }
        #avatar-flexbox {
            display:flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
        }
        .v-avatar {
            width: 80px !important;
            height: 80px !important;
            margin: 50px 0px 0px 0px;

        }
        .you-match {
            display: none !important;
        }
    }
</style>
