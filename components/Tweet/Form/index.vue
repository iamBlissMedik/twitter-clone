<script setup>
const { postTweet } = useTweets();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const handleFormSubmit = async (data) => {
   try {
       const response = await postTweet(data)
    console.log(response)
   } catch (error) {
    console.log(error)
   }
};
</script>
<template>
  <div>
    <TweetFormInput :user="user" @onSubmit="handleFormSubmit" />
  </div>
</template>
