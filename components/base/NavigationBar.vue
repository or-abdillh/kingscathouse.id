<template>
    <nav
        class="sticky top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center">
        <!-- brand -->
        <section>
            <BrandPrimary />
        </section>

        <!-- toggler -->
        <section>
            <button @click="isExpand = true" class="active:scale-95 duration-200 lg:hidden"><i
                    class="fa-solid fa-bars text-primary-900"></i></button>
        </section>

        <!-- nav wrapper -->
        <section :class="isExpand ? 'right-0' : '-right-full'"
            class="fixed lg:static top-0 h-screen lg:h-auto bg-white border-l lg:border-none border-gray-200 pt-10 lg:pt-0 px-8 lg:px-0 flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-20 duration-200">
            <!-- nav items -->
            <div class="flex flex-col lg:flex-row gap-6 lg:items-center">
                <!-- close  -->
                <button class="text-right mb-8 lg:hidden" @click="isExpand = false"><i
                        class="fa-solid fa-times"></i></button>

                <!-- links -->
                <template v-for="(nav, x) in navItems" :key="x">
                    <NuxtLink
                        :class="nav.id === active ? 'text-secondary-900 underline underline-offset-8' : 'text-gray-400'"
                        class="font-medium duration-200 hover:text-secondary-700 text-right" :href="nav.id"
                        @click="active = nav.id">
                        {{ nav.title }}</NuxtLink>
                </template>
            </div>

            <!-- nav actions -->
            <div>
                <NuxtLink title="Hubungi Kami"
                    class="bg-gradient-to-l from-primary-900 to-primary-700 px-8 py-3 text-gray-50 font-medium rounded-2xl text-sm ring-primary-700 ring-offset-2 hover:ring-2 duration-200"
                    href="/">
                    <i class="fa-brands fa-whatsapp me-1"></i>
                    Chat Us
                </NuxtLink>
            </div>
        </section>
    </nav>
</template>

<script setup lang="ts">

// dummies
const navItems: Array<{ title: string, id: string }> = [
    { title: "Beranda", id: "#home" },
    { title: "Layanan", id: "#service" },
    { title: "Tentang Kami", id: "#about" },
    { title: "Testimoni", id: "#testimony" },
    { title: "Kontak Kami", id: "#contact" },
]

// initial
const active = ref<string>(navItems[0].id)
const isExpand = ref<boolean>(false)

</script>
