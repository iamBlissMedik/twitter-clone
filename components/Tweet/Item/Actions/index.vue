<script setup>
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
} from "@heroicons/vue/24/outline";
const emits = defineEmits(["onCommentClick"]);
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
const showStats = computed(() => props.compact);
const size = computed(() => (props.compact ? 5 : 8));
const generateRandomNumber = () => Math.floor(Math.random() * 100);
</script>
<template>
  <div class="flex items-center justify-around w-full">
    <TweetItemActionsIcon
      color="blue"
      @onClick="emits('onCommentClick')"
      :size="size"
    >
      <template v-slot:icon="{ classes }">
        <ChatBubbleOvalLeftEllipsisIcon :class="classes" />
      </template>

      <template v-slot:default v-if="showStats">{{
        tweet.repliesCount
      }}</template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <ArrowPathIcon :class="classes" />
      </template>

      <template v-slot:default v-if="showStats">
        {{ generateRandomNumber() }}</template
      >
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>

      <template v-slot:default v-if="showStats">
        {{ generateRandomNumber() }}</template
      >
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <ArrowUpTrayIcon :class="classes" />
      </template>

      <template v-slot:default v-if="showStats">
        {{ generateRandomNumber() }}</template
      >
    </TweetItemActionsIcon>
  </div>
</template>
