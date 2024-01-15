<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    getPhotos() {
      fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((res) => res.json())
        .then((data) => (this.list = data))
    },
  },
  mounted() {
    this.getPhotos()
  },
}
</script>

<template>
  <div class="list">
    <h2 class="list__title">LIST</h2>

    <div class="list__items">
      <div v-for="lis in list" :key="lis.id" class="list__items-elem">
        <router-link :to="'/list/' + lis.id">
            {{ this.$route.params.idcard }}
            <div>{{ lis.id }}</div>
            <img :src="lis.url" alt="image" />
            
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  padding: 30px;
  &__title {
    color: var(--green-main);
    font-size: 60px;
    font-weight: 500;
    text-align: center;
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    &-elem {
      & img {
        display: block;
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>
