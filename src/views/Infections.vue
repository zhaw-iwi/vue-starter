<template>
  <div>
    <h1 class="mt-3">List of all Infections</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Location</th>
          <th>Time</th>
          <th>Pathogen ID</th>
          <th>Person ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="infection in infections" :key="infection.id">
          <td>
            {{ infection.id }}
          </td>
          <td>
            {{ infection.location }}
          </td>
          <td>
            {{ infection.time }}
          </td>
          <td>
            {{ infection.pathogen_id }}
          </td>
          <td>
            {{ infection.person_id }}
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/create-infection">+ Add Infection</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      infections: [
        {
          id: 1,
          location: "Strömstad",
          time: 1585648613,
          pathogen_id: 33,
          person_id: 9,
        },
        {
          id: 2,
          location: "Al Bāţinah",
          time: 1580206932,
          pathogen_id: 19,
          person_id: 10,
        },
      ],
    };
  },
};
</script>