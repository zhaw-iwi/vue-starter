<template>
  <div>
    <h1 class="mt-3">Pathogen (ID: {{ pathogenId }})</h1>
    <p>ICD-10: {{ pathogen.icd10 }}</p>
    <p>Incubation: {{ pathogen.incubation }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pathogenId: this.$route.params.id,
      pathogen: {
        id: 1,
        icd10: "Y36450S",
        incubation: 17,
      },
    };
  },
};
</script>