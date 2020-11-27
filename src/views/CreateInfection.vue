<template>
  <div>
    <h1 class="mt-3">Add an infection</h1>

    <form>
      <div class="form-group">
        <label>Location</label>
        <input class="form-control" type="text" v-model="infection.location" />
      </div>
      <div class="form-group">
        <label>Time</label>
        <input class="form-control" type="number" v-model="infection.time" />
      </div>
      <div class="form-group">
          <label>Pathogen ID</label>
          <select v-model="infection.pathogen_id" class="form-control">
              <option v-for="id in pathogen_ids" v-bind:key="id">{{ id }}</option>
          </select>
      </div>
      <div class="form-group">
          <label>Person ID</label>
          <select v-model="infection.person_id" class="form-control">
              <option v-for="id in persons_ids" v-bind:key="id">{{ id }}</option>
          </select>
      </div>

      <button v-on:click="addInfection()" type="button" class="btn btn-primary">
        Add Infection
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      infection: {
        location: null,
        time: null,
        pathogen_id: null,
        person_id: null,
      },
      persons_ids: [1,2,3,4],
      pathogen_ids: [5,6,7]
    };
  },
  methods: {
    addInfection() {
      console.log("adding infection: " + JSON.stringify(this.infection));

      // reset input fields
      this.infection = { }
    },
  },
};
</script>