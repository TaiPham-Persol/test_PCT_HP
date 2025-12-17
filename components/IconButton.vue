<template>
  <span
    class="btn-arrow cursor-pointer w-[42px] md:w-[60px] h-[42px] md:h-[60px] rounded-full flex items-center justify-center relative overflow-hidden"
    :class="[direction, variant, tone]"
    @mouseover="$el.classList.add('hovered')"
    @mouseleave="$el.classList.remove('hovered')"
    @click="handleClick"
  >
    <div
      class="btn-content flex items-center justify-center rounded-full bg-white"
    />

    <div class="icon-wrapper w-6 h-6 overflow-hidden absolute">
      <div class="current-icon">
        <img :src="require(`@/assets/images/${icon}.svg`)" :alt="icon" />
      </div>

      <div class="fallback-icon">
        <img :src="require(`@/assets/images/${icon}.svg`)" alt="arrow" />
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'right',
      validate: (value) => ['left', 'right', 'top', 'bottom'].includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validate: (value) => ['primary', 'secondary'].includes(value),
    },
    tone: {
      type: String,
      default: 'light',
      validate: (value) => ['light', 'dark'].includes(value),
    },
  },
  emits: ['click'],
  data() {
    return {
      handleClick: () => {
        this.$emit('click');
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.btn-arrow {
  background-color: rgba(255, 255, 255, 0.5);

  .btn-content {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
    transform: scale(0.8);
  }

  .icon-wrapper {
    transition: transform 0.3s ease;
  }

  .current-icon,
  .fallback-icon {
    width: 100%;
    position: absolute;
    transition: transform 0.3s ease;
  }

  // Tone variants
  &.dark {
    background-color: rgba(255, 184, 28, 0.5);

    .btn-content {
      background-color: rgb(255, 184, 28);
    }
  }

  // Hover effects
  &.hovered .btn-content {
    transform: scale(1);
  }

  // Direction variants
  &.left {
    .fallback-icon {
      transform: translateX(100%);
    }

    &.hovered .current-icon {
      transform: translateX(-100%);
    }

    &.hovered .fallback-icon {
      transform: translateX(0);
    }
  }

  &.right {
    .fallback-icon {
      transform: translateX(-100%);
    }

    &.hovered .current-icon {
      transform: translateX(100%);
    }

    &.hovered .fallback-icon {
      transform: translateX(0);
    }
  }

  // Variant: secondary
  &.secondary {
    .btn-content {
      transform: scale(0.1);
    }

    .fallback-icon {
      display: none;
    }

    &.left .icon-wrapper {
      transform: translateX(200%);
    }

    &.right .icon-wrapper {
      transform: translateX(-200%);
    }

    &.hovered .btn-content {
      transform: scale(0.8);
    }

    &.hovered .icon-wrapper,
    &.hovered .current-icon {
      transform: translateX(0);
    }
  }
}
</style>
