<template>

  <div className="search">
    <input 
      type="text"
      placeholder="Введите слово" 
      className="search__input"
      />
  </div>

  <div v-if="error">
    <p>Sorry, something went wrong :(</p>
  </div>
 
  <div v-else>
   <div v-if="loading" className="loading">
     <div class="loading-dot"></div>
     <div class="loading-dot"></div>
     <div class="loading-dot"></div>
    </div>

    <ul v-else class="list">
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
  </div>

</template>

<script>
export default {
  name: 'JokesList',
  data () {
    return {
      jokes: [''],
      search: '',
      loading: true,
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
        console.log(123);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    },
}
</script>

