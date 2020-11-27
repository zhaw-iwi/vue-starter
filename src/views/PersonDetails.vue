<template>
  <div>
    <h1 class="mt-3">Person (ID: {{ personId }})</h1>
    <p>Name: {{ person.name }}</p>
    <p>Birthdate: {{ person.birthdate }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      personId: this.$route.params.id,
      person: {
        id: 1,
        name: "Myles Popley",
        birthdate: 372019027,
      },
    };
  },
};
</script>