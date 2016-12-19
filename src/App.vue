<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link to="/workouts" class="nav-item is-tab">Workouts</router-link>
          <router-link to="/lifts" class="nav-item is-tab">Lifts</router-link>
        </div>
      </div>
    </nav>

    <router-view :lifts="lifts" :workouts="workouts" @data-changed="saveData"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      lifts: [],
      workouts: [],
    }
  },
  methods: {
    saveData () {
      localStorage.setItem('swegco-lifts', JSON.stringify({ lifts: this.lifts, workouts: this.workouts }));
    }
  },
  beforeMount: function () {
  var fromStorage = localStorage.getItem('swegco-lifts');

  if (fromStorage !== null) {
    var data = JSON.parse(fromStorage);
    this.lifts = data.lifts;
    this.workouts = data.workouts;
  }
},
}
</script>

<style>

</style>
