<template>
    <div class="InfoBox">
        <v-sheet
            color="white"
            elevation="3"
            class="info-image"
            :style="imageStyles"
            v-if="direction === 'left'"
        >

        <v-img
            :src="image"
            class="info-img"
        >


        </v-img>
        </v-sheet>
        <v-sheet
            color="white"
            elevation="3"
            class="info-text"
            :style="textStyles"
        >
            <div class="info-title">
                {{ title}}

            </div>
            <div class="info-description" v-html="description">

            </div>
        </v-sheet>

        <v-sheet
            color="white"
            elevation="3"
            class="info-image"
            :style="imageStyles"
            v-if="direction === 'right'"
        >

            <v-img
                :src="image"
                class="info-img"
            >


            </v-img>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        props: {
            direction: String,
            textWidth: Number,
            title: String,
            image: String,
            description: String,
            id: String

        },
        computed: {
            imageWidth() {
                return 100 - this.textWidth;
            },
            textStyles() {
                let margin = '0px';
                let border = 'border-left';

                if(this.direction === 'right') {
                    margin = '30px';
                    border = 'border-right'
                }
                return {
                    [border]: '20px solid var(--v-success-base)',
                    'margin-right': margin,
                    width: `${this.textWidth}%`
                };
            },
            imageStyles() {
                let margin = '0px';
                if(this.direction === 'left') {
                    margin = '30px';
                }
                return {
                    'margin-right': margin,
                    width: `${this.imageWidth}%`
                };
            },

        },
        methods: {
            setupLoadInAnimation(element, x) {
                window.gsap.from(element, { scrollTrigger: {
                        trigger: element,
                        start:'top center'
                    },
                    opacity: 0, x: x, duration: 1});

            }
        },
        mounted() {
            let infoText = this.$el.querySelector('.info-text');
            let infoImage = this.$el.querySelector('.info-image');

            if(this.direction === 'right') {
                this.setupLoadInAnimation(infoText, -200);
                this.setupLoadInAnimation(infoImage, 200);
            }
            else {
                this.setupLoadInAnimation(infoText, 200);
                this.setupLoadInAnimation(infoImage, -200);
            }

        }
    }
</script>

<style lang="scss">
    .InfoBox {
        display: flex;
        width: 100%;
        min-height: 400px;
        margin: 30px;
        padding-right: 60px;
    }
    .info-text{
        height: 400px;
        padding-right: 30px;
        overflow: auto;
        z-index: 50;
    }

    .info-image{
        height: 400px;
    }
    .info-img{
        height: 100%
    }

    .info-title {
        margin: 30px 60px 30px 30px;
        color: var(--v-primary-base);
        font-size: 30px;
        font-family: "brushKing", Roboto, sans-serif;
    }
    .info-description {
        margin: 60px 100px 100px 60px;
        white-space: pre-line;
        color: var(--v-error-lighten2);
        font-weight: 600;

    }

    .info-bold {
        color: var(--v-accent-lighten2);
        font-weight: 700;


    }
    @media only screen and (max-width: 820px) {
        .info-text {
            width: 100% !important;
            margin-bottom: 20px;
            min-height: 600px !important;
            border-right: none !important;
            border-left: none !important;
            height: 100%;
            padding-right: 0px;

        }
        .info-title {
            text-align: center;
        }
        .info-image {
            width: 100% !important;
            margin-bottom: 20px;

            height: 100%;
        }

        .InfoBox {
            flex-direction: column;
        }
        .info-description {
            margin: 10px;
            white-space: pre-line;
            color: var(--v-error-lighten2);
            font-weight: 600;
            text-align: center;
            border-right: none !important;
            border-left: none !important;

        }
    }
</style>
