<template>
  <div>
    <h1 class="mt-3">List of all Pathogens</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>ICD-10</th>
          <th>Incubation</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="pathogen.id" v-for="pathogen in pathogens">
          <td>
            <router-link v-bind:to="'/pathogens/' + pathogen.id">
              {{ pathogen.id }}
            </router-link>
          </td>
          <td>
            {{ pathogen.icd10 }}
          </td>
          <td>
            {{ pathogen.incubation }}
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/create-pathogen">+ Add Pathogen</router-link>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data: function () {
    return {
      pathogens: [],
    };
  },
  mounted: function () {
    this.pathogens = [
      {
        id: 1,
        icd10: "Y36450S",
        incubation: 17,
      },
      {
        id: 2,
        icd10: "T84318A",
        incubation: 5,
      },
    ];
    /*     axios.get("http://localhost:8080/infections/pathogens").then((response) => {
      this.pathogens = response.data;
    }); */
  },
};
</script>