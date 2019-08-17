<template>
  <div>
    <h1>ホームhome</h1>

    <ul>
      <li>
        <router-link to="/dynamic_component_test">Dynamic component test</router-link>
      </li>
      <li>
        <router-link to="/sync_test">.sync test</router-link>
      </li>
      <li>
        <router-link to="/without_vuex">Vuexなし</router-link>
      </li>
      <li>
        <router-link to="/input1">Vuexあり</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
