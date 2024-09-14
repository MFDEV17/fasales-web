<template>
  <DialogRoot>
    <DialogTrigger as-child>
      <p class="text-telegram-link mt-5 cursor-pointer text-sm underline">
        Список товаров запрещённых к пересылке
      </p>
    </DialogTrigger>
    <DialogPortal>
      <DialogContent
        class="text-telegram-text data-[state=open]:animate-contentShow bg-telegram-bg-secondary fixed left-[50%] top-[50%] z-[100] h-full max-h-[80dvh] w-[90vw] max-w-screen-md translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-2xl outline-none"
      >
        <div class="flex flex-col items-center justify-center space-y-6 pt-6">
          <NuxtImg src="sad-face.png" />

          <div class="flex flex-col space-y-6 px-6">
            <p>
              К сожалению, из Европы в Россию можно отправлять не все товары.
            </p>

            <div class="space-y-4">
              <h3 class="text-2xl font-semibold">Запрещено к пересылке</h3>
              <ul class="list-inside list-disc">
                <li>Запчасти для машин</li>
                <li>Духи и жидкости</li>
                <li>Техника</li>
                <li>Мебель</li>
                <li>Лекарства</li>
              </ul>
            </div>

            <DialogClose as-child>
              <button
                class="bg-telegram-btn text-telegram-btn-text self-center rounded-lg px-2.5 py-2 uppercase outline-none"
              >
                понятно
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
