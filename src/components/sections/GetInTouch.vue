<template>
  <section class="py-[30px] md:py-[64px] mb-[70px] md:mb-[64px]">
    <div class="container">
      <div class="flex items-start justify-between">
        <img
          src="@/assets/photo@2x.png"
          alt="Get in touch"
          class="h-[229px] lg:h-[490px] object-cover md:block hidden"
        />
        <div
          class="flex flex-col justify-center gap-[30px] max-w-[600px] pr-5 pl-5"
        >
          <h2
            class="text-[36px] md:text-[48px] xl:text-[72px] text-palette1-5 font-marcellus relative z-10 text-center"
          >
            Get in touch
          </h2>
          <div class="flex flex-col gap-[10px]">
            <p class="text-[17px] font-light">
              Get daily expert parfume tips, special temporal promotions and an
              extra discount for internet payments.
            </p>
            <div class="flex flex-col gap-[16px]">
              <input
                type="text"
                placeholder="Enter your email"
                class="border-b w-full border-[#59260b] py-[12px] px-0 h-[54px] focus:outline-none placeholder:text-[17px] placeholder:font-light placeholder:text-[#c5b0aa]"
              />
              <p class="text-[15px] font-light">
                By clicking OK, I agree to the Terms and Conditions and the
                Privacy Policy
              </p>
            </div>
            <Button
              class="!w-full border border-[#59260b] mt-[20px] !bg-palette2-4 !text-[#000]"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "../_ui-kit/Button.vue";
</script>

<style lang="scss" scoped></style>
