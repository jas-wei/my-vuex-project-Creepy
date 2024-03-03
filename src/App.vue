<template>
  <div>
    <NamePage v-if="isAuthenticated" />
    <CreepyLoginForm v-if="!isAuthenticated" /> <!-- Show LoginForm.vue when not logged in -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CreepyLoginForm from './components/CreepyLoginForm.vue'
import NamePage from './components/NamePage.vue'

export default {
  name: 'App',
  data() {
    return {
      errorHtml:'',
    }
  },
  mounted() {
    //this.loadErrorHtml();
  },
  components: {
    CreepyLoginForm,
    NamePage,
  },
  computed: {
    ...mapState(['isAuthenticated', 'isShowError'])
  },
}
</script>
<style>@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap')</style>
<style>
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
