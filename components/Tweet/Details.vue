<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div>
    <TweetItem :tweet="tweet" />
    <TweetForm placeholder="Tweet your reply" :user="user" />
  </div>
</template>
