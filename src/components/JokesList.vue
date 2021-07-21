<template>
  <ul class="list">
    <li class="list-joke" v-for="joke in jokes" :key=joke.id>
      <p class="list-joke-text"> {{ joke }} </p>
      <img src="../assets/like.svg" class="list-joke-like" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'JokesList',
  data () {
    return {
      jokes: ['Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender', 'шутка2', 'шутка3', 'шутка4'],
      isLoading: false,
      error: null
    }
  },
  methods: {
    
  }
}
</script>
