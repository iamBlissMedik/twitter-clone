<script setup>
const loading = ref(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>
<template>
  <div>
    <MainSection title="Home" :loading="false"> {{ user }} </MainSection>
  </div>
</template>
