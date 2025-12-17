<template>
  <section class="kv">
    <video class="video-kv" autoplay loop muted playsinline>
      <source src="@/assets/videos/top.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="frame-26 px-[16px] py-[50px] sm:px-[50px]">
      <img
        class="group"
        src="@/assets/images/work_and_smile.svg"
        alt="work and smile"
      />
      <div class="text text-white text-[14px] sm:text-[24px]">
        PERSOL CAREER TECH STUDIO VIETNAM
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.kv {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  align-self: stretch;
  flex-shrink: 0;
  height: 100vh;
  position: relative;
}
.video-kv {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  aspect-ratio: 1400/800;
  object-fit: cover;
}
.frame-26 {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: flex-start;
  justify-content: flex-end;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.group {
  flex-shrink: 0;
  width: 750.97px;
  height: 80.8px;
  position: relative;
  overflow: visible;
}
.text {
  color: var(--color-white, #ffffff);
  text-align: left;
  font-family: var(--roboto-font-family, 'Roboto', sans-serif);
  line-height: 150%;
  font-weight: 500;
  position: relative;
  align-self: stretch;
}
</style>
