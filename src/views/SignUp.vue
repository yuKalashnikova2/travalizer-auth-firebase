<script>
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Error from '../components/Error.vue'
import axios from 'axios'
import { API_KEY } from '../constants.js'

export default {
  components: {
    Button,
    Input,
    Error
  },
  data() {
    return {
      checked: true,
      email: '',
      password: '',
      isAuth: false,
      isError: false,
      er: ''
    }
  },
  methods: {
    async signup() {
      try {
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
        console.log('что в респонсе', response)
      } catch (error) {
        this.isError = true
        this.er = error.response.data.error.message
        console.error('Это ошибка', error)
      }
   
    },
  },
}
</script>

<template>
  <div class="signin">
    <span class="signin__text"
      >Welcome! To use our platform please register</span
    >
   

    <form class="signin__form" @submit.prevent>
      <div class="signin__form-inputs">
        <Input
          type="text"
          v-model:email="email"
          label="Your email"
          name="email"
          placeholder="robert.langster@gmail.com"
        />
        <Input
          :type="password"
          v-model:password="password"
          label="Careate password"
          placeholder="Enter your password"
          name="password"
        />
     
      </div>

      <div class="signin__form-checkbox">
        <label class="signin__form-checkbox__label">
          <div
            :class="[
              'input-checkbox',
              checked ? 'input-checkbox__checked' : '',
            ]"
          >
            <input
              type="checkbox"
              :checked="checked"
              name="name"
              value="value"
              @click="checked = !checked"
            />
          </div>

          <div class="signin__form-checkbox__label-text">Remember me</div>
        </label>
        <router-link to="signin">
          <span class="signin__form-checkbox__forgot"
            >Already registered? If yes, click here</span
          >
        </router-link>
      </div>

      <Error :er="er" v-if="isError" />

      <div class="signin__form-auth" v-else-if="isAuth">
        <span>You have successfully registered!</span>
        <router-link to="/signin">
          <Button label="Login using username and password" />
        </router-link>
      </div>
      <div class="signin__form-buttons" >
        <div class="width" @click="signup">
          <Button label="Sign Up" lightColor />
        </div>
      </div>
    </form>

    <div class="signin__social">
      <span class="signin__social-name">Or, register with</span>
      <span class="signin__social-name signin__social-name_bold">Facebook</span>
      <span class="signin__social-name signin__social-name_bold"
        >Linked In</span
      >
      <span class="signin__social-name signin__social-name_bold">Google</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signin {
  margin-top: 16px;
  &__form-inputs {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
  }
  &__form-label {
    color: var(--blue-dark);
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &_green-text {
      color: var(--green-main);
    }
  }
  &__form-checkbox {
    display: flex;
    justify-content: space-between;
    &__label {
      display: flex;
      align-items: center;
      gap: 8px;
      &-text {
        color: var(--green-main);

        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
      }
    }
    &__forgot {
      color: var(--green-main);
      text-align: right;

      font-size: 16px;

      font-weight: 400;
      line-height: 100%;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
  &__form-auth {
    background-color: var(--beige);
    color: var(--green-main);
    padding: 30px 20px;
    margin: 15px;
    font-weight: 500;
    font-size: 25px;
    border-radius: 8px;
    & span {
      display: block;
      padding-bottom: 10px;
    }
  }
  &__form-buttons {
    display: flex;
    gap: 24px;
    width: 100%;
    margin-top: 24px;
  }
  &__text {
    color: var(--green-text);
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    display: block;
    padding-bottom: 32px;
  }
  &__social {
    display: flex;
    gap: 24px;
    margin-top: 56px;

    @media (max-width: 767px) {
      margin-top: 40px;
      flex-wrap: wrap;
    }
    &-name {
      display: block;
      color: var(--green-text);
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;

      &_bold {
        color: var(--green-main);
        font-weight: 500;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
}


</style>
