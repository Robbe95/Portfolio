
<template>
    <v-bottom-navigation
        v-model="bottomNav"
        fixed
        grow
        shift
    >
        <v-btn value="recent"
               v-for="item in items"
               :key="item.title"

               @click=""
               :to="item.url"
               link
        >
            <span>{{ item.title}}</span>
            <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: "bottom-navigation",

    data () {
        return {
            bottomNav: 'recent',
            items: [
                { title: 'Home', icon: 'mdi-account', url: '/' },
                { title: 'Projects', icon: 'mdi-briefcase', url: '/projects' },

            ],

        }
    },
}
</script>

<style scoped>

</style>
