<template>
    <div class="vote-flexbox">
        <div>
            <iframe src="https://www.strawpoll.me/embed_1/21181801" style="width:680px;height:400px;border:0;">Loading poll...</iframe>
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
    }
    .container {
        justify-content: center;
    }
</style>
