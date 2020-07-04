<template>
    <div class="container">
        <div class="title-container">
            <h1>The wise</h1>
        </div>
        <div class="instructions-container">
            Ask the wise a yes/no question. He will answer to you using his knowledge. (You can also ask about your future).
        </div>
        <div class="game-container">
            <label for="question">Ask your question (must end with "?"):</label>
            <textarea id="question" cols="30" rows="3" placeholder="Question" v-model="question"></textarea>
            <button type="button" v-if="!asking" @click="onAnswer()">Answer</button>
        </div>
        <div class="answer-container" v-if="answer">
            Your answer is: <strong>{{ answer | capitalize }}</strong>.
        </div>
        <div class="answer-container" v-if="!answer && fetching">
            Answering...
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: "",
            asking: true,
            answer: "",
            fetching: false
        };
    },

    watch: {
        question: function () {
            this.asking = ! /[a-zA-Z]+\?$/.test(this.question);
        }
    },

    methods: {
        onAnswer: function () {
            this.fetching = true;
            this.answer = "";
            fetch("https://yesno.wtf/api")
                .then(response => response.json())
                .then(data => this.answer = data.answer)
                .catch(err => console.error(err))
                .then(() => this.fetching = false);
        }
    },

    filters: {
        capitalize: function (value) {
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        margin: 15px;
        background-color: #a7b5b7;
        box-shadow: 10px 10px 5px #131010;
    }

    .container:hover {
        background-color: #838d8f;
    }

    .title-container h1,
    .instructions-container,
    .game-container,
    .answer-container {
        font-family: 'Montserrat', sans-serif;
        padding-left: 1rem;
    }

    .game-container, .answer-container {
        margin-top: 1rem;
    }

    .game-container {
        display: flex;
        align-items: center;
    }

    .game-container label,
    .game-container textarea {
        margin-right: 1rem;
    }

    #question {
        border-radius: 10%;
        resize: none;
        outline: none;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        padding: 1rem;
    }

</style>