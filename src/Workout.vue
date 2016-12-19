<template>
  <div>
    <div class="container" style="padding: 1rem">
          <h1 class="title is-pulled-left">{{ workout.name }}</h1>
          <button class="button is-primary is-pulled-right" @click="editMode = true" v-show="! editMode">Edit</button>
          <button class="button is-info is-pulled-right" @click="editMode = false" v-show="editMode">Save</button>
    </div>

    <table class="table">
      <tr v-for="lift in liftObjects">
        <td style="vertical-align: middle; text-align: center;"><input type="checkbox" class="checkbox"></td>
        <td style="vertical-align: middle;">{{ lift.name }}</td>
        <td><input type="text" class="input weight" v-model="lift.weight" @input="$emit('data-changed')" style="width: 3rem"></td>
        <td v-show="editMode"><span class="icon is-small" style="cursor: pointer; padding-top: 0.5rem;" @click="removeLift(lift)"><i class="fa fa-trash" aria-hidden="true"></i></span></td>
      </tr>
    </table>

    <div class="container" style="padding: 1rem;" v-show="editMode">
      <p class="control">
        <select class="select" style="width: 100%;" v-model="newLift">
          <option v-for="lift in lifts" v-bind:value="lift.id">
            {{ lift.name }}
          <option>
        </select>
      </p>
      <button class="button is-outline" style="width: 100%;" @click="addLift">Add lift to workout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workout',
  props: ['workouts', 'lifts'],
  data: function () {
    return {
      workout: {},
      liftObjects: [],
      editMode: false,
      newLift: null,
    }
  },
  computed: {
    liftObjects: function () {
      var that = this;
      return this.workout.lifts.map(function (item) {
        return that.lifts[item];
      });
    },
  },
  methods: {
    removeLift: function (lift) {
      this.workout.lifts.splice(this.workout.lifts.indexOf(lift.id), 1);
      this.$emit('data-changed');
    },
    addLift: function () {
      this.workout.lifts.push(this.newLift);
      this.$emit('data-changed');
    }
  },
  created: function () {
    this.workout = this.workouts[this.$route.params.id];
  },
}
</script>
