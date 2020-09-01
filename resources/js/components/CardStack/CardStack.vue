<template>
    <div id="cardStack">

        <div class="socials-under">
            <div id="thought-div">
                <div class="thought">This is kind of awkward.</div>

            </div>
            <div id="rejected-sad">

                <div class="emoji emoji1">
                    <div class="mouth"></div>
                </div>
            </div>
            <div id="rejected-text">
                In case you change your mind.

            </div>
            <social-collection ></social-collection>

        </div>

        <vue-swing
            @throwout="onThrowout"
            :config="config"
            ref="vueswing"
        >

            <div
                class="card"
                v-for="tinder in tinders"
            >

                <span>
                    <tinder-profile :image="tinder.image"  @liked="likeTinder" @disliked="dislikeTinder">
                          <template v-slot:description>
                            {{ tinder.description}}
                          </template>
                          <template v-slot:name>
                            Robbe Vaes
                          </template>
                          <template v-slot:age>
                            25
                          </template>
                          <template v-slot:km>
                            Near you!
                          </template>
                    </tinder-profile>

                </span>
            </div>
        </vue-swing>
    </div>
</template>

<script>
    import VueSwing from 'vue-swing';
    import TinderProfile from './TinderProfile';
    import SocialCollection  from '../SocialDialog/SocialCollection'

    export default {
        name: 'CardStack',
        components: {
            VueSwing,
            TinderProfile,
            SocialCollection
        },
        data () {
            return {
                config: {
                    allowedDirections: [
                        VueSwing.Direction.LEFT,
                        VueSwing.Direction.RIGHT
                    ],
                    minThrowOutDistance: 200,
                    maxThrowOutDistance: 500
                },
                tinders: [
                    {
                        image: '../images/me.png',
                        description: 'Playing hard to get, huh?'
                    },{
                        image: '../images/me2.jpg',
                        description: 'Swinging right is to like! I\'m sure you mixed it up haha.'
                    },{
                        image: '../images/me.png',
                        description: 'Hmm.. Maybe you swinged the wrong by accident?'
                    },{
                        image: '../images/me.png',
                        description: 'Do you think we are a match? Like me!'
                    },

                ]
            }
        },
        methods: {
            add () {
                this.cards.push(`${this.cards.length + 1}`)
            },
            remove () {
                this.swing();
                setTimeout(() => {
                    this.cards.pop()
                }, 100)
            },
            swing () {
                const cards = this.$refs.vueswing.cards;
                cards[cards.length - 1].throwOut(
                    Math.random() * 100 - 50,
                    Math.random() * 100 - 50
                )
            },
            swingLeft () {
                const cards = this.$refs.vueswing.cards;
                cards[cards.length - 1].throwOut(
                    -50,
                    Math.random() * 100 - 50
                )
            },
            swingRight () {
                const cards = this.$refs.vueswing.cards;
                cards[cards.length - 1].throwOut(
                    50,
                    Math.random() * 100 - 50
                )
            },
            onThrowout ({ target, throwDirection }) {

                this.$store.commit({
                    type: 'currentImage/setCurrentImage',
                    image: target.querySelector('#tinderp #img-div #profileimg').getAttribute('src')
                });
                let otherThis = this;
                window.gsap.to(target, {duration: 0.5, opacity: 0,
                    onComplete: function(){
                        target.remove();
                        otherThis.checkCardsEmpty();

                    }
                });

                if(throwDirection === VueSwing.Direction.RIGHT) {
                            this.$emit('showSocials');
                }

            },
            checkCardsEmpty() {
                const cards = this.$refs.vueswing.cards;
                if(cards.length === 1) {
                    window.gsap.to('#thought-div', {duration: 2, opacity: 1});
                    setTimeout(function() {
                            window.gsap.to('#thought-div', {duration: 20, top: -1000});
                            setTimeout(function() {
                                window.gsap.to('#thought-div', {duration: 20, left: 30, ease:
                                        window.CustomEase.create("custom", "M0,0 C0.14,0 0.068,1.74 0.212,1.768 0.358,1.724 0.328,-1.416 0.404,-1.436 0.501,-1.462 0.412,1.384 0.68,1.612 0.804,1.672 0.652,-1.454 0.824,-1.454 1.002,-1.454 1,1 1,1 ")
                                });
                            }, 200);
                    },
                    2000);





                }
            },
            dislikeTinder (e) {
                this.swingLeft();
                },
            likeTinder (e) {
                this.swingRight();
            }

        }
    }
</script>

<style lang="scss">
    body {
        background-color: #444;
        margin: 0;
    }
    .card {
        justify-content: center;
    }


    .socials-under {
        position: absolute;
        width: 320px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 600px;
        background-color:var(--v-accent-base) !important;
        -moz-box-shadow:    inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow:         inset 0 0 10px #000000;

    }

    .card-stack {
        width: 320px;
        margin-top: 30px;
    }
    #rejected-text {
        text-align: center;
        color:white;
    }

    #rejected-sad {
        text-align: center;
        color:white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 50px

    }

    $color1: #FFEB96;
    $color2: #414141;


    //emoji
    .emoji {
        border-radius: 50%;
        position: relative;
        width: 100px;
        height: 100px;
        background-color: $color1;
    }

    .emoji1 {

        &:after, &:before {
            position: absolute;
            content: "";
            height: 10px;
            width: 10px;
            background-color: $color2;
            border-radius: 50%;
            top: 48px;
            animation: emoji1-face-move 5s ease-in-out infinite, emoji1-eyes-blink 2s ease-in-out infinite;
            animation-direction: alternate;
        }

        &:after {
            left: 30px;

        }

        &:before {

            left: 85px;
        }

        .mouth {
            position: absolute;
            height: 3px;
            width: 35px;
            background-color: $color2;
            border-radius: 5px;
            top: 68px;
            left:45px;
            animation: emoji1-face-move 5s ease-in-out infinite;
            animation-direction: alternate;
        }
    }

    @keyframes emoji1-eyes-blink {
        0% {
            height: 10px;
        }
        97% {
            height: 10px;
        }
        100% {
            height: 0px;
        }
    }

    @keyframes emoji1-face-move {
        0% {
            transform: translateX(0);
        }
        30% {
            transform: translateX(0);
        }
        35% {
            transform: translateX(-20px);
        }
        65% {
            transform: translateX(-20px);
        }
        70% {
            transform: translateX(-10px);
        }
        85% {
            transform: translateX(-10px);
        }
        90% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(0);
        }
    }

    .thought {
        display:flex;
        background-color:#fff;
        padding:20px;
        border-radius:30px;
        min-width:40px;
        max-width:220px;
        min-height:40px;
        margin:10px;
        position:relative;
        align-items:center;
        justify-content:center;
        text-align:center;
        z-index: 2;
    }
    .thought:before,
    .thought:after {
        content:"";
        background-color:#fff;
        border-radius:50%;
        display:block;
        position:absolute;
        z-index: -2
    }
    .thought:before {
        width:44px;
        height:44px;
        top:-12px;
        left:28px;
        box-shadow:-50px 30px 0 -12px #fff;
    }
    .thought:after {
        bottom:-10px;
        right:26px;
        width:30px;
        height:30px;
        box-shadow:40px -34px 0 0 #fff,
        -28px -6px 0 -2px #fff,
        -24px 17px 0 -6px #fff,
        -5px 25px 0 -10px #fff;

    }

    #thought-div {
        position: absolute !important;
        top: 0;
        left: -80px;
        width: 300px;
        opacity: 0;
    }

    @media only screen and (max-width: 820px) {
        #thought-div {
            display: none;

        }
    }


</style>
