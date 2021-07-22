<template>

  <div className="search">
    <input 
      type="text"
      placeholder="Введите слово" 
      className="search__input"
      />
  </div>

  <ul class="list">
    <li class="list-joke" v-for="joke in jokes" :key="joke.id">
      <div class="list-joke-text"> 
        <p v-if="joke.type === 'single' "> {{ joke.joke }} </p>
        <div v-else>
          <p> {{ joke.setup }} </p>
          <p> {{ joke.delivery }} </p>
        </div>
      </div>
      <svg class="list-joke-like">
        <use href="../assets/like.svg#like" />
      </svg>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'JokesList',
  data () {
    return {
      jokes: [''],
      search: '',
      isLoading: false,
      error: null
    }
  },
  created () {
    this.axios
      .get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&amount=10')
      .then(response => {
        this.jokes = response.data.jokes;
      })
      .catch(error => {
        console.log(error);
        this.error = true;
      })
      .finally(() => (this.isLoading = false));
  },
  methods: {
    },
}
</script>

