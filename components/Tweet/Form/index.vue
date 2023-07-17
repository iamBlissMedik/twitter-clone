<script setup>
const loading = ref(false);
const { postTweet } = useTweets();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    default: "What's happening ?",
  },
});
const handleFormSubmit = async (data) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
    });
    alert(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div>
      <TweetFormInput
        :placeholder="placeholder"
        :user="user"
        @onSubmit="handleFormSubmit"
      />
    </div>
  </div>
</template>
