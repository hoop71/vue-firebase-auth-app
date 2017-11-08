<template>
    <div class="sign-up">
        <p>Let's Create a New Account</p>
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" plaecholder="password"><br>
        <button v-on:click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login</router-link>.</span>
    </div>
    
</template>

<script>
  import firebase from 'firebase';

  export default { 
    name: 'signUp',
    data: function() {
        return {
          email: '',
          password:''
        };
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello');
          },
          (err) => {
            alert('Oops! Somthing went wrong ' + err.message)
          }
        );
      }
    }
  };
</script>

<style scoped>
    .login { 
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button { 
        margin-top: 20px;
        width: 15%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>