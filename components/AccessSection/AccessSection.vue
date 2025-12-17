<template>
  <section
    class="pt-[50px] pb-20 lg:py-[180px] flex flex-col gap-[50px] lg:gap-10"
  >
    <BaseTypography
      id="access"
      tag="h2"
      class="title"
      size="size_80"
      weight="light"
    >
      Access
    </BaseTypography>
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
      <div class="flex flex-col gap-5 lg:gap-[60px] flex-1">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-[10px]">
            <img
              src="@/assets/images/access/location_icon.svg"
              alt="Location Icon"
            />
            <BaseTypography
              tag="span"
              font="Noto Sans"
              size="size_20"
              weight="bold"
            >
              Office
            </BaseTypography>
          </div>
          <BaseTypography font="Noto Sans">
            Floor 4, An Phu Plaza, 117-119 Ly Chinh Thang Street, Xuan Hoa Ward,
            Ho Chi Minh City, Vietnam
          </BaseTypography>
        </div>
        <SecondaryButton
          class="self-center lg:self-start"
          anchor-classes="bg-gray00 lg:bg-white"
          text="View Directions"
          href="https://maps.app.goo.gl/PExJqQmpRkCSiDgb6"
          :is-external-link-icon="false"
        />
      </div>
      <iframe
        class="w-full lg:w-[620px] h-[250px] lg:h-[438px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3139726948475!2d106.682433475841!3d10.78724738936224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2c28f77717%3A0xd1559eb5589a2e5!2zMTE3LTExOSBMw70gQ2jDrW5oIFRo4bqvbmcsIFBoxrDhu51uZyA3LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1762312947631!5m2!1sen!2s"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccessSection',
});
</script>
