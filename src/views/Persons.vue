<template>
  <div>
    <h1 class="mt-3">List of all Persons</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Birthdate</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="person.id" v-for="person in persons">
          <td>
            <router-link v-bind:to="'/persons/' + person.id">
              {{ person.id }}
            </router-link>
          </td>
          <td>
            {{ person.name }}
          </td>
          <td>
            {{ person.birthdate }}
            <!-- convert person.birthdate from seconds to a date string -->
            <!-- {{ (new Date(person.birthdate * 1000)).toISOString() }} -->
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/create-person">+ Add Person</router-link>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data: function () {
    return {
      persons: [
        {
          id: 1,
          name: "Myles Popley",
          birthdate: 372019027,
        },
        {
          id: 2,
          name: "Reine Steers",
          birthdate: 1056149025,
        },
      ],
    };
  },
/*   mounted: function () {
    axios.get("http://localhost:8080/infections/persons").then((response) => {
      this.persons = response.data;
    });
  }, */
};
</script>