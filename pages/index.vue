<script setup>
import { onBeforeMount } from "vue";
const { twitterBorderColor } = useTailwindConfig();
const { useAuthUser } = useAuth();
const { getTweets } = useTweets();
const user = useAuthUser();
const loading = ref(false);
const homeTweets = ref([]);

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { tweets } = await getTweets();
    homeTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
const handleFormSuccess = (tweet) => {
  return navigateTo({
    path: `/status/${tweet.id}`,
  });
};
</script>
<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" @onSuccess="handleFormSuccess" />
      </div>
      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>
