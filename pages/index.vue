<script setup>
const { twitterBorderColor } = useTailwindConfig();
const { useAuthUser } = useAuth();
const { getHomeTweets } = useTweets();
const user = useAuthUser();
const loading = ref(false);
const homeTweets = ref([]);
onBeforeMount(async () => {
  loading.value = true;
  try {
    const { tweets } = await getHomeTweets();
    homeTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
      </div>
      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>
