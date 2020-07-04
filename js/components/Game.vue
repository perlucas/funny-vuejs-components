<template>
    <div class='container'>
        <div class="title-container">
            <h1>Rock, Paper or Scissors</h1>
        </div>
        <div class="instructions-container">
            Pick yours (the machine won't know what you choose) and then press "Run" to know who won the game.
        </div>
        <div class="game-container">
            <label for="gameChoice">I pick: </label>
            <select id="gameChoice" class="choice" v-model="choice" :disabled="triggered" @change="onRun()">
                <option value="rock">Rock</option>
                <option value="paper">Paper</option>
                <option value="scissors">Scissors</option>
            </select>
            <button v-if="triggered" type="button" @click="onReset()">Reset</button>
        </div>
        <div class="answer-container" v-if="triggered">
            <p>
                You've picked <strong>{{ choice }}</strong>, waiting for machine response<span>{{ dots }}</span>
            </p>
            <p v-if="machineChoice">
                Machine has picked <strong>{{ machineChoice }}</strong>, <span class="result-text">you {{ result }}.</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            choice: "rock",
            triggered: false,
            machineChoice: "",
            dots: ""
        };
    },

    methods: {
        onRun: function () {
            this.triggered = true;
            this.play();
        },

        onReset: function () {
            this.triggered = false;
            this.machineChoice = "";
        },

        play: function () {
            const interval = setInterval(() => {
                this.dots = this.dots.length === 3 
                    ? "."
                    : this.dots + ".";
            }, 700);

            const makeChoice = function () {
                const choices = ["rock", "paper", "scissors"];
                let index =  Math.round(Math.random() * 2);
                this.machineChoice = choices[index];
                this.dots = "...";
                clearInterval(interval);
            };

            setTimeout(makeChoice.bind(this), 4000);
        }
    },

    computed: {
        result: function () {
            if (! this.machineChoice) {
                return "unknown";
            }

            if (this.choice === this.machineChoice) {
                return "draw";
            }

            if (this.choice === "paper") {
                return this.machineChoice === "scissors" ? "lose" : "win";
            }

            if (this.choice === "rock") {
                return this.machineChoice === "paper" ? "lose" : "win";
            }

            return this.machineChoice === "rock" ? "lose" : "win";
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #037c87;
        width: 50%;
        margin: 15px;
        height: 40vh;
        box-shadow: 10px 10px 5px #131010;
    }

    .container:hover {
        background-color: #086c75;
    }

    .title-container h1,
    .instructions-container, 
    .game-container, 
    .choice,
    .answer-container {
        font-family: 'Montserrat', sans-serif;
        padding-left: 1rem;
    }

    .game-container, .answer-container {
        margin-top: 1rem;
    }

    .choice {
        outline: none;
        border-radius: 10%;
        padding: 2px;
        margin-left: 1rem;
    }

    .answer-container p:first-child {
        margin-top: 0;
    }

    button {
        margin-left: 1rem;
    }

    .result-text {
        text-decoration: underline;
    }
</style>