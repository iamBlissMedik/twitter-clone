<script setup>
const { useAuthUser, initAuth, useAuthLoading } = useAuth();

const isAuthLoading = useAuthLoading();
const user = useAuthUser();
const {
  closePostTweetModal,
  usePostTweetModal,
  openPostTweetModal,
  useReplyTweet,
} = useTweets();
const postTweetModal = usePostTweetModal();
const emitter = useEmitter();
const replyTweet = useReplyTweet();
emitter.$on("replyTweet", (tweet) => {
  openPostTweetModal(tweet);
});
const darkMode = ref(false);
onBeforeMount(() => {
  initAuth();
});
const handleFormSuccess = (tweet) => {
  closePostTweetModal();
};
const handleModalCose = () => {
  closePostTweetModal();
};
const handleOpenTweetModal = () => {
  openPostTweetModal(null);
};
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <LoadingPage v-if="isAuthLoading" />

      <!-- app -->
      <div v-else-if="user" class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- left side bar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SideBarLeft @onTweet="handleOpenTweetModal" />
            </div>
          </div>
          <!--middle/main content  -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <RouterView />
          </main>
          <!-- right side bar -->
          <div
            class="hidden col-span-12 md:block xs-col-span-1 xl:col-span-4 md:col-span-3"
          >
            <div class="sticky top-0">
              <SideBarRight />
            </div>
          </div>
        </div>
      </div>
      <AuthPage v-else />
      <UIModal :isOpen="postTweetModal" @onClose="handleModalCose">
        <TweetForm
          :replyTo="replyTweet"
          showReply
          :user="user"
          @onSuccess="handleFormSuccess"
        />
      </UIModal>
    </div>
  </div>
</template>
