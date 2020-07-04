<template>
    <div class="container">
        <div class="row">
            <div class="title-container">
                <h1>{{ title }}</h1>
            </div>
        </div>
        <div class="row">
            <Game></Game>
            <JokeGenerator></JokeGenerator>
        </div>
        <div class="row">
            <YesOrNo></YesOrNo>
        </div>
    </div>
</template>

<script>
import Game from './Game.vue';
import JokeGenerator from './JokeGenerator.vue';
import YesOrNo from './YesOrNo.vue'

export default {

    data () {
        return {
            title: "Funny VueJS Components Compilation"
        }
    },

    components: {
        Game,
        JokeGenerator,
        YesOrNo
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .row {
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }

    .title-container {
        justify-content: center;
    }

    .title-container h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        color: #abba82;
    }
</style>