<template>
  <div class="body">

    <div class="navi">
      <h2>{{ $t("msg001") }}</h2>
      <br/>
      <h3 align="left" style="background-color:gold">{{ $t("msg101")}}</h3>
      <h3 align="left" >{{ $t("msg201")}}</h3>
      <h3 align="left" >{{ $t("msg301")}}</h3>
      <h3 align="left" >{{ $t("msg401")}}</h3>
    </div>

    <div class="title">
      <h1 align="left">{{ $t("msg101") }}</h1>
    </div>

    <div class="description">
       <h3 align="left">{{ $t("msg102") }}</h3>
       <h3 align="left">{{ $t("msg103") }}</h3>
    </div>

    <div class="main">
      <label align="left">{{ $t("msg104") }}</label>
      <div class="form-inline">
        <b-form-select v-model="$store.state.appInfo.teamname" v-on:change="fetchConfigs" :options="teams" class="col-10"/>
        <b-form-select v-model="$store.state.appInfo.configuration" :options="configs" class="col-10"/>
      </div>
    </div>

    <div class="footer">
      <form @submit.prevent="submit" align="left">
        <button type="submit">{{ $t("msg002")}}</button>
      </form>
    </div>
  </div>
  
</template>

<script>
import { exec } from 'child_process'
import { mapState } from 'vuex'

export default {
  namespace: true,
  data() {
    return {
      teams: [ 'プロジェクトチーム名を選択' ],
      isUpdatingTeamList: false,
      configs: [],
    }
  },

// get initial data; team list
  mounted() {
      this.teams = []
      var fs = require('fs');
      var jsonObject = JSON.parse(fs.readFileSync("./teams_configs.json", {encoding: "utf-8"}))
      console.log(jsonObject)
      for (var i in jsonObject) {
        console.log('##########Team########## ')
        var  team = jsonObject[i]
        console.log(team.name)
        this.teams.push( team.name )
      }
  },

  methods: {
    onClickUpdateListBtn () {
//      isUpdatingTeamList = false
      this.teams = []
      var fs = require('fs');
      var jsonObject = JSON.parse(fs.readFileSync("./teams_configs.json", {encoding: "utf-8"}))
      console.log(jsonObject)
      for (var i in jsonObject) {
        console.log('##########Team########## ')
        var  team = jsonObject[i]
        console.log(team.name)
        this.teams.push( team.name )
      }
  //    isUpdatingTeamList=true
    },

    fetchConfigs: function(){
      var fs = require('fs');
      var jsonObject = JSON.parse(fs.readFileSync("./teams_configs.json", {encoding: "utf-8"}))

      this.configs = []
      for (var i in jsonObject) {
        console.log('##########Config########## ')
        var  temp = jsonObject[i]
        if( temp.name === this.$store.state.appInfo.teamname ){
          for( var j in temp.configs ){
            console.log( temp.configs[j])
            this.configs.push( temp.configs[j])
          }
          return
        }
      }
    },

    submit () {
      alert('##########submit1########## ')
      console.log(this.$store.state.appInfo.platform)
      console.log(this.$store.state.appInfo.teamname)
      console.log(this.$store.state.appInfo.configuration)

      // check OS
      var os = require('os')
      this.$store.state.appInfo.platform = os.platform()
      this.$router.push('/input2')
    },

  }
}
</script>
