<script>
import axios from 'axios'
import Button from '../components/Button.vue'
import { API_KEY } from '../constants.js'
export default {
  components: {
    Button,
  },
  data() {
    return {
      checked: true,
      emailEnter: '',
      passwordEnter: ''
    }
  },
  methods: {
    async signin() {
        try {
            let res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            {
                emailEnter: this.emailEnter,
                passwordEnter: this.passwordEnter,
                returnSecureToken: true,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          })
        console.log(res, 'ОТВЕТ РЕГИСТРАЦИИ')
        } catch (error) {
            console.log('ОШИБКА ВХОДА', error)
        } 
        finally {
            console.log('сделан запрос на вход', API_KEY)
        }
    }
  }
}
</script>

<template>
  <div class="signin">
   
    <span class="text">Artificial Intelligence giving you travel recommendations</span>
    <span class="signin__text">Welcome Back, Please login to your account</span>

    <form class="signin__form" @submit.prevent>
      <div class="signin__form-inputs">
        <label class="signin__form-label">
          Email: {{ emailEnter }}
          <input
            v-model="emailEnter"
            class="input"
            type="text"
            name="emailEnter"
            placeholder="robert.langster@gmail.com"
          />
        </label>
        <div class="signin__form-label">
          <label for="password" class="signin__form-label_green-text">
            Password: {{ passwordEnter }}
          </label>
          <input
            v-model="passwordEnter"
            class="input"
            type="password"
            name="passwordEnter"
            placeholder="Enter your password"
          />
        </div>
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

        <span class="signin__form-checkbox__forgot">Forgot password?</span>
      </div>

      <div class="signin__form-buttons">
        <router-link  class="width" to="list" @click="signin">
            <Button label="Login" />
        </router-link>
         
     
     
        <router-link class="width" to="signup">
            <Button label="Sign Up" lightColor />
        </router-link>
        
      </div>
    </form>

    <div class="signin__social">
      <span class="signin__social-name">Or, login with</span>
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
.input {
  border-radius: 8px;
  border: 1px solid var(--green-light);
  background: #fff;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  &-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid var(--green-light);
    border-radius: 3px;
    &__checked {
      background: url('/checkbox-checked.svg');
      background-size: 100%;
    }
  }
}
.text {
  display: block;
  padding-top: 56px;
  padding-bottom: 16px;
  color: var(--green-main);
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  @media (max-width: 767px) {
    padding-top: 32px;
  }
}
</style>
