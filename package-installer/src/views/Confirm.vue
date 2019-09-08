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
      console.log('============== spawnw ==============');
      var spawn = require("child_process").spawn,child; 
      return new Promise((resolve) => {
        let p = spawn(cmd, opt, env);
        p.stdout.setEncoding('utf8');

        p.stdout.on('data', (data)=>{
          console.log('============ spawn Stdout ============')
          console.log(data);
          this.result_txt += data
        });

        p.stderr.on('data', (err) => {
          console.log('============ spawn Stderr ============')
          console.error(err.toString());
          this.result_txt += err
        });

        p.on('close', (code)=>{
          console.log('============== close ==============')
          resolve();
        })

      });
    },
    async submit () {
      console.log('##########submit confirm ########## ')
      var spawn = require("child_process").spawn,child; 

      if( this.$store.state.appInfo.platform == 'mac'){
        // Install set for mac
        // Common install
        console.log('########## Package install ##########')
        await this.spawnw('shell',['./commandItems1.ps1'], {cwd:'./'});
        console.log('done!');

          // IDE install
  //      var ide = this.$store.state.appInfo.ide
        console.log('########## IDE install ##########')
        this.$store.state.appInfo.ide = 'intellijidea-community'
        var ide_install = ' ' + this.$store.state.appInfo.ide + ' -y'
        console.log('IDE install: ' + ide_install )
        await this.spawnw('shell ',[ide_install], {cwd:'./'});
        
      }else{
        // Install set for windows
        // Common install
        console.log('########## Package install ##########')
        await this.spawnw('powershell.exe',['./commandItems1.ps1'], {cwd:'./'});
        console.log('done!');

          // IDE install
  //      var ide = this.$store.state.appInfo.ide
        console.log('########## IDE install ##########')
        this.$store.state.appInfo.ide = 'intellijidea-community'
        var ide_install = 'choco install ' + this.$store.state.appInfo.ide + ' -y'
        console.log('IDE install: ' + ide_install )
        await this.spawnw('powershell.exe',[ide_install], {cwd:'./'});
    }

      this.$router.push('/complete')
    }
  }
}


</script>
