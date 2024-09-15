<script setup lang="ts"></script>

<template>
  <div class="pt-12 px-4 flex flex-col items-center justify-center">
    <NuxtImg src="/list.png" />
    <div class="pt-4 space-y-3 px-3">
      <p class="text-center text-2xl font-semibold">Оформление заказа</p>
      <p>
        Чтобы оформить заказ скопируйте текст ниже и отправьте его нашему
        <span class="underline">менеджеру</span>.
      </p>
    </div>
    <div class="bg-telegram-bg-secondary p-5 rounded-[20px] mt-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error
      commodi esse quae aliquam quidem ipsam dolore harum totam voluptatum!
      Itaque ut error alias cumque. Ex neque, impedit quae ducimus laboriosam
      reprehenderit harum molestiae nobis facilis labore quasi fugiat aliquid.
    </div>

    <button
      class="mt-5 bg-telegram-btn p-2 rounded-lg text-telegram-btn-text inline-flex items-center gap-x-0.5 uppercase text-sm"
    >
      <IconsCopy />
      Скопировать
    </button>
    <NuxtLink to="/result">back</NuxtLink>
  </div>
</template>
