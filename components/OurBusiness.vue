<template>
  <section class="our-business pt-[80px] pb-[50px] md:py-[90px]">
    <div class="left">
      <BaseTypography
        tag="h2"
        class="title"
        size="size_80"
        weight="light"
        font="Roboto"
      >
        Our Business
      </BaseTypography>

      <BaseTypography font="Noto Sans" class="mb-5">
        PERSOL CAREER TECH STUDIO VIETNAM is a technology development center
        established in Ho Chi Minh City, Vietnam, by PERSOL CAREER Co., Ltd., a
        core company of the PERSOL Group—one of Japan's largest HR service
        companies, comprising 149 companies worldwide with over 70,000
        employees.
      </BaseTypography>

      <BaseTypography font="Noto Sans">
        The studio is responsible for developing various service systems
        provided by PERSOL CAREER, including "doda," a recruitment platform with
        approximately 9.5 million users.
      </BaseTypography>
    </div>

    <div class="right">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/our-business/our-business-pc.png"
        />
        <img
          src="@/assets/images/our-business/our-business-sp.png"
          alt="Our Business"
          class="img"
        />
      </picture>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mb-5 {
  margin-bottom: 20px;
}

.our-business {
  display: flex;
  align-items: center;
  gap: 60px;

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .left {
    flex-shrink: 0;
    width: 100%;

    @media (min-width: 768px) {
      width: 52.3648%;
    }

    .title {
      margin-bottom: 50px;

      @media (min-width: 768px) {
        margin-bottom: 40px;
      }
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;

    .img {
      width: 100%;
      height: auto;
      max-width: 100%;
      object-fit: contain;
      display: block;
    }
  }
}
</style>
