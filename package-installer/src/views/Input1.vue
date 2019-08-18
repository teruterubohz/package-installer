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
        <b-form-select v-model="selectedTeam" v-on:change="fetchConfigs" :options="teams" class="col-10"/>
        <!-- v-on:clickでクリックイベントをmethodsのメソッドと紐付ける -->
        <!-- v-bind:で対象をdata要素と紐付ける。この場合はdisabledの状態をisUpdatingTeamListと紐付ける -->
<!--        <b-button v-on:click="onClickUpdateListBtn" v-bind:disabled="isUpdatingTeamList">リスト更新</b-button> -->
        <b-form-select v-model="selectedConfig" :options="configs" class="col-10"/>
      </div>

    </div>
    <div class="footer">
      <form @submit.prevent="submit">
        {{ $t("msg104")}}:
        <input v-model="$store.state.appInfo.email">      
        <button type="submit">{{ $t("msg002")}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { exec } from 'child_process'
import cpBackground from './ComponentsBackground'

export default {
  data() {
    return {
      teams: [ 'プロジェクトチーム名を選択' ],
      selectedTeam: '',
      isUpdatingTeamList: false,
      configs: [],
      selectedConfig: ''
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
    name: 'Input1',
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

      for (var i in jsonObject) {
        console.log('##########Config########## ')      
        var  temp = jsonObject[i]
        if( temp.name === this.selectedTeam ){
          for( var j in temp.configs ){
            console.log( temp.configs[j])
            this.configs.push( temp.configs[j])
          }
          return
        }
      }
    },

    submit () {
      // validate data and do somethings ...

      this.$router.push('/input2')
    },

  }
}
</script>
