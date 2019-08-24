<template>
  <div class="body">
    <div class="navi">
      <h1>{{ $t("msg001") }}</h1>
      <br/>
      <h2 align="left" >{{ $t("msg101")}}</h2>
      <h2 align="left" >{{ $t("msg201")}}</h2>
      <h2 align="left" style="background-color:gold">{{ $t("msg301")}}</h2>
      <h2 align="left" >{{ $t("msg401")}}</h2>
    </div>

    <div class="title">
        <h2>{{ $t("msg301")}}</h2>
    </div>

    <div class="description">
      <p v-bind:style="styles">
        {{command_txt}}
      </p>
    </div>

    <div class="main">
      <p v-bind:style="styles">
      {{stdout_txt}}
      </p>
    </div>

    <div class="footer">
    <form @submit.prevent="submit">

      <router-link to="/input2">
        <button>{{ $t("msg003")}}</button>
      </router-link>
      <button type="submit">{{ $t("msg002")}}</button>
    </form>
    </div>

  </div>
</template>

<script>
import { exec } from 'child_process'
import readline from 'readline'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    data() {
    return {
      command_txt: ' ',
      stdout_txt: '',
      styles: {
          margin: '10px',
          padding: '5px 20px',
          fontsize: '20px',
          color: 'red',
          backgroundColor: '#fee',
          border: '3px solid blue'
      }
    }
  },
/*
  computed: {
    ...mapState({
      email: state => state.userForm.email,
      name: state => state.userForm.name,
      age: state => state.userForm.age
    })
  },
*/
  methods: {
/*    
    ...mapMutations({
      clearUserForm: 'userForm/clear'
    }),
    ...mapActions({
      submitUserForm: 'userForm/submit'
    }),
*/
    async submit () {
      alert('##########submit confirm ########## ')            

      var execSync = require('child_process').execSync;
      var fs = require("fs");
      var readline = require("readline");

      fs.readFileSync("items2.ps1").toString().split('\n').forEach(function(line){
          console.log(line.toString());
          var command = "powershell " + line
          console.log(command)
          const stdout = execSync(command)
          console.log(stdout.toString())
//          this.$set(this.commnd, 'command', command)
//          this.$set(this.command_txt, 'stdout', stdout)
      })

//      this.clearUserForm()
      this.$router.push('/complete')
    }
  }
}
</script>
