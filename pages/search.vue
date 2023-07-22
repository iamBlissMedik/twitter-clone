<script setup>
const { getTweets: getTweetsComposable } = useTweets();

const loading = ref(false);
const searchTweets = ref([]);
const searchQuery = useRoute().query.q;
watch(
  () => useRoute().fullPath,
  () => getTweets()
);
const getTweets = async () => {
  loading.value = true;
  try {
    const { tweets } = await getTweetsComposable({
      query: searchQuery,
    });
    searchTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
onBeforeMount(async () => {
  getTweets();
});
</script>
<template>
  <div>
    <MainSection title="Search" :loading="loading">
      <Head>
        <title>Search</title>
      </Head>

      <TweetListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>
