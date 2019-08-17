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
    </div>
    <div class="main">
    </div>
    <div class="footer">
    <form @submit.prevent="submit">
<!--
      <div>email: {{ email }}</div>
      <div>name: {{ name }}</div>
      <div>age: {{ age }}</div>
-->
      <router-link to="/input2">
        <button>{{ $t("msg003")}}</button>
      </router-link>
      <button type="submit">{{ $t("msg002")}}</button>
    </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      email: state => state.userForm.email,
      name: state => state.userForm.name,
      age: state => state.userForm.age
    })
  },
  methods: {
    ...mapMutations({
      clearUserForm: 'userForm/clear'
    }),
    ...mapActions({
      submitUserForm: 'userForm/submit'
    }),
    async submit () {
      await this.submitUserForm()

      this.clearUserForm()
      this.$router.push('/complete')
    }
  }
}
</script>
