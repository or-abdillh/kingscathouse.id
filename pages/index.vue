<template>
    <NuxtLayout name="base">
        <!-- hero section -->
        <section
            class="section flex flex-col lg:flex-row items-center gap-16 lg:gap-12 bg-gradient-to-tr from-slate-100 via-slate-50 to-white relative">
            <!-- decorations -->
            <i class="fa-solid fa-paw absolute top-16 right-10 lg:right-[38rem] text-secondary-500 opacity-20"></i>
            <i
                class="fa-solid fa-paw absolute top-20 right-16 lg:right-[42rem] rotate-45 text-secondary-500 opacity-20"></i>

            <!-- copywriter -->
            <div class="lg:w-7/12">
                <span class="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-secondary-700">
                    👏🏻
                    Halo Cat
                    Lovers</span>
                <h1 class="text-primary-800 text-5xl font-bold my-4 lg:my-6" style="line-height: 3.75rem;">
                    Grooming dan Penginapan Kucing Terbaik di <span class="underline underline-offset-4">Banjarmasin</span>
                </h1>
                <p class="text-secondary-700 mb-12">Jasa grooming kucing profesional dan penginapan kucing eksklusif di
                    Banjarmasin.
                    Kami memberikan perawatan terbaik untuk hewan peliharaan Anda.</p>

                <!-- actions -->
                <div>
                    <div class="flex flex-col lg:flex-row gap-4 lg:items-center">
                        <!-- book now -->
                        <NuxtLink
                            class="bg-gradient-to-l text-center border border-primary-900 from-primary-900 to-primary-700 px-8 py-3 text-gray-50 font-medium rounded-2xl ring-primary-700 ring-offset-2 hover:ring-2 duration-200"
                            href="/">Booking Now</NuxtLink>

                        <NuxtLink href="/"
                            class="pl-3 pr-4 py-2 rounded-2xl flex items-center gap-4 border border-primary-900 hover:bg-white duration-200">
                            <div
                                class="w-8 h-8 grid place-items-center bg-primary-900 rounded-full border border-primary-900 text-white">
                                <i class="fa-solid fa-search text-xs"></i>
                            </div>
                            <p class="text-primary-900 font-medium">Find Us On Instagram</p>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- illustration -->
            <div class="lg:w-5/12 grid place-items-center">
                <!-- box -->
                <div
                    class="mb-16 w-full lg:w-96 h-80 bg-gradient-to-br from-primary-500 to-primary-900 rounded-tl-[2.5rem] rounded-tr-lg rounded-b-lg ring-4 ring-offset-2 ring-primary-500 relative">
                    <NuxtImg class="absolute bottom-0 w-full" src="/images/cat.png"></NuxtImg>

                    <!-- stand out -->
                    <div
                        class="absolute top-12 -left-12 lg:-left-16 px-4 py-5 text-center text-secondary-800 bg-gray-100 bg-opacity-40 backdrop-blur rounded-xl border border-gray-200">
                        <i class="fa-solid fa-bath fa-bounce text-xl text-secondary-500 mb-1"></i>
                        <p class="text-xs font-semibold">Sampo <br> Kualitas Terbaik</p>
                    </div>

                    <div
                        class="absolute bottom-10 -right-12 lg:-right-16 px-3 py-5 text-center text-secondary-800 bg-gray-100 bg-opacity-40 backdrop-blur rounded-xl border border-gray-200">
                        <i class="fa-solid fa-house fa-bounce text-xl text-secondary-500 mb-1"></i>
                        <p class="text-xs font-semibold">Kandang <br> Bersih & Nyaman</p>
                    </div>
                </div>

                <!-- users -->
                <div class="flex flex-col-reverse text-center lg:text-left items-center lg:flex-row-reverse gap-6">
                    <div class="flex items-center">
                        <NuxtImg class="rounded-full border-2 border-white" src="/images/people.png" />
                        <NuxtImg class="rounded-full border-2 border-white -translate-x-3" src="/images/people-2.png" />
                        <NuxtImg class="rounded-full border-2 border-white -translate-x-6" src="/images/people-3.png" />
                        <NuxtImg class="rounded-full border-2 border-white -translate-x-9" src="/images/people-4.png" />
                        <div
                            class="w-12 h-12 px-2 grid place-items-center bg-gray-50 text-xs rounded-full border-2 border-white -translate-x-14">
                            100+</div>
                    </div>
                    <p class="text-secondary-700 text-xs">Bergabung dengan mereka <br> sebagai pelanggan setia kami</p>
                </div>
            </div>
        </section>
        <!-- end of hero section -->
    </NuxtLayout>
</template>

<script lang="ts" setup>

definePageMeta({
    name: "homepage"
})

</script>
