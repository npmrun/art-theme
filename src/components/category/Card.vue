<template>
    <a :href="`../category/${category.name}/1`"
        class="w-80 h-30 bg-orange-400 rounded-lg p-[15px] text-white text- shadow-xl image-full cursor-pointer dark:bg-white">
        <figure v-if="!!computedImage" class="rounded overflow-hidden mb-[8px] max-h-[80px] object-center"><img :src="computedImage" /></figure>
        <div class="">
            <h2 class="flex">
                <span class="flex-1 w-0 font-bold inline-block over1line">{{ category.name }}</span>
                <button class="px-[6px] rounded  bg-fuchsia-400">{{ category.count }}</button>
            </h2>
            <p>{{ category.desc }}</p>
        </div>
    </a>
</template>


<script lang="ts" setup>
import { computed } from '@vue/reactivity';

const props = withDefaults(defineProps<{
    category: {
        name: string,
        desc?: string,
        count?: number,
        image: string,
        order?: number,
    }
}>(), {})

const computedImage = computed(() => {
    return props.category.image ?? ""
})

</script>