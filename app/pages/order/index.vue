<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center justify-center px-4 pt-12">
    <NuxtImg src="/list.png" />
    <div class="space-y-3 px-3 pt-4">
      <p class="text-center text-2xl font-semibold">Оформление заказа</p>
      <p>
        Чтобы оформить заказ скопируйте текст ниже и отправьте его нашему
        <span class="underline">менеджеру</span>.
      </p>
    </div>
    <div class="bg-telegram-bg-secondary mt-5 rounded-[20px] p-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error
      commodi esse quae aliquam quidem ipsam dolore harum totam voluptatum!
      Itaque ut error alias cumque. Ex neque, impedit quae ducimus laboriosam
      reprehenderit harum molestiae nobis facilis labore quasi fugiat aliquid.
    </div>

    <button
      class="bg-telegram-btn text-telegram-btn-text mt-5 inline-flex items-center gap-x-0.5 rounded-lg p-2 text-sm uppercase"
    >
      <IconsCopy />
      Скопировать
    </button>
    <NuxtLink to="/result">back</NuxtLink>
  </div>
</template>
