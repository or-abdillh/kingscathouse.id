<template>
    <NuxtLayout name="base">
        <!-- hero section -->
        <PartialsHome></PartialsHome>
        <!-- end of hero section -->

        <!-- our service section -->
        <PartialsService></PartialsService>
        <!-- end of our service section -->
    </NuxtLayout>
</template>

<script lang="ts" setup>

definePageMeta({
    name: "homepage"
})

</script>
