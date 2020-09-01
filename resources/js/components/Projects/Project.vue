<template>
    <div
        class="sheet-wrap"
        :class="[{ 'currently-expanded': currentlyExpanded, 'project-sheet': true }, paginateClassString]"
        @click="expandSheet"

    >
        <div v-if="!smoll && !currentlyExpanded" class="project-title">
             {{ project.title }}
        </div>
        <v-sheet
            width="300"
            height="300"
            elevation="12"
            :class="{ 'currently-expanded': currentlyExpanded, 'project-sheet': true}"
            :color="smoll ? project.color :'white'"
            class="single-project"
        >
            <div v-if="smoll" class="smoll-letter">
                {{ firstLetterOfTitle }}
            </div>

            <img v-if="!smoll && !currentlyExpanded" :src="project.thumbnail" class="project-image">

            <div class="project-expanded-content"  v-if="currentlyExpanded">
                <div class="project-expanded-title">
                    {{ project.title}}
                </div>
                <div class="project-description" v-html="project.description" >
                </div>
                <div class="expanded-image-container">

                <img
                    class="project-expanded-image"
                    :src="project.image">
                </div>

            </div>
        </v-sheet>
    </div>


</template>

<script>
export default {
    props: {
        project: {
            title: String,
            color: String,
            image: String,
            thumbnail: String
        },
        paginateClass: Number,

    },
    computed: {
        firstLetterOfTitle: function () {
            return this.project.title.toUpperCase().charAt(0);
        },
        paginateClassString: function () {
            return 'paginate-project-' + this.paginateClass.toString();
        },
    },
    data() {
        return {
            currentlyExpanded: false,
            smoll: false

        }
    },
    mounted() {
        console.log(this.paginateClass);
    },
    name: "Project",
    methods: {
        expandSheet: function (event) {
            this.$emit('sheetExpanded', this);
            this.currentlyExpanded = true;
            this.smoll = false;

            this.$emit('checkSmoll', this);

            this.$el
            window.gsap.to(this.$el, {duration: 1, width: '70%', height: '80vh'})
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                window.gsap.to(this.$el, {duration: 1, width: '100%', height: '80vh'})

            }
            else {
                window.gsap.to(this.$el, {duration: 1, width: '70%', height: '80vh'})

            }
            window.gsap.to(this.$el.querySelector('.single-project'), {duration: 1, width: '100%', height: '100%'})

        },
        makeNormal: function (event) {
            this.smoll = false;
            this.currentlyExpanded = false
        },

    }
}
</script>

<style lang="scss">

.single-project{

}

.sheet-wrap {
    display: flex;
    justify-content: center;
    margin: 20px 20px 60px 20px;
    position: relative;
}


.project-image {
    width: 100%;
    height: 100%;

    overflow:hidden;
    object-fit: cover;
}

.project-title {
    color: var(--v-primary-base);
    font-size: 20px;
    font-family: "brushKing", Roboto, sans-serif;
    text-align: center;
    margin-top: 10px;
    position: absolute;
    top: -50px;
}



.smoll-letter {
    font-size:45px;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}


.project-bold {
    color: var(--v-accent-lighten2);
    font-weight: 700;


}


.project-expanded-content {
    display: flex;

    flex-direction: column;
    padding: 60px;
    height: 100%;
    overflow: auto;

    .project-expanded-title {
        color: var(--v-primary-base);
        font-size: 20px;
        font-family: "brushKing", Roboto, sans-serif;
        text-align: center;
        margin-bottom: 50px;
    }

    div .project-expanded-image {
        max-height: 100%;

    }

    .project-description {
        white-space: pre-line;
        color: var(--v-error-lighten2);
        font-weight: 600;
        margin-bottom: 50px;

    }

    .expanded-image-container {
        margin-top:auto;
        width: auto;
        text-align: center;
        max-height: 50%;

    }
}

@media only screen and (max-width: 820px) {
    .project-expanded-content {
        padding: 10px;

    }

}

</style>
