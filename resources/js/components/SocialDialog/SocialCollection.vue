<template>
    <div id="social-contact">
        <social-button v-for="social in socialButtons" :key="social.name" :socialName="social.name" :social-url="social.url"></social-button>
    </div>
</template>

<script>
    import SocialButton from './SocialButton';

    export default {
        name: "SocialCollection",
        data: function() {
            return {
                socialButtons: [
                    {
                        name: 'Github',
                        url: 'github.com/Robbe95'
                    },
                    {
                        name: 'LinkedIn',
                        url: 'www.linkedin.com/in/robbe-vaes-1841b5116/'
                    },
                    {
                        name: 'Twitter',
                        url: 'twitter.com/robbe_vaes'
                    },
                    {
                        name: 'Instagram',
                        url: 'www.instagram.com/robbe.vaes/'
                    },
                    {
                        name: 'GMail',
                        url: 'mailto:robbevaes95@gmail.com'
                    },]
            }
        },
        components: {SocialButton},

    }
</script>

<style scoped>

</style>
