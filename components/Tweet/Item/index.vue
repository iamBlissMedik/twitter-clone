<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});
const { twitterBorderColor } = useTailwindConfig();
</script>
<template>
  <div>
    <TweetItemHeader :tweet="tweet" />
    <div class="ml-16">
      <p class="flex-shrink w-auto font-medium text-gray-800">
        {{ tweet.text }}
      </p>
      <div
        v-for="image in tweet.mediaFiles"
        :key="image.id"
        class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor"
      >
        <img :src="image.url" class="w-full rounded-2xl" />
      </div>
      <div class="mt-2">
        action buttons
      </div>
    </div>
  </div>
</template>
