<script>
import Loader from '../components/Loader.vue'
export default {
  components: {
    Loader,
  },
  data() {
    return {
      list: [],
      isLoading: false,
    }
  },
  methods: {
    async getPhotos() {
      this.isLoading = true
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/photos?_limit=10'
      )
      const data = await res.json()
      this.list = data
      this.isLoading = false
    },
  },
  mounted() {
    this.getPhotos()
  },
}
</script>

<template>
  <Loader v-if="isLoading" />

  <div v-else class="list">
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
  padding-top: 30px;

  &__title {
    color: var(--green-main);
    font-size: 60px;
    font-weight: 500;
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
