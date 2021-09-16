<template>

<section class="event">
        <div class="py-4 lg:max-w-7xl lg:mx-auto lg:px-8 relative">
            <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">最新活動</h2>
            </div>
            <!-- Slider main container -->
            <div class="flex items-center">
            <swiper
                :modules="modules"
                :navigation = '{
                    nextEl: "#next" + curationId,
                    prevEl: "#prev" + curationId
                }'
                :slides-per-view="1.1"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :breakpoints='{
                    "640": {
                        "slidesPerView": 2.1,
                        "spaceBetween": 10
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "slidesPerGroup": 3
                    }
                }'
                class="mt-6 mb-6 px-4 pr-4 lg:px-0 lg:pr-0 w-full"
            >
                <swiper-slide v-for=" n in 10">
                    <a href="https://google.com">
                        <img :src='"./src/assets/index-col-3-" + (n%2+1) + ".jpg"' title=""
                            class="w-full h-1/2 object-center object-cover hover:opacity-75 rounded-md shadow-md">
                    </a>
                </swiper-slide>
            </swiper>
                


                <!-- If we need navigation buttons -->
                <div class="px-4 hidden lg:flex items-center justify-between sm:px-6 lg:px-0">
                    <div class="swiper-button left-0" :id="'prev' + curationId">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-1/2 w-1/2 " fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div class="swiper-button right-0" :id="'next' + curationId">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" h-1/2 w-1/2 " fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
</template>
<script>
    import { ref } from 'vue';
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    // Import Swiper styles
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
            const onSwiper = (swiper) => {
            };
            const onSlideChange = () => {
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation, Pagination, Scrollbar, A11y],
            };
        },
        data() {
            return {
                curationId: 1
            }
        }
    };
</script>