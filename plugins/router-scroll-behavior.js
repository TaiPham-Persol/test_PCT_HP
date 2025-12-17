function routerScrollBehavior(to, from, savedPosition) {
  const beforeEls = [
    '#our-business-highlights',
    '#our-business-strength',
    '#our-business-service',
  ];
  const elsNeedToCheck = [
    '#about-us-profile',
    '#about-us-message',
    '#about-us-mission',
  ];

  const listStaticSection = [
    '.our-business-profile-section',
    '.our-business-message-section',
    '.our-business-mission-section',
  ];

  if (
    window.innerWidth >= 1024 &&
    to.path === from.path &&
    elsNeedToCheck.includes(to.hash) &&
    !beforeEls.includes(from.hash)
  ) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const listHeight = listStaticSection.map((selector) => {
          const el = document.querySelector(selector);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.height;
          }
          return 0;
        });

        const currentEl = document.querySelector(to.hash);

        let distanceFromTop =
          window.pageYOffset + currentEl.getBoundingClientRect().top - 110;

        if (currentEl) {
          if (
            to.hash === '#about-us-profile' &&
            window.pageYOffset >= distanceFromTop
          ) {
            if (from.hash === '#about-us-message') {
              distanceFromTop -= listHeight[0];
            } else {
              distanceFromTop = distanceFromTop - listHeight[1] - listHeight[2];
            }
          } else if (
            to.hash === '#about-us-message' &&
            window.pageYOffset >= distanceFromTop
          ) {
            distanceFromTop -= listHeight[1];
          }

          resolve({
            y: distanceFromTop,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          selector: to.hash,
          behavior: 'smooth',
          offset: { y: 110 },
        });
      }, 350);
    });
  }

  return { x: 0, y: 0 };
}

export default function routerScrollBehaviorPlugin({ app }) {
  if (process.client && app.router) {
    const { router } = app;
    if (router.options) {
      router.options.scrollBehavior = routerScrollBehavior;
    }
  }
}
