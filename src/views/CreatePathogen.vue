<template>
  <div>
    <h1 class="mt-3">Add a pathogen</h1>

    <form>
      <div class="form-group">
        <label>ICD-10</label>
        <input class="form-control" type="text" v-model="pathogen.icd10" />
      </div>
      <div class="form-group">
        <label>Incubation</label>
        <input class="form-control" type="number" v-model="pathogen.incubation" />
      </div>
      <button v-on:click="addPathogen()" type="button" class="btn btn-primary">
        Add Pathogen
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pathogen: {
        icd10: "",
        incubation: null,
      },
    };
  },
  methods: {
    addPathogen() {
      console.log("adding pathogen: " + JSON.stringify(this.pathogen));

      // reset input fields
      this.pathogen = {};
    },
  },
};
</script>