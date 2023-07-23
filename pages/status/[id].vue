<script setup>
import { onBeforeMount } from "vue";
const loading = ref(false);
const tweet = ref(null);
const { getTweetById } = useTweets();
const { useAuthUser } = useAuth();
const user = useAuthUser();

const getTweetIdFromRoute = () => {
  return useRoute().params.id;
};

const getTweet = async () => {
  loading.value = true;
  try {
    const response = await getTweetById(getTweetIdFromRoute());

    tweet.value = await response.tweet;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
watch(
  () => useRoute().fullPath,
  () => getTweet()
);
onBeforeMount(() => {
  getTweet();
});
</script>
<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <title> </title>
      </Head>
      <TweetDetails :tweet="tweet" :user="user" />
    </MainSection>
  </div>
</template>
