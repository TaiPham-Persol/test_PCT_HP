/**
 * Opens the default email client with a pre-filled email
 * @param email - The recipient email address
 * @param subject - Optional email subject line
 * @param body - Optional email body content
 */
export const openMailto = (email: string, subject?: string): void => {
  if (!email) {
    console.warn('No email address provided to openMailto');
    return;
  }

  let mailtoUrl = `mailto:${email}`;
  const params: string[] = [];

  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }

  if (params.length > 0) {
    mailtoUrl += `?${params.join('&')}`;
  }

  globalThis.location.href = mailtoUrl;
};

/**
 * Opens the default email client for job application
 * @param email - The recipient email address
 * @param jobTitle - The job title being applied for
 */
export const openJobApplicationEmail = (
  email: string,
  jobTitle: string
): void => {
  const subject = `Application for ${jobTitle}`;

  openMailto(email, subject);
};
