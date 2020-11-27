<template>
  <div>
    <h1 class="mt-3">Add a person</h1>

    <form>
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" type="text" v-model="name" />
      </div>
      <!--       <div class="form-group">
        <label>Birthdate</label>
        <input class="form-control" type="date" v-model="birthdate" />
      </div> -->
      <div class="form-group">
        <label>Birthdate</label>
        <input class="form-control" type="number" v-model="birthdate" />
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
      //let date = new Date(this.birthdate);
      //let date_seconds = date.valueOf() / 1000; // convert to seconds since 1970

      console.log("adding person: " + JSON.stringify(this.person));

      // reset input fields
      this.person = {};

      // set the focus to the "Name" input
      //this.$refs.name.focus();
    },
  },
};
</script>