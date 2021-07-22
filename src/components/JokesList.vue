<template>
  <ul class="list">
    <li class="list-joke" v-for="joke in jokes" :key=joke.id>
      <p class="list-joke-text"> {{ joke }} </p>
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
      jokes: ['Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender', 'шутка2 inerf ienrf', 'шутка3', 'шутка4'],
      isLoading: false,
      error: null
    }
  },
  methods: {
    
  }
}
</script>
