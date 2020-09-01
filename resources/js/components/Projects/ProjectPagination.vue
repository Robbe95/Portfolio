<template>
    <div>
        <v-btn class="pagination-button">
            <
        </v-btn>
        <v-btn @click="" v-for="n in amount" :key="n" class="pagination-button">
            {{n}}
        </v-btn>
        <v-btn class="pagination-button">
            >
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        amount: Number,
        initialPage: Number
    },


    name: "ProjectPagination",

}
</script>

<style>

.pagination-button {
    height: 30px !important;
    width: 30px !important;
    min-width: 30px !important;
    margin: 5px
}

</style>

