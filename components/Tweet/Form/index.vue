<script setup>
const props = defineProps({
    user: {
        type: Object,
        required:true
    }
})
</script>
<template>
    <div>
      <TweetFormInput :user="user"/>
    </div>
</template>


