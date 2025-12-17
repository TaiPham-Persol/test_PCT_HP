/**
 * Social network sharing URLs
 */
export const SOCIAL_NETWORKS = {
  facebook: (url: string) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  twitter: (url: string, text?: string) => {
    const baseUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}`;
    return text ? `${baseUrl}&text=${encodeURIComponent(text)}` : baseUrl;
  },
  linkedin: (url: string, title?: string) => {
    const baseUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    return title ? `${baseUrl}&title=${encodeURIComponent(title)}` : baseUrl;
  },
  line: (url: string, text?: string) => {
    const baseUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      url
    )}`;
    return text ? `${baseUrl}&text=${encodeURIComponent(text)}` : baseUrl;
  },
};

/**
 * Opens a social network share dialog in a popup window
 * @param network - The social network to share to
 * @param url - The URL to share
 * @param title - Optional title for the share
 * @param text - Optional text/description for the share
 */
export const shareToSocialNetwork = (
  network: keyof typeof SOCIAL_NETWORKS,
  url: string,
  title?: string,
  text?: string
): void => {
  const shareUrl = SOCIAL_NETWORKS[network](url, text || title);
  const width = 600;
  const height = 400;
  const left = (globalThis.screen.width - width) / 2;
  const top = (globalThis.screen.height - height) / 2;
  const features = `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`;

  globalThis.open(shareUrl, '_blank', features);
};
