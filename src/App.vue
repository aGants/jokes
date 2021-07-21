<template>
  <JokesList />
</template>

<script>
import JokesList from './components/JokesList.vue'

export default {
  name: 'App',
  components: {
    JokesList
  }
}
</script>

<style lang="scss">
$screen-md: 768px;
%transition {
 transition: .4s ease-out;
}
$joke-color: #F9F7F7;
$liked-color: #99DDCC;

@mixin w-from($screen) {
  @media (min-width: $screen) {
    @content;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list {
  margin: 0;
  padding: 0;
  list-style-type: none;

  &-joke {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 250px;
    padding: 20px 10px;
    margin: 30px 0;
    border-radius: 5px;
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 8%);
    @extend %transition;
    &:hover {
      // box-shadow: 0 4px 16px 0 rgb(0 0 0 / 30%);
    }
    @include w-from($screen-md){
      width: 550px;
      padding: 20px 20px;
    }
    &-like {
      cursor: pointer;
      &:hover {
      }
    }
  }
}


</style>
