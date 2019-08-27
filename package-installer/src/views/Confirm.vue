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
<!--      <p v-bind:style="styles"> -->
        {{ command_txt }}
<!--      </p> -->
    </div>

    <div class="main">
<!--      <p v-bind:style="styles"> -->
      {{ result_txt }}
<!--      </p> -->
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
      command_txt: '',
      result_txt: '',
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
  methods: {
    async submit () {
      alert('##########submit confirm ########## ')            

      var execSync = require('child_process').execSync;
      var fs = require("fs");
      var readline = require("readline");

      fs.readFileSync("items2.ps1").toString().split('\r\n').forEach(function(line){
          console.log(line.toString());
          var command = "powershell " + line;
          console.log(command);
          const stdout = execSync(command);
          console.log(stdout.toString());

//          this.command_txt = line;
//          this.result_txt = atdout;
//          this.$set(this.commnd_txt, 'command', command)
//          this.$set(this.stdout_txt, 'stdout', stdout)
//          this.$forceUpdate();
      })

//      this.clearUserForm()
      this.$router.push('/complete')
    }
  }
}
</script>
