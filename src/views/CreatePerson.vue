<template>
  <div>
    <h1 class="mt-3">Add a person</h1>

    <form>
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" type="text" v-model="person.name" />
      </div>
      <div class="form-group">
        <label>Birthdate</label>
        <input class="form-control" type="number" v-model="person.birthdate" />
      </div>
      <button v-on:click="addPerson()" type="button" class="btn btn-primary">
        Add Person
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      person: {
        name: "",
        birthdate: null,
      },
    };
  },
  methods: {
    addPerson() {
      console.log("adding person: " + JSON.stringify(this.person));

      // reset input fields
      this.person = {};
    },
  },
};
</script>