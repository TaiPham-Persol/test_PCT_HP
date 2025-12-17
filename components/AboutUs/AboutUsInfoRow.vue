<template>
  <div
    class="flex w-full items-stretch md:flex-row flex-col py-5 md:py-0 border-t md:border-0 border-[--gray02]"
  >
    <div
      class="flex w-full items-center md:items-center md:w-[186px] lg:w-[186px] flex-shrink-0 pr-0 md:pr-8 lg:pr-8 py-0 md:py-3.5 pb-2.5"
    >
      <BaseTypography
        :tag="tagLabel"
        font="Noto Sans"
        size="size_16"
        weight="bold"
      >
        <slot name="label">{{ label }}</slot>
      </BaseTypography>
    </div>
    <div
      class="flex flex-1 items-start md:items-center min-w-0 pl-0 md:pl-8 lg:pl-8 py-0 md:py-3.5 border-l-0 md:border-l md:border-[--gray02]"
    >
      <BaseTypography :tag="tagDefault" font="Noto Sans" size="size_16">
        <slot />
      </BaseTypography>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsInfoRow',
  props: {
    label: {
      type: String,
      default: '',
    },
    tagDefault: {
      type: String,
      default: 'p',
      validator: (value) =>
        [
          'p',
          'span',
          'div',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'strong',
          'em',
          'small',
          'label',
        ].includes(value),
    },
    tagLabel: {
      type: String,
      default: 'p',
      validator: (value) =>
        [
          'p',
          'span',
          'div',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'strong',
          'em',
          'small',
          'label',
        ].includes(value),
    },
  },
};
</script>
