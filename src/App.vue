<template>
  <JokesList />
</template>

<script>
import JokesList from './components/JokesList.vue'

export default {
  name: 'App',
  components: {
    JokesList,
  }
}
</script>

<style lang="scss">
$screen-md: 768px;
%transition {
 transition: .4s ease-out;
}
$first-color: #f0f0f0;
$second-color: #99DDCC;
$third-color: #F9F7F7;

@mixin w-from($screen) {
  @media (min-width: $screen) {
    @content;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
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
    align-items: center;
    gap: 20px;
    width: 250px;
    padding: 20px 10px;
    margin: 30px 0;
    border-radius: 5px;
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 8%);
    @include w-from($screen-md){
      width: 600px;
      padding: 20px 20px;
    }
    &-like {
      max-width: 40px;
      height: 40px;
      cursor: pointer;
      transition: .2s ease-out;
      &:hover {
        fill: $second-color;
      }
    }
  }
}

.search {
  height: 43px;
  margin: 20px 0;
  text-align: center;
  @include w-from($screen-md){
    margin: 50px 0 20px;
  }
  &__input {
    width: 250px;
    padding: 12px;
    background-color: $first-color;
    border: 2px solid $first-color;
    border-radius: 4px;
    @include w-from($screen-md){
      width: 700px;
     }
    &:focus, &:active {
      border: 2px solid $second-color;
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.56);
    }
  }
}

</style>
