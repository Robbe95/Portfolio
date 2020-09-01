<template>
    <div class="projects-page">
        <project-collection></project-collection>
    </div>


</template>

<script>
import ProjectCollection from '../components/Projects/ProjectCollection'

    export default {
        name: "Projects",
        components: {
            ProjectCollection
        }
    }
</script>

<style lang="scss">

.project-flexbox {
    justify-content: center;
    display: flex;

}

.wrap-flexbox {
    flex-wrap: wrap;

}

.projects-page {
    width: 100%;
}
@media only screen and (max-width: 820px) {
    .project-flexbox {
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        width: 94%;

    }
    .projects-page {
        height: 1600px;
        max-height: 1600px;

        background-color:var(--v-secondary-base) !important;
    }

}

</style>
