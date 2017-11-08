<template>
  <div class="hello">
  <img id="top-pic" src="https://images.unsplash.com/photo-1505502768156-98c787d2190e?auto=format&fit=crop&w=2571&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
    <h1>{{ msg }}</h1>
    <h2>You are signed in and authenticated with Firebase</h2> 
      <button v-on:click="logout">logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    };
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      });
    }
  }
};
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button { 
  padding: 10px 20px;
  background: #42b983;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;
}
  #top-pic { 
    max-width: 100%;
    padding-top: 0;

}
</style>
