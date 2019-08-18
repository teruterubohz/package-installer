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
      <h3 align="left">{{ $t("msg202") }}</h3>      
    </div>

    <div class="main" align="left">
      <h3 align="left">{{ $t("msg203") }}</h3>      
      <img src = "../assets/box.jpg" />
    

    </div>
    <div class="footer" align="left">
        <router-link to="/input1">
          <button>{{ $t("msg003")}}</button>
        </router-link>
      <form @submit.prevent="submit" align="left">
        <button type="submit">{{ $t("msg002")}}</button>
      </form>        
 <!--       <button type="submit">{{ $t("msg002")}}</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      img1: '../assets/excramation.jpg',
      img2: '../assets/box.jpg'
    }
  },
  methods: {
    submit () {
      alert('##########submit2########## ')
      // validate data and do somethings ...

      this.$router.push('/confirm')
    }
  }
}
</script>
