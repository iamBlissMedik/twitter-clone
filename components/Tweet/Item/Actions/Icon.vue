<script setup>
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/vue/24/solid";
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="flex items-center text-gray-400 cursor-pointer group">
    <div
      :class="`p-2 rounded-full group-hover:bg-blue-100 group-hover:text-blue-400 dark:group-hover:bg-opacity-20 ${defaultTransition}`"
    >
      <ChatBubbleOvalLeftEllipsisIcon class="w-5 h-5" />
    </div>
    <span class="ml-1 group-hover:text-blue-400"> 5 {{ color }} </span>
  </div>
</template>
