<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div>
    <h1>List feed</h1>

    <ul>
      <li v-for="tweet in tweets">
        {{ tweet }}
      </li>
    </ul>
  </div>
</template>
