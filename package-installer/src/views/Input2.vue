<template>
  <div class="body">
    <div class="navi">
      <h1>{{ $t("msg001") }}</h1>
      <br/>
      <h2 align="left" >{{ $t("msg101")}}</h2>
      <h2 align="left" style="background-color:gold">{{ $t("msg201")}}</h2>
      <h2 align="left" >{{ $t("msg301")}}</h2>
      <h2 align="left" >{{ $t("msg401")}}</h2>
    </div>
    <div class="title">
      <h2 align="left" >{{ $t("msg201")}}</h2>
    </div>
    <div class="description">
    </div>
    <div class="main">
      <form @submit.prevent="submit">
        <div>
          名前:
          <input v-model="$store.state.userForm.name">
        </div>
        <div>
          年齢:
          <input type="number" v-model.number="$store.state.userForm.age">
        </div>
        <router-link to="/input1">
          <button>{{ $t("msg003")}}</button>
        </router-link>
        <button type="submit">{{ $t("msg002")}}</button>
      </form>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit () {
      // validate data and do somethings ...

      this.$router.push('/confirm')
    }
  }
}
</script>
