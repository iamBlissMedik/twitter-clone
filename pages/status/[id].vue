<script setup>
const loading = ref(false);
const tweet = ref(null);
const { getTweetById } = useTweets();
const getTweetIdFromRoute = () => {
  return useRoute().params.id;
};

const getTweet = async () => {
  loading.value = true;
  try {
    const { tweet } = await getTweetById(getTweetIdFromRoute());
    tweet.value = tweet;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
onBeforeMount(() => getTweet());
</script>
<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <title> </title>
      </Head>

      {{ tweet }}
    </MainSection>
  </div>
</template>
