<template>
  <Search />
  <JokesList />
</template>

<script>
import JokesList from './components/JokesList.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    JokesList,
    Search
  }
}
</script>

<style lang="scss">
$screen-md: 768px;
%transition {
 transition: .4s ease-out;
}
$first-color: #F9F7F7;
$second-color: #99DDCC;

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
  width: 1000px;
  margin: 70px 0 20px;
  text-align: center;
  height: 43px;
  &__input {
    width: 70%;
    padding: 12px;
    background-color: $first-color;
    border: 2px solid $first-color;
    border-radius: 4px;
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
