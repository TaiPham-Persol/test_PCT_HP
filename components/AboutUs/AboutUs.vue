<template>
  <section class="bg-white py-[50px] lg:pt-[180px] lg:pb-[100px]">
    <BaseTypography
      tag="h2"
      size="size_80"
      weight="light"
      font="Roboto"
      class="!mb-[50px] lg:!mb-10"
    >
      About Us
    </BaseTypography>

    <div class="flex flex-col gap-[70px] lg:gap-0">
      <!-- Company Profile Section -->
      <div
        class="our-business-profile-section static lg:sticky top-0 flex flex-col-reverse lg:flex-row items-center gap-10 xl:gap-[120px] bg-white py-0 md:py-[30px]"
      >
        <div
          class="flex items-center justify-center px-[15px] py-[69px] lg:px-[50px] lg:py-[134px] w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px] border border-solid border-[--gray05]"
        >
          <img
            src="@/assets/images/about-us/pct-logo.png"
            alt="PERSOL CAREER TECH STUDIO VIETNAM"
            class="w-full h-auto"
          />
        </div>

        <div class="flex min-w-0 flex-1 flex-col gap-10 md:gap-15 lg:gap-20">
          <BaseHeadline id="about-us-profile" tag="h2">
            Company Profile
          </BaseHeadline>

          <div class="flex flex-col gap-0 md:gap-5">
            <AboutUsInfoRow label="Company name">
              PERSOL CAREER TECH STUDIO VIETNAM COMPANY LIMITED
            </AboutUsInfoRow>

            <AboutUsInfoRow>
              <template #label>Address (Development Office)</template>
              <template #default>
                Floor 4, An Phu Plaza, 117-119 Ly Chinh Thang Street, Xuan Hoa
                Ward, Ho Chi Minh City, Vietnam
              </template>
            </AboutUsInfoRow>

            <AboutUsInfoRow label="Representative">
              Masatoshi Yamamoto / General Director
            </AboutUsInfoRow>

            <AboutUsInfoRow label="Founding date">August 2022</AboutUsInfoRow>

            <AboutUsInfoRow label="Founder" tag-default="div">
              <div class="flex flex-col gap-4 md:gap-5">
                <BaseTypography font="Noto Sans" size="size_16">
                  PERSOL CAREER CO., LTD.
                </BaseTypography>
                <div class="flex flex-col gap-2.5">
                  <BaseTypography tag="div" font="Noto Sans" size="size_16">
                    <div class="flex gap-2">
                      <span>[Share capital]</span>
                      <span class="ml-2 flex-1">JPY 1,127 million</span>
                    </div>
                  </BaseTypography>
                  <BaseTypography tag="div" font="Noto Sans" size="size_16">
                    <div class="flex gap-2">
                      <span>[Established]</span>
                      <span class="ml-2 flex-1">
                        June 2, 2010 (founded as INTELLIGENCE LIMITED on June
                        15, 1989)
                      </span>
                    </div>
                  </BaseTypography>
                  <BaseTypography tag="div" font="Noto Sans" size="size_16">
                    <div class="flex gap-2">
                      <span>[Head Office]</span>
                      <span class="ml-2 flex-1">
                        21F, Mori JP Tower, Azabudai Hills, 1-3-1 Azabudai,
                        Minato City, Tokyo 106-0041, Japan
                      </span>
                    </div>
                  </BaseTypography>
                </div>
              </div>
            </AboutUsInfoRow>
          </div>
        </div>
      </div>

      <!-- Message Section -->
      <div
        class="our-business-message-section static lg:sticky top-0 flex flex-col-reverse lg:flex-row items-center gap-10 xl:gap-[120px] bg-white py-0 md:py-[30px]"
      >
        <div
          class="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px]"
        >
          <img
            src="@/assets/images/about-us/mr-yamamoto.png"
            alt="Message"
            class="w-full h-full"
          />
        </div>

        <div class="flex min-w-0 flex-1 flex-col gap-10 md:gap-15 lg:gap-20">
          <BaseHeadline id="about-us-message" tag="h2">Message</BaseHeadline>

          <div class="flex flex-col gap-8 md:gap-10">
            <BaseTypography
              font="Noto Sans"
              size="size_16"
              class="leading-[1.5]"
            >
              We aim to establish the world's top development team in Vietnam to
              realize Persol Career's mission of "GIVE PEOPLE THE POWER TO OWN
              THEIR WORK-LIFE". HERE in Vietnam, through technology, we aspire
              to create a society where each individual can live a more vibrant
              and fulfilling life.
              <br />
              We believe in people's potential more than anyone else and fully
              support each person's life from the perspective of their work.
              This commitment extends equally to our colleagues with whom we
              work together.
            </BaseTypography>

            <BaseTypography
              font="Noto Sans"
              size="size_20"
              weight="bold"
              class="mt-0"
            >
              Masatoshi Yamamoto / General Director
            </BaseTypography>
          </div>
        </div>
      </div>

      <!-- Our Mission Section -->
      <div
        class="our-business-mission-section static lg:sticky top-0 flex flex-col-reverse lg:flex-row items-center gap-10 xl:gap-[120px] bg-white py-0 md:py-[30px]"
      >
        <div
          class="w-[310px] h-[210px] lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px] py-0 lg:py-20"
        >
          <div
            class="aspect-[310/210] bg-[url('@/assets/images/about-us/work-life-balance.png')] bg-center bg-cover bg-no-repeat"
          />
        </div>

        <div class="flex min-w-0 flex-1 flex-col gap-10 md:gap-15 lg:gap-20">
          <BaseHeadline id="about-us-mission" tag="h2">
            Our Mission
          </BaseHeadline>

          <div class="flex flex-col gap-8 md:gap-10">
            <BaseTypography
              font="Noto Sans"
              size="size_20"
              weight="bold"
              class="leading-[1.5]"
            >
              GIVE PEOPLE THE POWER TO OWN THEIR WORK-LIFE
            </BaseTypography>

            <BaseTypography
              font="Noto Sans"
              size="size_16"
              class="leading-[1.5]"
            >
              Our mission is "GIVE PEOPLE THE POWER TO OWN THEIR WORK-LIFE". Our
              goal is to help each individual to correctly know, choose, and act
              on their own opportunities and potential. By doing so, we will
              realize a society in which more and more people can take ownership
              of their unique "working life".
            </BaseTypography>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>
