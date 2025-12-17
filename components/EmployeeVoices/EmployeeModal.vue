<template>
  <BaseOverlay class="px-5 py-[50px]" :is-open="isOpen" @close="onClose">
    <div
      :class="[
        'w-full max-w-[1080px] h-[700px] md:h-[640px] bg-white rounded-[10px] overflow-hidden modal-content relative',
        { closing: !isOpen },
      ]"
    >
      <div
        class="absolute top-5 right-[30px] md:top-10 md:right-10 flex item-center gap-[2px] md:gap-[10px] cursor-pointer z-[2] rounded-[6px] px-[10px] md:px-5 py-[6px] md:py-[10px] bg-gray00"
        @click="onClose"
      >
        <BaseTypography weight="bold" font="Noto Sans" class="text-center">
          Close
        </BaseTypography>
        <img src="@/assets/images/icon-x.svg" class="w-6 h-6" />
      </div>

      <div class="h-full overflow-y-auto scrollbar-smooth">
        <div class="modal-inner">
          <InterviewView :interview-id="interviewId" />
        </div>
      </div>
    </div>
  </BaseOverlay>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmployeeModal',
  props: {
    interviewId: {
      type: Number,
      default: null,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-content {
  transform: scale(0.95);
  opacity: 0;
  animation: modalContentIn 0.3s ease-out forwards;
}

.modal-inner {
  animation: fadeInUp 0.4s ease-out 0.1s both;
}

.scrollbar-smooth {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--gray02) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
}

@keyframes modalContentIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// Exit animation when modal closes
.modal-content.closing {
  animation: modalContentOut 0.2s ease-in forwards;
}

@keyframes modalContentOut {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.95);
    opacity: 0;
  }
}
</style>
