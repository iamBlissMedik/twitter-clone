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
const replies = computed(() => props.tweet?.replies || []);
const handleFormSuccess = (tweet) => {
  return navigateTo({
    path: `/status/${tweet.id}`,
  });
};
</script>
<template>
  <div>
    <TweetItem :tweet="tweet" />
    <TweetForm
      placeholder="Tweet your reply"
      :user="user"
      :replyTo="tweet"
      @onSuccess="handleFormSuccess"
    />
    <TweetListFeed :tweets="replies" />
  </div>
</template>
