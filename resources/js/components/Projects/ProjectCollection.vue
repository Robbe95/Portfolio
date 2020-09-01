<template>
    <div class="ProjectCollection" >
        <div v-for="projectPage in paginateAmount" class="project-flexbox" :key="projectPage" :class="{'wrap-flexbox': toWrap, 'offScreen': !(renderMultiplePages.includes(projectPage)) }">
            <project v-for="project in paginateProjects[projectPage - 1]"
                     @sheetExpanded="sheetExpanded"
                     @checkSmoll="makeSmollIfNotExpanded"
                     :key="project.title" :class="{'wrap-flexbox': toWrap}"
                     :paginateClass="projectPage"
                     :project="project"
            >
            </project>
        </div>
        <div class="text-center pagination">
            <v-pagination
                v-model="page"
                :length="paginateAmount"
                @input="next"
                :disabled="disablePagination"

            ></v-pagination>
        </div>
    </div>
</template>

<script>
import Project from './Project'
import ProjectPagination from './ProjectPagination'

export default {
    name: "ProjectCollection",
    components: {
        Project,
        ProjectPagination

    },
    data() {
        return {
            previousPage: 1,
            renderMultiplePages: [1],
            page: 1,
            paginationCounter: 0,
            toWrap: false,
            disablePagination: false,
            projects: [

                {
                    image: '../images/projects/sintoda-logo.png',
                    thumbnail: '../../images/projects/sintoda.jpg',
                    title: 'Sint-Oda: Drum',
                    color: '#026499',
                    description: 'I made a <span class="project-bold">virtual drum web application</span>  together with the people at <span class="project-bold">Sint-Oda</span> for one of the inhabitants of the facilitation.\n\n' +
                        'Sint-Oda is a facilitation for people with a mental handicap and they try to give those people a normal live.\n' +
                        'This project was to help one of the inhabitants, a middle aged man with down syndrome, who loved to drum but had a hard time doing it.\n' +
                        'This is why I created a simple webapp where the UI is as simple as possible and the user cannot make any wrong moves, as this person is very likely to press the wrong buttons on existing apps, which makes him panic. \n' +
                        'The application was made with the JavaScript framework <span class="project-bold">PixiJS</span> for simplifying interactivity and animations in the website.'

                },{
                    image: '../images/projects/bewire.jpg',
                    thumbnail: '../../images/projects/bewire-logo.png',

                    title: 'BeWire Labs',
                    color: '#E04038',
                    description: 'This is a project together with <span class="project-bold">PXL</span> and <span class="project-bold">BeWire</span>. The goal was to make an <span class="project-bold">internal platform</span>, that could possibly be expanded to be a product they could sell, that <span class="project-bold">facilitates innovation</span> within a company.\n' +
                    'The platform would be a place where you could post ideas, personal projects or just courses/interesting frameworks, these "Labs" could have different roles it would need, like for example a backend developer.\n ' +
                        'People could then sign-up within such a "Lab" with a role they which to fill. After the "Lab" was fully filled, the people could then easily start on it.\n' +
                        'This application was made with a <span class="project-bold">Spring Boot</span> backend and an <span class="project-bold">Angular</span> frontend, utilizing <span class="project-bold">Material UI</span> as a component library.'

                },{
                    image: '../images/projects/messaging.png',
                    thumbnail: '../../images/projects/messaging-logo.jpg',

                    title: 'Messaging Tool',
                    color: '#9EB620',
                    description: 'This project is a <span class="project-bold">Proactive messaging tool</span>, where it is possible to select and setup different channels within <span class="project-bold">different messaging platforms</span>, such as <span class="project-bold">SMS</span>, <span class="project-bold">WhatsApp</span>, <span class="project-bold">Telegram</span> and <span class="project-bold">Facebook Messenger</span>.\n\n' +
                        'These channels can be linked to different <span class="project-bold">templates</span>, where you can build up the different kind of messages you want to send to your contacts.\n' +
                        'These <span class="project-bold">contacts</span>  can be added to different groups or they can manually sign up using a link generated per group.\n' +
                        'If you then choose to send a message, you can select different contact groups which should receive this message, as well as a channel and a template of the message.\n' +
                        'The data is then filled in with the available data of that contact, as well as different variables you wish to set.\n' +
                        'It is also possible to setup <span class="project-bold">Webhooks</span> within this tool, so you can easily message and add contacts from outside third party tools.\n' +
                        'This project is made with <span class="project-bold">Laravel</span>, as well as <span class="project-bold">JQuery</span> and <span class="project-bold">AJAX</span>  to present the frontend.\n'

                },{
                    image: '../images/projects/watchy.jpg',
                    thumbnail: '../../images/projects/watchy-logo.jpg',
                    title: 'Watch scraper',
                    color: '#D1D1D3',
                    description: 'This projects is a <span class="project-bold">joint effort</span> of different <span class="project-bold">luxury watch retailers</span>. These companies wanted to build an app where it was possible to see all their watches together, but the data was very spread-out and constantly changing.' +
                        'This is why they needed a <span class="project-bold">web scraper</span> that would check their different websites daily for new watches, collected the watches their data and added that data to a <span class="project-bold">joint database</span>.' +
                        'This database would be used as the main database of the app.' +
                        'The application was made in <span class="project-bold">Laravel</span>.'

                },{
                    image: '../images/projects/slimstemens.jpg',
                    thumbnail: '../../images/projects/slimstemens.jpg',

                    title: 'Slimste mens',
                    color: '#A51306',
                    description: 'This was a little side project. Me and my friends started doing <span class="project-bold">quizzes</span> in the <span class="project-bold">lockdown</span> of 2020. One idea was to create a quiz based on the format of the popular show in Belgium, <span class="project-bold">"Slimste mens"</span>, which means "Smartest Person" in English.' +
                        'However in this format it was necessary to update the seconds players had left fast and in real time.' +
                        'This would mean that it would be very difficult to moderate such a quiz without a proper tool. This is why I created such a tool, where questions can be dynamically loaded in via a <span class="project-bold">JSON file</span>.\n' +
                        'This website is a very simple <span class="project-bold">JavaScript</span> application, but it made possible to enjoy such quizzes. We used this website multiple times during the lockdown, but sadly the quizzes stopped when the measures where retracted.\n'

                }
            ]
        }
    },
    computed: {
        paginateProjects: function () {

            var paginatedProjects = [];
            var counter = 0;
            var secondArrayCounter = 0;
            for (let singleProject in this.projects) {

                if(counter === 4) {
                    counter = 0
                    secondArrayCounter++;
                    this.paginationCounter++;

                }
                if(!paginatedProjects[secondArrayCounter]) {
                    paginatedProjects[secondArrayCounter] = []
                }
                paginatedProjects[secondArrayCounter].push(this.projects[singleProject]);
                counter ++;
                console.log(paginatedProjects);
            }
            return paginatedProjects;
        },
        paginateAmount: function () {
            return this.paginateProjects.length ;

        }


    },

    mounted() {
        let tl = window.gsap.timeline();
        tl.staggerFrom('.single-project', 1 , {duration: 2, y: '100vh', ease:"back", stagger: {
                amount: 0.2,
                from: "center",
                grid:[6,1]

            }},
        );
        tl.play();

        console.log(this.renderMultiplePages.includes(this.page));
    },
    methods: {
        sheetExpanded: function () {
            document.body.addEventListener('click', this.bodyClicked)

            let projectComponents = this.$children.filter(child => {
                return child.$options._componentTag === "project";
            });
            projectComponents.map(p => (p._data.currentlyExpanded = false));

            let expandedProjects = this.$el.querySelectorAll('.single-project:not(currently-expanded)');
            window.gsap.to(expandedProjects, {duration: 1, height: '50px', width: '50px'})

            let wraps = this.$el.querySelectorAll('.sheet-wrap:not(currently-expanded)');
            window.gsap.to(wraps, {duration: 1, height: '50px', width: '50px', margin: '20px 20px 60px 20px'});
            projectComponents.filter(child => {
                return child._data.currentlyExpanded === 'false'
            })
        },

        makeSmollIfNotExpanded: function () {
            this.$children.filter(child => {
                return child.currentlyExpanded === false
            }).map(p => {
                (p.smoll = true)
            });
        },
        makeNormal: function () {
            console.log('make normal')
            let projectComponents = this.$children.filter(child => {
                return child.$options._componentTag === "project";
            });
            projectComponents.map(function (p) {
                p.currentlyExpanded = false;
                p.smoll = false;
            });
            let wraps = this.$el.querySelectorAll('.sheet-wrap:not(currently-expanded)');
            window.gsap.to(wraps, {duration: 1, height: '300px', width: '300px', margin: '20px 20px 60px 20px'});

            let expandedProjects = this.$el.querySelectorAll('.single-project:not(currently-expanded)');
            window.gsap.to(expandedProjects, {duration: 1, height: '300px', width: '300px'});

        },
        bodyClicked() {

            let clickedSheet = false;

            let tempCounter = 0
            event.path.forEach(element => {

                if (tempCounter < 6) {
                    if (typeof element.classList !== undefined && element.classList.contains(['single-project']) || element.classList.contains(['pagination'])) {
                        clickedSheet = true;
                    }
                }
                tempCounter++;


            });
            if(! clickedSheet) {
                this.makeNormal();


                document.body.removeEventListener('click',this.bodyClicked);

            }
        },
        animateIncoming(page) {
            window.gsap.from('.paginate-project-' + page , {duration: 3, x: '+100vw', stagger: .2, ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.455,0.95 0.716,1 0.884,1.032 0.838,1 1,1 "),});

        },
        animateOutgoing(page) {
            return window.gsap.to('.paginate-project-' + page , {duration: 2, x: '-100vw', stagger: .2});

        },
        next (page) {

            this.disablePagination = true;
            let rememberThis = this;

            this.animateOutgoing(this.previousPage).then(function() {
                    rememberThis.previousPage = page;
                    rememberThis.renderMultiplePages = [page];
                    rememberThis.disablePagination = false;
                    window.gsap.set('.project-sheet', {clearProps:"x"});

                }
            );
            setTimeout(function() {
                rememberThis.renderMultiplePages = [page, rememberThis.previousPage];
                rememberThis.animateIncoming(page);

            },
                400


        )








        },
    },



}
</script>
<style>

.project-flexbox {
    justify-content: center;
    display: flex;
    top: 50px;
    position: absolute;
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

    }
    .pagination {
        width: 100%;
        position: fixed !important;
        bottom: 80px !important;
    }

}

.offScreen {
    position: absolute;
    right: 100vw;
}

.ProjectCollection {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

}
.pagination {
    position: absolute;
    bottom: -20px;
}

</style>

