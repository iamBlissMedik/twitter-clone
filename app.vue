<script setup>
const darkMode = ref(false);
</script>

<template>
  <div :class="{ dark: darkMode }">
    <h1 class="text-red-500 dark:text-dim-500">Twitter clone</h1>
  </div>
</template>
