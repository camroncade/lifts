<template>
  <div>

    <div class="container" style="padding: 1rem;">
      <h1 class="title is-pulled-left">Workouts</h1>
      <button class="button is-primary is-pulled-right" @click="addNew = true">Add workout</button>
    </div>

    <div style="clear: both"></div>

    <nav class="panel" v-show="workouts.length > 0">
      <template v-for="workout in workouts">
      <router-link class="panel-block" :to="'/workouts/' + workout.key">{{ workout.name }}</router-link>
      </template>
    </nav>

    <div class="modal is-active" v-show="addNew">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add new workout</p>
          <button class="delete" @click="addNew = false"></button>
        </header>
        <section class="modal-card-body">
          <label class="label">Name</label>
          <p class="control">
            <input type="text" class="input" placeholder="Name" v-model="newWorkout.name">
          </p>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-primary" @click="saveNewWorkout">Add new workout</a>
          <a class="button" @click="addNew = false">Cancel</a>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'workouts-route',
  props: ['workouts'],
  data: function () {
    return {
      addNew: false,
      newWorkout: { name: '', lifts: [] },
    }
  },
  methods: {
    saveNewWorkout: function () {
      this.workouts.push({ key: this.workouts.length, name: this.newWorkout.name, lifts: [] });
      this.addNew = false;
      this.newWorkout.name = '';
      this.$emit('data-changed');
    }
  },
}
</script>

<styles>

</style>
