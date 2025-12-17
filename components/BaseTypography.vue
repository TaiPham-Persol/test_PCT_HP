<template>
  <component :is="tag" :id="id" :class="textClasses" :style="textStyles">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseTypography',
  props: {
    font: {
      type: String,
      default: 'Roboto',
      validator: (value) => ['Roboto', 'Noto Sans'].includes(value),
    },

    size: {
      type: String,
      default: 'size_16',
      validator: (value) =>
        [
          'size_10',
          'size_12',
          'size_14',
          'size_16',
          'size_18',
          'size_20',
          'size_24',
          'size_28',
          'size_32',
          'size_36',
          'size_48',
          'size_80',
        ].includes(value),
    },

    weight: {
      type: String,
      default: 'regular',
      validator: (value) =>
        ['light', 'regular', 'medium', 'semibold', 'bold'].includes(value),
    },

    truncate: {
      type: Boolean,
      default: false,
    },

    lineClamp: {
      type: [String, Number],
      default: 'none',
    },

    tag: {
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

    color: {
      type: String,
      default: '#333333',
    },
    id: {
      type: String,
      default: null,
    },
  },

  computed: {
    textClasses() {
      return [
        'base-text',
        `font-${this.underscoreToHyphen(this.font)}`,
        `size-${this.underscoreToHyphen(this.size)}`,
        `weight-${this.underscoreToHyphen(this.weight)}`,
        {
          truncate: this.truncate,
          'line-clamp': this.lineClamp !== 'none',
        },
      ];
    },

    textStyles() {
      const styles = {
        fontFamily: `${this.font}, sans-serif`,
      };

      if (this.color) {
        styles.color = this.color;
      }

      if (this.lineClamp !== 'none') {
        styles['-webkit-line-clamp'] = this.lineClamp;
      }

      return styles;
    },
  },

  methods: {
    underscoreToHyphen(str) {
      return str.replace(/_/g, '-');
    },
  },
};
</script>

<style lang="scss" scoped>
h2::after {
  display: none;
}

.base-text {
  line-height: 150%;
  margin: 0;
  padding: 0;

  &.size-size-10 {
    font-size: 10px;
  }

  &.size-size-12 {
    font-size: 12px;
  }

  &.size-size-14 {
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  &.size-size-16 {
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  &.size-size-18 {
    font-size: 18px;
  }

  &.size-size-20 {
    font-size: 16px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  &.size-size-24 {
    font-size: 20px;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  &.size-size-28 {
    font-size: 28px;
  }

  &.size-size-32 {
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  &.size-size-36 {
    font-size: 36px;
  }

  &.size-size-48 {
    font-size: 32px;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }

  &.size-size-80 {
    font-size: 48px;

    @media (min-width: 768px) {
      font-size: 80px;
    }
  }

  &.weight-light {
    font-weight: 300;
  }

  &.weight-regular {
    font-weight: 400;
  }

  &.weight-medium {
    font-weight: 500;
  }

  &.weight-semibold {
    font-weight: 600;
  }

  &.weight-bold {
    font-weight: 700;
  }

  &.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.line-clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-wrap: wrap;
  }
}
</style>
