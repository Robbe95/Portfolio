<template>

    <v-card :elevation="3">
        <div id="tinderp" >
            <div id="img-div">
                <img draggable="false" id="profileimg" :src="image">
            </div>
            <div class="topinfo">
                <h1><strong><span id="name"><slot name="name"></slot></span>,</strong> <span id="age"><slot name="age"></slot></span></h1>


                <p>&nbsp;<span class="iconz"><i class="fa fa-map-marker" aria-hidden="true"></i></span>&nbsp;&nbsp;<slot name="km"></slot></p>
            </div>

            <div id="description">
                <slot name="description"></slot>
            </div>
            <div class="circle-contain">
                <div class="circles exit" @click="dislikeButton">
                    <i class="fa fa-times fa-2x"></i>
                </div>
                <div class="circles star">
                    <i class="fa fa-star fa-2x"></i>
                </div>
                <div class="circles heart" @click="likeButton">
                    <i class="fa fa-heart fa-2x"></i>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>

    export default {
        name: "TinderProfile",
        props: {
            image: String
        },
        methods: {
            likeButton (event) {
                this.$emit('liked', event)
            },
            dislikeButton (event) {
                this.$emit('disliked', event)
            }
        }

    }
</script>

<style>

    #tinderp {
        width: 320px;
        height: 600px;
        background-color: white;
        border-radius: 15px;
    }
    .topinfo {
        padding-bottom: 20px;
        padding-left:15px;
        border-bottom: 1px solid #f7f7f7;
    }
    .topinfo p {
        color: #8d8d8d;
    }
    h1 {
        font-size:20px;
        font-weight:normal;
        color:#4d4d4d;
    }
    #description {
        padding: 15px 15px 5px;
        color: #8d8d8d;
        height: 100px;
        overflow-x: auto;
    }
    .iconz {
        font-size:14px;
    }
    .circles {
        color:white;
        border-radius:50%;
        height: 50px;
        width:50px;
        text-align:center;
        box-shadow: 1px 1px 4px #aaa;
        cursor: pointer;
        cursor:hand;
        display:inline-block;
        margin-bottom:15px;

    }

    .exit {
        background-color: #EE6C49;

        margin-left:30px;
        margin-right:50px;
    }
    .exit i{
        position:relative;
        top:8px;
    }
    .heart {
        background-color: #3BA4FF;
        position:relative;
        top:-4px;
        margin-left:50px;
    }
    .heart i {
        position:relative;
        top:14px;
        font-size: 26px;
    }
    .star {
        background-color: #4CCC92;
        margin:auto;
    }
    .star i {
        font-size:30px;
        position:relative;
        top: 10px;
    }

    #profileimg {
        height: 500px;
        width:320px;

        vertical-align:top;
        padding-top:0px;
        object-fit: cover;
    }
    #more {
        float:right;
        position: relative;
        top: 10px;
    }
    #img-div {
        height: 320px;
        width:320px;

        overflow: hidden;
    }
</style>
