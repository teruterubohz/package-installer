<template>
  <div class="body">
    <div class="navi">
      <h1>{{ $t("msg001") }}</h1>
      <br/>
      <h2 align="left" style="background-color:gold">{{ $t("msg101")}}</h2>
      <h2 align="left" >{{ $t("msg201")}}</h2>
      <h2 align="left" >{{ $t("msg301")}}</h2>
      <h2 align="left" >{{ $t("msg401")}}</h2>
    </div>
    <div class="title">
      <h1 align="left">{{ $t("msg101") }}</h1>
    </div>
    <div class="description">
       <h2 align="left">{{ $t("msg102") }}</h2>
       <h2 align="left">{{ $t("msg103") }}</h2>
    </div>
    <div class="main">
    </div>
    <div class="footer">
      <form @submit.prevent="submit">
        {{ $t("msg104")}}:
        <input v-model="$store.state.userForm.email">
        <button type="submit">{{ $t("msg002")}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import cpBackground from './ComponentsBackground'

export default {
  methods: {
    submit () {
      // validate data and do somethings ...

      this.$router.push('/input2')
    },
    window:onload = function(event){
      alert('get Team List')
      // Get team list file from wevdav.
//      var childProcess = require('child_process')
//      childProcess.exec('wget -P ./src/assets/ http://cms-dev.ark.bb.local/webdav/dlModule/Handsontable/0.14.1/templateinfo.json')
      // Set team list to drop down list.
      cpBackground.get_teams_confs()
    }    
  }
}
</script>
