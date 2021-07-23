<template>

  <div className="search">
    <input 
      type="text"
      placeholder="Type a word or words" 
      className="search__input"
      v-model="search"
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
      <li class="list-joke" v-for="joke in filteredJokes" :key="joke.id" :class="{liked: joke.liked}">
        <div class="list-joke-text"> 
          <p v-if="joke.type === 'single' "> {{ joke.joke }} </p>
          <div v-else>
            <p> {{ joke.setup }} </p>
            <p> {{ joke.delivery }} </p>
          </div>
        </div>
        <svg class="list-joke-like" v-on:click="likedJoke(joke)">
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
      jokes: [],
      likes: [],
      search: '',
      loading: true,
      error: null,
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
      .finally(() => (this.loading = false));
  },
  methods: {
    likedJoke (joke) {
      if (!joke.liked) {
        joke.liked = true;
        this.likes.push(joke)
      } else {
        joke.liked = false;
        this.likes.splice(this.likes.indexOf(joke), 1)
        }
    }
  },
  computed: {
    filteredJokes: function () {
      return this.jokes.filter(joke => {
        if (joke.type === "single") {
          return joke.joke.toLowerCase().match(this.search.toLowerCase())
        } else {
          return joke.setup.toLowerCase().match(this.search.toLowerCase()) || 
          joke.delivery.toLowerCase().match(this.search.toLowerCase())
        }
      })
    }
  }
}

</script>

