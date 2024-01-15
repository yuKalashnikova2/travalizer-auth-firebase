<script>
import Button from '../components/Button.vue'
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
    Button
  }
  }

</script>

<template>
  <div class="list__item flex">
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
    width: 600px;
    height: 520px;
  }
}
</style>
