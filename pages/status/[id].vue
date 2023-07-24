<script setup>
const loading = ref(false);
const tweet = ref(null);

const { getTweetById } = useTweets();
const { useAuthUser } = useAuth();
const user = useAuthUser();
const route = useRoute();

const getTweet = async () => {
  loading.value = true;
  try {
    const response = await getTweetById(route.params.id);

    tweet.value = response.tweet;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

watch(
  () => useRoute().fullPath,
  async () => await getTweet()
);
onBeforeMount(async () => {
  await getTweet();
});
</script>
<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <title> </title>
      </Head>
      <div v-if="tweet">
        <TweetDetails :tweet="tweet" :user="user" />
      </div>
    </MainSection>
  </div>
</template>
