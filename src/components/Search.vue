<template>
  <div className="search">
    <input 
      type="text"
      placeholder="Введите слово" 
      className="search__input"
      />
    </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    
  }
}
</script>