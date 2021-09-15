<template>

<section class="event">
        <div class="py-4 lg:max-w-7xl lg:mx-auto lg:px-8 relative">
            <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <div>
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">世界各地精選伴手禮</h2>
                    <h4 class="text-sm tracking-tight text-gray-500">一站品嚐世界各地精選伴手禮</h4>
                </div>
                <a href="#" class="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">See
                    everything<span aria-hidden="true"> &rarr;</span></a>
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
                :loopFillGroupWithBlank="false"
                class="mt-6 mb-6 px-4 pr-4 lg:px-0 lg:pr-0 w-full"
            >
                <swiper-slide v-for="value in exampleImgArray">
                     <a href="https://google.com">
                        <img :src="'./src/assets/' + value.fileName" alt="" title=""
                            class="w-full h-4/6 object-center object-cover hover:opacity-75 rounded-md shadow-md">
                        <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b rounded-md from-black opacity-60 block"></div>
                        <div class="absolute top-5 left-5 text-white">
                            <div class="text-xl font-extrabold"> {{ value.title }} </div>
                            <div>{{ value.desc }}</div>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
                


                <!-- If we need navigation buttons -->
                <div class="px-4 hidden lg:flex items-center justify-between sm:px-6 lg:px-0">
                    <div
                        class="swiper-button left-0" :id="'prev' + curationId">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-1/2 w-1/2 " fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div
                        class="swiper-button right-0" :id="'next' + curationId">
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
                curationId: 2,
                exampleImgArray: [
                    {
                        fileName: "img-with-text-inside-tw.jpg",
                        title: "台灣",
                        desc: "台灣嚴選伴手禮"
                    },
                    {
                        fileName: "img-with-text-inside-jp.jpg",
                        title: "日本",
                        desc: "日本最夯伴手禮"
                    },
                ]
            }
        }
    };
</script>