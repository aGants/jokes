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
 transition: .2s ease-out;
}
$first-color: #ffffff;
$second-color: #99DDCC;
$third-color: #f8f8f8;

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
    margin: 30px 0;
    padding: 20px 10px;
    background: $first-color;
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
      @extend %transition;
      &:hover {
        fill: $second-color;
      }
    }
  }
}

.liked {
  background: $third-color;
  fill: $second-color;
  & list-joke-like {
    fill: $second-color;
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
    @extend %transition;
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

@keyframes dot-keyframes {
  0% {
    opacity: .4;
    transform: scale(1, 1);
  }

  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }

  100% {
    opacity: .4;
    transform: scale(1, 1);
  }
}

.loading {
  text-align: center;
  width: 200px;
  
  &-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 20px 5px;
    border-radius: 10px;
    background: $second-color;
    animation: dot-keyframes 1.5s infinite ease-in-out;
    
    &:nth-child(2) {
      animation-delay: .5s;
    }
    
    &:nth-child(3) {
      animation-delay: 1s;
    }
  }
}

</style>
