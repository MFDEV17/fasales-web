<template>
  <div class="gradient-box">
    <slot />
  </div>
</template>

<style lang="scss">
.gradient-box {
  display: flex;
  align-items: center;
  width: 100%;

  position: relative;
  padding: 16px;
  box-sizing: border-box;

  $border: 2px;
  color: var(telegram-link);
  background: white;
  background-clip: padding-box;
  border: solid $border transparent;
  border-radius: 16px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(#ff004da8, #0029ffa8);
  }
}
</style>
