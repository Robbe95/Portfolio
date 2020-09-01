<template>
    <v-btn :color="socialColor" v-html="socialButton" style="color:white" :href="fullUrl">

    </v-btn>
</template>

<script>
    const simpleIcons = require('simple-icons');

    export default {
        name: "SocialButton",
        props: {
            socialName: String,
            socialUrl: String

        },
        methods: {
        },
        computed: {
            socialInfo () {
                return simpleIcons.get(this.socialName);
            },
            fullUrl () {
                if(this.socialName !== 'GMail')
                    return 'https://' + this.socialUrl;
                else {
                    return this.socialUrl;
                }
            },
            socialButton () {
                return '<span class="social-svg">' + this.socialInfo.svg +  '</span>' + this.socialName;
            },
            socialColor () {
                return '#' + this.socialInfo.hex;
            }
        },
        created: function () {
            console.log(this.socialInfo)
        }

    }
</script>

<style>
    .social-svg {
        height: 20px;
        width: 20px;
        fill: white;
        margin-right: 10px
    }

</style>
