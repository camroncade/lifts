<template>
  <div>
    <div class="container" style="padding: 1rem;">
      <h1 class="title is-pulled-left">Lifts</h1>
      <button class="button is-primary is-pulled-right" @click="addNew = true" v-show="! addNew">Add new lift</button>
    </div>

    <div style="clear: both"></div>

    <table class="table">
        <tr v-for="lift in lifts" :lift="lift" @data-changed="$emit('data-changed')" @edit-lift="editLift = lift">
          <td style="vertical-align: middle;">{{ lift.name }}</td>
          <td><input type="text" class="input weight" v-model="lift.weight" @input="$emit('data-changed')" style="width: 3rem"></td>
          <td style="vertical-align: middle;"><span class="icon is-small" @click="editLift = lift" style="cursor: pointer;"><i class="fa fa-pencil-square-o"></i></span></td>
        </tr>
    </table>

    <div class="modal is-active" v-show="addNew">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add new lift</p>
          <button class="delete" @click="addNew = false"></button>
        </header>
        <section class="modal-card-body">
          <label class="label">Name</label>
          <p class="control">
            <input type="text" class="input" placeholder="Name" v-model="newLift.name">
          </p>
          <label class="label">Weight</label>
          <p class="control">
            <input type="text" class="input" placeholder="Weight" v-model="newLift.weight">
          </p>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-primary" @click="saveNewLift">Add new lift</a>
          <a class="button" @click="addNew = false">Cancel</a>
        </footer>
      </div>
    </div>

    <div class="modal is-active" v-if="editLift != null">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit</p>
          <button class="delete" @click="editLift = null"></button>
        </header>
        <section class="modal-card-body">
          <label class="label">Name</label>
          <p class="control">
            <input type="text" class="input" placeholder="Name" v-model="editLift.name">
          </p>
          <label class="label">Weight</label>
          <p class="control">
            <input type="text" class="input" placeholder="Weight" v-model="editLift.weight">
          </p>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-primary" @click="editLift = null">Save changes</a>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['lifts'],
  data: function () {
    return {
      newLift: { name: '', weight: '' },
      addNew: false,
      editLift: null,
    }
  },
  methods: {
    saveNewLift: function () {
      this.addNew = false;
      this.lifts.push({ id: this.lifts.length ,name: this.newLift.name, weight: this.newLift.weight });
      this.newLift = { name: '', weight: '' };
      this.$emit('data-changed');
    }
  },
}
</script>

<style>
.table tr:hover .weight {
  background-color: #f5f5f5;
}

.weight {
  border: 0px;
  box-shadow: none;
}

.weight:hover {
  background-color: #f5f5f5;
}
</style>
