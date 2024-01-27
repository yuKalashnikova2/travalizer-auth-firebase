<script>
import axios from 'axios'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Error from '../components/Error.vue'
import Checkbox from '../components/Checkbox.vue'
import Loader from '../components/Loader.vue'
import { API_KEY } from '../constants.js'
export default {
  components: {
    Button,
    Error,
    Input,
    Checkbox,
    Loader,
  },
  data() {
    return {
      checkedActive: true,
      emailEnter: '',
      passwordEnter: '',
      isError: false,
      er: '',
      token: '',
      isLoading: false,
    }
  },
  methods: {
    async signin() {
      try {
        this.isLoading = true
        let res = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            email: this.emailEnter,
            password: this.passwordEnter,
            returnSecureToken: true,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        this.token = res.data.idToken
        localStorage.setItem('isAuthenticated', this.token)

        console.log(res)
      } catch (error) {
        this.isError = true
        this.er = error.response.data.error.message
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<template>
    <div class="auth">
    <span class="auth__subtitle"
      >Artificial Intelligence giving you travel recommendations</span
    >
    <span class="auth__text">Welcome Back, Please login to your account</span>
    <Loader v-if="isLoading" />
    <Error :er="er" v-if="isError" />
    <form class="auth__form" @submit.prevent>
      <div class="auth__form-inputs">
        <Input
          type="text"
          v-model:enterText.trim="emailEnter"
          label="Email"
          name="email"
          placeholder="robert.langster@gmail.com"
        />
        <Input
          type="password"
          v-model:enterText.trim="passwordEnter"
          label="Password"
          placeholder="Enter your password"
          name="password"
        />
      </div>

      <div class="flex-justify">
        <Checkbox
          @update="checkedActive = !checkedActive"
          :checked="checkedActive"
          name="Remember"
          labelText="Remember me"
        />
        <router-link to="#">
          <span class="text__question">Forgot password?</span>
        </router-link>
      </div>

      <div class="auth__form-buttons">
        <router-link class="width" to="/list" @click="signin">
          <Button label="Login" />
        </router-link>

        <router-link class="width" to="signup">
          <Button label="Sign Up" lightColor />
        </router-link>
      </div>
    </form>

    <div class="auth__social">
      <span class="auth__social-name">Or, login with</span>
      <span class="auth__social-name auth__social-name_bold">Facebook</span>
      <span class="auth__social-name auth__social-name_bold">Linked In</span>
      <span class="auth__social-name auth__social-name_bold">Google</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('../assets/auth_styles.scss');
</style>
