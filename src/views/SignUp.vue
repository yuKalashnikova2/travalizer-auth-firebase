<script>
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Checkbox from '../components/Checkbox.vue'
import Error from '../components/Error.vue'
import Loader from '../components/Loader.vue'
import axios from 'axios'
import { API_KEY } from '../constants.js'

export default {
  components: {
    Button,
    Input,
    Error,
    Checkbox,
    Loader,
  },
  data() {
    return {
      checked: true,
      email: '',
      password: '',
      isAuth: false,
      isError: false,
      er: '',
      isLoading: false,
    }
  },
  methods: {
    async signup() {
      try {
        this.isLoading = true
        let response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,

          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        this.isAuth = true
        this.email = ''
        this.password = ''
        console.log('что в респонсе', response)
      } catch (error) {
        this.isError = true
        this.er = error.response.data.error.message
        console.error('Это ошибка', error)
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<template>
  <div class="auth">
    <span class="auth__text">Welcome! To use our platform please register</span>
    {{ enterText }} {{ email }} {{ password }}
    <form class="auth__form" @submit.prevent>
      <div class="auth__form-inputs">
        <Input
          type="text"
          v-model:enterText.trim="email"
          label="Your email"
          name="email"
          placeholder="robert.langster@gmail.com"
        />
        <Input
          type="password"
          v-model:enterText.trim="password"
          label="Сreate password"
          placeholder="Enter your password"
          name="password"
        />
      </div>

      <div class="flex-justify">
        <Checkbox
          @update="checked = !checked"
          :checked="checked"
          name="Remember"
          labelText="Remember me"
        />
        <router-link to="signin">
          <span class="text__question ml-10"
            >Already registered? If yes, click here</span
          >
        </router-link>
      </div>
      <Loader v-if="isLoading" />

      <Error :er="er" v-if="isError" />

      <div class="auth__form-auth" v-else-if="isAuth">
        <span>You have successfully registered!</span>
        <router-link to="/signin">
          <Button label="Login using username and password" />
        </router-link>
      </div>
      <div class="auth__form-buttons">
        <div class="width" @click="signup">
          <Button label="Sign Up" lightColor />
        </div>
      </div>
    </form>

    <div class="auth__social">
      <span class="auth__social-name">Or, register with</span>
      <span class="auth__social-name auth__social-name_bold">Facebook</span>
      <span class="auth__social-name auth__social-name_bold">Linked In</span>
      <span class="auth__social-name auth__social-name_bold">Google</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('../assets/auth_styles.scss');
</style>
