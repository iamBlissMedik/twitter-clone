<script setup>
const { getTweets } = useTweets();

const loading = ref(false);
const searchTweets = ref([]);
const searchQuery = useRoute().query.q;
onMounted(() => {
  getSearchedTweets();
});
watch(
  () => useRoute().fullPath,
  () => getSearchedTweets()
);
const getSearchedTweets = async () => {
  loading.value = true;

  try {
    const { tweets } = await getTweets({
      query: searchQuery,
    });

    searchTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
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
