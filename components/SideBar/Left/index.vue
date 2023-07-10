<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  PencilIcon,
} from "@heroicons/vue/24/outline";
const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <div class="h-screen flex flex-col">
    <div
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </NuxtLink>
    </div>
    <div class="mt-2 space-y-3">
      <SideBarLeftTab active>
        <template #icon>
          <HomeIcon />
        </template>
        <template #name> Home </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <BellIcon />
        </template>
        <template #name> Notifications </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <HashtagIcon />
        </template>
        <template #name> Explore </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <InboxIcon />
        </template>
        <template #name> Messages </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <BookmarkIcon />
        </template>
        <template #name> Bookmarks </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <DocumentTextIcon />
        </template>
        <template #name> Lists</template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <UserIcon />
        </template>
        <template #name> Profile </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <EllipsisHorizontalCircleIcon />
        </template>
        <template #name> More </template>
      </SideBarLeftTab>
      <div class="hidden xl:block">
        <UIButton liquid size="lg">
          <span class="font-bold"> Tweet </span>
        </UIButton>
      </div>
      <div class="block xl:hidden">
        <UIButton>
          <div class="w-6 h-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>
  </div>
</template>
