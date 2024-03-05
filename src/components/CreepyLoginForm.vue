<!-- login-form.vue -->
<template>
  <div class="creepy">
    <form @submit.prevent="handleLogin" class="form">
      <h1>{{ title }}</h1>
      <label class="input-label">
        Password
        <input type="text" v-model="password" />
      </label>
      <p class="message">{{ message }}</p>
      <button @click="handleSubmit">Log in</button>
    </form>
  </div>
  <router-view />
</template>

<script>
import '@/styles/creepyLogin.css';

export default {
  data() {
    return {
      title: 'W̴̛͎̯̪̘̫̭̟͙̤͍̙̺̞͓̙ͮͬ̂ͧͩͨ̍̊͘̚̕̚͟_̓ͪé̵̡̲̼͙͈̠̼̥͇̳̠̠̳̦͓͗͐ͧ͋̿̍̐͋ͫ̍͒̔̑̆͐̕͞͝l̴̶̹͇̪̜̮̱̼͇̓ͮͭͬ͝c̵̡̛̲̹̰̩̀ͨ́̌̊́̀ͣ̀̿̕͢͡͠ͅŏ̻͎̭̱̰̘̀ͩ̅̀ͬͧ͛͐͟͜͠͞ͅm̴̴̴̟̬͉̞͙͑̏͑̇̿̽̈̉ͮ̓̍ͩ̕͡ͅȩ̸̴͍̠̲̯̪̪͓̮͒́̊̑̒ͤ̓͟͞ t̢̛̳̟͇͇̹̖͓̮̝̫̖̟̯̪̹̫͈̘̝͛̿̆̾͋̒̉ͬ͑̑ͣ̀͊̇̍̀ͥ̕̕͟͜͟͠o̝̠͖̪̾͒̾ͥ̄ P̷̧̞̬̘ͤ̃͂ą̴̨̡̢̝̱̦̒́̒̒̿̓́ͥͭͮ͟i̵̷͚̜͓̻̹͓̞̟͍͎̲͋͆̾ͧ̑ͣ́ͣͭ͒̉͐̐ͯ́͋ͣ͂ͣ̃̑̏̆̓͝n̷̢̨̛̲͔̫̱͕̖͙̖͈̿͆ͪ͂ͭͩ̅ͣ̓̌̔̃̈́͋ͧͧͬͯ͟͜͞͠͡ţ͙̝̦̯͔̻̞̲̺̩̠͌̒̈́ͭ̀͒̒ͦ̓ͦ̇̿̇͛̾ͯ̒̕͢͝Ņ̷̵͙͉͙̥̞̜̭̜͂̾ͫ̿ͧ̀ͤ̉ͥ̄ͫ͗͠͡͠ỏ̡̖̲̹̥̗̱ͤͨ͋͢͜ͅơ̷̰̜̗̺̮̗̗̩̑͌ͯ̀̊̿ͩͣ̑ͥͬ͛͛̂͘̕͘͝ķ̯̯̅̌̓͌̒ͦͫͥ́͘',
      password: '',
      answer: '677401',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$store.commit('setPassword', this.password);
      console.log('password:' + this.password);
      console.log(this.password == '677401')
      if (this.password === '677401'){
        this.message = '';
        this.$store.commit('setAuthenticated', true)
        this.$router.push('/names');
      } else{
        this.message = 'Incorrect Information Entered:';
      }
    }
  }
};
</script>

