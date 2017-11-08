<template>
    <div class="login">
      <img id="top-pic" src="https://i.imgur.com/0jkaotm.png">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" plaecholder="password"><br>
        <button v-on:click="signIn">Connection</button>
        <p>Don't have an account yet? You can <router-link to="/sign-up">make one</router-link></p>
    </div>
</template>

<script>
  import firebase from 'firebase';

  export default { 
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello');
          },
          (err) => {
            alert('Oops. ' + err.message);
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
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a { 
    text-decoration: underline; 
    cursor: pointer;
  }
  #top-pic { 
    max-width: 100%;
    padding-top: 0;
}
    
</style>