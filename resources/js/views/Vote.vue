<template>
    <div class="vote-flexbox">
        <div style="width: 100%">
            <iframe src="https://www.strawpoll.me/embed_1/21181801" style="width:100%;height: 550px;border:0;">Loading poll...</iframe>
        </div>
    </div>

</template>

<script>

export default {
}
</script>

<style>
    .vue-poll .ans-cnt .ans .bg {
        background-color: white !important;
    }
    .vue-poll .ans-cnt .ans-no-vote {
        border-color: var(--v-primary-darken4) !important;
    }
    .vue-poll .ans-cnt .ans-no-vote .txt {
        color: var(--v-primary-darken4) !important;

    }
    .vote-flexbox {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        max-width: 660px;
    }
    .container {
        justify-content: center;
    }
    @media only screen and (max-width: 1000px) {
        .vote-flexbox {
            width: 100% !important;
        }
    }
</style>
