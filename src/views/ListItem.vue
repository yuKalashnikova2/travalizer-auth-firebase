<script>
import Button from '../components/Button.vue'
import Loader from '../components/Loader.vue'
export default {
    data() {
        return {
            item: 'Los'
        }
    },
  methods: {
    getPhoto() {
      fetch(`https://jsonplaceholder.typicode.com/photos/${this.$route.params.idcard}`)
        .then((res) => res.json())
        .then((data) => this.item = data)
    },
  },
  mounted() {
    this.getPhoto()
  },
  components: {
    Button,
    Loader
  }
  }

</script>

<template>
    <div v-if="item === 'Los'" class="margin-100">
        <Loader />
    </div>
    
    <div v-else class="list__item flex">
   
    <div class="flex">
        <router-link to="/list">
            <Button label="Сome back" />
        </router-link>
        <div class="list__item-id"> Number: {{ item.id }}</div>
    </div>
   
    <h2 class="list__item-title">{{ item.title }}</h2> 
    <img :src="item.url" alt="img" />
  </div>
</template>

<style lang="scss" scoped>
.list__item {
    text-align: center;
    margin-top: 20px;
    width: 100%;
    &-id {

        font-size: 36px;
        font-weight: 600;
        color: var(--green-main);
    }
  &-title {
    color: var(--green-text);
    font-size: 25px;
    font-weight: 500;
  }
  img {
    width: 90%;
    height: 520px;
  }
}


</style>
