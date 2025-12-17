<template>
  <client-only>
    <BaseOverlay :is-open="isOpen" @close="$emit('close')">
      <div
        class="flex flex-col gap-5 p-5 md:p-10 bg-white rounded-[10px] max-w-[90vw] md:max-w-[500px] w-full"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex flex-col gap-2.5">
          <h3
            class="font-roboto font-medium text-xl md:text-2xl leading-[150%] text-black m-0"
          >
            Share this job
          </h3>
          <p
            class="font-notosan font-normal text-sm md:text-base leading-5 md:leading-6 text-black m-0"
          >
            {{ title }}
          </p>
        </div>

        <!-- Social Network Buttons -->
        <div class="flex flex-col gap-3">
          <button
            v-for="network in socialNetworks"
            :key="network.id"
            class="flex flex-row items-center gap-4 p-4 bg-gray00 hover:bg-gray01 rounded-[10px] transition-colors cursor-pointer border-none w-full"
            @click="handleShare(network.id)"
          >
            <span class="text-2xl flex-shrink-0">{{ network.emoji }}</span>
            <span
              class="font-notosan font-bold text-sm md:text-base leading-[150%] text-black text-left"
            >
              Share on {{ network.name }}
            </span>
          </button>

          <!-- Copy Link Button -->
          <button
            class="flex flex-row items-center gap-4 p-4 bg-gray00 hover:bg-gray01 rounded-[10px] transition-colors cursor-pointer border-none w-full"
            @click="handleCopyLink"
          >
            <svg
              class="w-6 h-6 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span
              class="font-notosan font-bold text-sm md:text-base leading-[150%] text-black text-left"
            >
              Copy link
            </span>
          </button>
        </div>

        <!-- Close Button -->
        <button
          class="flex flex-row justify-center items-center gap-2 py-3 px-6 bg-gray04 hover:bg-black rounded-[10px] transition-colors cursor-pointer border-none"
          @click="$emit('close')"
        >
          <span
            class="font-notosan font-bold text-sm md:text-base leading-5 md:leading-6 text-white"
          >
            Close
          </span>
        </button>
      </div>
    </BaseOverlay>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { shareToSocialNetwork, SOCIAL_NETWORKS } from '@/utils/share';

interface SocialNetwork {
  id: keyof typeof SOCIAL_NETWORKS;
  name: string;
  color: string;
  emoji: string;
}

/**
 * ShareModal component
 *
 * A modal dialog that provides social network sharing options
 * Displays buttons for Facebook, Twitter, LinkedIn, and LINE sharing
 *
 * @example
 * <ShareModal
 *   :is-open="showShareModal"
 *   :title="jobTitle"
 *   :url="shareUrl"
 *   @close="showShareModal = false"
 * />
 */
export default defineComponent({
  name: 'ShareModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
  emits: ['close'],
  data() {
    return {
      socialNetworks: [
        {
          id: 'facebook' as const,
          name: 'Facebook',
          color: '#1877f2',
          emoji: '📘',
        },
        {
          id: 'twitter' as const,
          name: 'Twitter',
          color: '#1da1f2',
          emoji: '🐦',
        },
        {
          id: 'linkedin' as const,
          name: 'LinkedIn',
          color: '#0a66c2',
          emoji: '💼',
        },
        {
          id: 'line' as const,
          name: 'LINE',
          color: '#00b900',
          emoji: '💬',
        },
      ] as SocialNetwork[],
    };
  },
  methods: {
    /**
     * Handles sharing to a specific social network
     */
    handleShare(network: keyof typeof SOCIAL_NETWORKS) {
      shareToSocialNetwork(network, this.url, this.title, this.text);
      this.$emit('close');
    },
    /**
     * Copies the URL to clipboard
     */
    async handleCopyLink() {
      try {
        await navigator.clipboard.writeText(this.url);
        // eslint-disable-next-line no-alert
        alert('Link copied to clipboard!');
        this.$emit('close');
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        // eslint-disable-next-line no-alert
        alert('Failed to copy link. Please copy manually.');
      }
    },
  },
});
</script>
