<template>
<div class="container">
    <div class="title-container">
        <h1>Jokes Generator</h1>
    </div>
    <div class="jokes-container">
        {{ joke }}
    </div>
    <div class="button-container">
        <button type="button" v-show="!fetching" @click="fetchJoke()">Generate</button>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            joke: "",
            fetching: false
        }
    },

    methods: {
        fetchJoke: function () {
            this.fetching = true;
            this.joke = "Generating...";
            fetch("https://sv443.net/jokeapi/v2/joke/Any?type=single")
                .then(response => response.json())
                .then(data => this.joke = data.joke)
                .catch(err => console.error(err))
                .then(() => this.fetching = false);
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #abba82;
        width: 50%;
        margin: 15px;
        box-shadow: 10px 10px 5px #131010;
    }

    .container:hover {
        background-color: #90a35a;
    }

    .title-container h1,
    .jokes-container,
    .button-container {
        font-family: 'Montserrat', sans-serif;
        padding-left: 1rem;
    }

    .button-container {
        padding-top: 1rem;
    }

    .button-container button {
        padding: 0.5rem;
    }
</style>