<template>
    <div class="InfoBoxCollection">
        <info-box v-for="infoBox in infoBoxes" :key="infoBox.title"
                  :title="infoBox.title"
                  :image="infoBox.image"
                  :textWidth="infoBox.textWidth"
                  :direction="infoBox.direction"
                  :description="infoBox.description"
                  :id="infoBox.id"
                    >
        </info-box>
    </div>
</template>

<script>
    import InfoBox from './InfoBox'

    export default {
        name: "InfoBoxCollection",
        data: function() {
            return {
                infoBoxes: [
                    {
                        id:'info-about-me',
                        title: 'About me',
                        image: '../images/me-text.png',
                        textWidth: 80,
                        direction: 'right',
                        description: 'My name is <span class="info-bold">Robbe Vaes</span>. Currently I live in Belgium.\n I am a Web Developer who specializes in <span class="info-bold">PHP</span>, though I also have experience with Java and C#.\n' +
                            'I do both frontend and backend development, using namely <span class="info-bold">Vue</span> and <span class="info-bold">JQuery</span> for frontend development and the <span class="info-bold">Laravel</span> framework for backend.\n' +
                            'As most Belgium people, I like that visit bar and enjoy a nice pint of beer in my free time as well as catch up on any new video games.\n'
                    },
                    {
                        id:'info-education',
                        title: 'Education',
                        image: '../images/education.jpg',
                        textWidth: 60,
                        direction: 'left',
                        description: 'Currently I have a diploma for <span class="info-bold">Computer Science</span> from the college <span class="info-bold">PXL</span>, that is located in Belgium, Limburg.\n' +
                            'I\'ve studied there from 2017 - 2020, where I learned a great deal of programming skills, but also a large amount of soft-skills, as the college tries the put an emphasis on that. ' +
                            'Of course anyone in the tech industry knows that doens\'t mean you stop learning, quite the opposite, it just begins.\n' +
                            'For example I\'ve recently begun studying Vue, a programming language I hadn\'t learned before and started using this for most of my projects,including this website!'
                    },
                    {
                        id:'info-work-history',
                        title: 'Work History',
                        image: '../images/work.jpg',
                        textWidth: 70,
                        direction: 'right',
                        description: 'As I\'ve only recently graduated, the list of workplaces remains rather small. Though I\'ve picked up a small collection of work experience here and there.\n' +
                            'In <span class="info-bold">2018</span> I started working as a student at <a href="https://appwise.be">Appwise</a>, where I also discovered my interest for <span class="info-bold">Web Development</span> and <span class="info-bold">Laravel</span>.\n' +
                            'After working here part-time for a 5ish months and a whole month in the summer, my class schedule become too busy to justify the time anymore.\n' +
                            'In late <span class="info-bold">2019</span>, I worked at <a href="https://appwise.be">bewire.be</a> as part of a school project with a couple of other students. We had our own project here utilizing <span class="info-bold">Spring Boot</span> and <span class="info-bold">Angular</span>.\n' +
                            'At the start of <span class="info-bold">2020</span> I started my <span class="info-bold">internship</span> at <a href="https://appwise.be">Appwise</a>, since it was my favourite place to work out of the companies I\'ve visited.\n' +
                            'Unfortunatly this is also the year that COVID-19 hit, so most of the internship was at home. Luckily for me they still offered me a job and I\'ve been worken there ever since.'
                    },
                ]
            }
        },
        components: {
            InfoBox
        },

    }
</script>

<style>
    .InfoBoxCollection {
        width: 100vw;
    }

    @media only screen and (max-width: 820px) {
        .InfoBoxCollection {
            display: flex;
            flex-direction: column;
        }

    }

</style>
