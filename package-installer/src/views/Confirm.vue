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
      <textarea class="form-control" v-model="command_txt" 
                      :rows="6" 
                      style="overflow:auto;"
                      readonly>
        </textarea>
    </div>

    <div class="main">
      <textarea class="form-control" v-model="result_txt" 
                      :rows="11" 
                      style="overflow:auto;"
                      readonly>
        </textarea>
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
  mounted() {
    var fs = require('fs');
    const file = "./commandItems1.ps1"
    const msg = fs.readFileSync( file, {encoding: "utf-8"})
    this.command_txt = msg
  },
  methods: {
    reload: function() {
        this.$router.go({path: this.$router.currentRoute.path, force: true});
    },
    something: function() {
        // reloadを呼び出すことで画面リロード
        this.reload();
    },
    spawnw: function(cmd, opt, env){
      var spawn = require("child_process").spawn,child; 
      return new Promise((resolve) => {
        let p = spawn(cmd, opt, env);
        p.stdout.setEncoding('utf8');
        p.stdout.on('data', (data)=>{
          console.log(data);
          this.result_txt += data
        });
        p.on('close', (code)=>{
          resolve();
        })
      });
    },
    async submit () {
      console.log('##########submit confirm ########## ')
      var spawn = require("child_process").spawn,child; 

//      console.log('exec ===============');
//      let res = await exec('bash test.sh 10 1',{cwd:'./'})
//      let res = await exec('powershell.exe', ["./commandItems1.ps1"])
//      console.log(res.stdout);
//      this.result_txt = res.stdout

      console.log('============== spawn ==============');

      await this.spawnw('powershell.exe',['./commandItems1.ps1'], {cwd:'./'});
      console.log('done!');

/*
      var spawn = require("child_process").spawn,child; 
      child = spawn("powershell.exe",["./commandItems1.ps1"]); 
      child.stdout.on("data",function(data){ 
          console.log("Powershell Data: " + data); 
          this.result_txt = data
      }); 
      child.stderr.on("data",function(data){ 
          console.log("Powershell Errors: " + data); 
          this.result_txt = data
     }); 
      child.on("exit",function(){ 
          console.log("Powershell Script finished"); 
          this.result_txt = data
        }); 
      child.stdin.end(); //end input 
 */

      this.$router.push('/complete')
    }
  }
}


</script>
