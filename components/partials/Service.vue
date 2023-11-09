<template>
    <section class="section" id="service">
        <!-- inner wrapper -->
        <section class="bg-gradient-to-tr from-primary-500 to-primary-900 w-full p-4 lg:p-8 rounded-2xl mb-24">
            <!-- header section -->
            <div class="text-center mb-16">
                <h1 class="text-gray-50 text-3xl font-semibold">Kami Merawat dan Menginapkan Kucing <br> dengan Cinta</h1>
            </div>

            <!-- services section: resume -->
            <div class="lg:w-11/12 lg:mx-auto flex flex-col lg:flex-row gap-6">
                <!-- grooming -->
                <div
                    class="lg:w-6/12 flex flex-col lg:flex-row gap-6 lg:items-center p-6 rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 border border-primary-500 hover:border-gray-200 hover:shadow-lg lg:hover:-translate-y-2 lg:hover:translate-x-2 duration-200">
                    <!-- title -->
                    <div>
                        <!-- icon -->
                        <div
                            class="lg:w-16 lg:h-32 h-16 bg-secondary-600 bg-opacity-50 rounded-lg border border-primary-500 grid place-items-center">
                            <i class="fa-solid fa-bath text-gray-50"></i>
                        </div>
                    </div>
                    <!-- copywriter -->
                    <div>
                        <p class="text-gray-100 mb-3">
                            Kami menghadirkan pelayanan <span class="font-semibold">Grooming</span> khusus yang dirancang
                            untuk
                            membuat bulu
                            dan kesehatan kucing Anda menjadi yang terbaik.
                        </p>

                        <NuxtLink class="text-xs text-gray-200 flex items-center gap-2" href="#grooming">
                            <i class="fa-solid fa-chevron-right text-xs"></i>
                            Pelajari lebih lanjut
                        </NuxtLink>
                    </div>
                </div>

                <!-- house -->
                <div
                    class="lg:w-6/12 flex flex-col-reverse lg:flex-row gap-6 lg:items-center p-6 rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 border border-primary-500 hover:border-gray-200 hover:shadow-lg lg:hover:-translate-y-2 lg:hover:-translate-x-2 duration-200">
                    <!-- copywriter -->
                    <div>
                        <p class="text-gray-100 lg:text-right mb-3">
                            Dengan fasilitas <span class="font-semibold">Penginapan</span> yang nyaman, bersih, dan aman,
                            Anda bisa berlibur tenang, tahu bahwa kucing Anda dalam perawatan yang baik.
                        </p>

                        <NuxtLink class="text-xs text-gray-200 flex lg:justify-end items-center gap-2" href="#grooming">
                            <i class="fa-solid fa-chevron-right text-xs lg:hidden"></i>
                            Pelajari lebih lanjut
                            <i class="fa-solid fa-chevron-left text-xs hidden lg:inline"></i>
                        </NuxtLink>
                    </div>
                    <!-- title -->
                    <div>
                        <!-- icon -->
                        <div
                            class="lg:w-16 lg:h-32 h-16 bg-secondary-600 bg-opacity-50 rounded-lg border border-primary-500 grid place-items-center">
                            <i class="fa-solid fa-house text-gray-50"></i>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <!-- services section: call action -->
        <section class="flex flex-col lg:flex-row justify-between items-start">
            <!-- iilustration -->
            <div
                class="mb-16 w-full lg:w-5/12 h-80 bg-gradient-to-br from-primary-500 to-primary-900 rounded-tr-[2.5rem] rounded-tl-lg rounded-b-lg ring-4 ring-offset-2 ring-primary-500 relative">
                <NuxtImg class="absolute bottom-0 w-7/12 left-2/4 -translate-x-2/4" src="/images/women-with-cat.png">
                </NuxtImg>
            </div>

            <!-- copywriter -->
            <div class="lg:w-6/12">
                <span
                    class="uppercase text-secondary-500 font-medium px-6 py-2 text-xs bg-gray-100 border border-gray-200 rounded-full">
                    Kami Paham
                </span>
                <h2 class="text-primary-800 text-3xl font-bold mb-4 mt-6">Kebahagiaan Kucing Anda Merupakan Ketenangan Hidup
                    Anda
                </h2>
                <p class="text-secondary-700 mb-10">Kami memahami bahwa mempercayakan kucing Anda kepada orang lain adalah
                    keputusan besar. Kami memberikan
                    jaminan bahwa kucing Anda akan dirawat dengan penuh cinta dan keahlian oleh tim berpengalaman kami</p>

                <!-- action -->
                <NuxtLink
                    class="bg-gradient-to-l text-center border border-primary-900 from-primary-900 to-primary-700 px-8 py-3 text-gray-50 font-medium rounded-2xl ring-primary-700 ring-offset-2 hover:ring-2 duration-200"
                    href="/">Konsultasi Gratis</NuxtLink>
            </div>
        </section>
    </section>
</template>
