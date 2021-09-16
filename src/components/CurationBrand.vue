<template>

<section class="event">
        <div class="py-4 lg:max-w-7xl lg:mx-auto lg:px-8 relative">
            <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <div>
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">世界各地精選伴手禮</h2>
                    <h4 class="text-sm tracking-tight text-gray-500">一站品嚐世界各地精選伴手禮</h4>
                </div>
                <button type="button" class=" text-sm font-semibold text-gray-600 hover:text-primary-500">更多
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
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
                        "slidesPerView": 4,
                        "slidesPerGroup": 4
                    }
                }'
                :loopFillGroupWithBlank="false"
                class="mt-6 mb-6 px-4 pr-4 lg:px-0 lg:pr-0 w-full"
            >
                <swiper-slide v-for="value in exampleImgArray">
                     <a href="https://google.com" class="text-gray-700 hover:text-gray-500">
                        <div class="z-0">
                            <div class="w-full object-center object-cover  rounded-md shadow-md border mb-4"
                            style="padding-top:50%;background-size: cover; background-repeat: no-repeat; background-position: center center"
                            :style="'background-image:url(./src/assets/' + value.brandCover + ')'">
                            </div>
                            <div class="border-4 border-white  rounded-full shadow-lg bg-white mb-20 " 
                            style="width:40%;padding-top:38%;margin:0 auto;margin-top:-30%;background-size: contain; background-repeat: no-repeat; background-position: center center;"
                            :style="'background-image:url(./src/assets/' + value.brandLogo + ')'">
                            </div>
                        </div>
                        
                        <div class="text-sm font-medium text-gray-500 leading-5 text-center mt-5"> {{ value.brandFrom }} </div>
                        <div class="text-base font-semibold  leading-6 productName-abbr text-center">{{ value.brand }}</div>
                    </a>
                </swiper-slide>
            </swiper>
                


                <!-- If we need navigation buttons -->
                <div class="px-4 hidden lg:flex items-center justify-between sm:px-6 lg:px-0">
                    <div
                        class="swiper-button left-0" style="top:37%" :id="'prev' + curationId" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-1/2 " fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div
                        class="swiper-button right-0" style="top:37%" :id="'next' + curationId" >
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
                curationId: 4,
                exampleImgArray: [
                    {
                        brandCover: "brand-1.jpg",
                        brandLogo: "brand-logo-1.jpg",
                        brandFrom: "台灣伴手禮",
                        brand: "佳德糕餅",
                    },
                    {
                        brandCover: "brand-2.jpg",
                        brandLogo: "brand-logo-2.jpg",
                        brandFrom: "台灣伴手禮",
                        brand: "小潘蛋糕坊",
                    },
                    {
                        brandCover: "brand-3.jpg",
                        brandLogo: "brand-logo-3.jpg",
                        brandFrom: "台灣伴手禮",
                        brand: "微熱山丘",
                    },
                    {
                        brandCover: "brand-4.jpg",
                        brandLogo: "brand-logo-4.jpg",
                        brandFrom: "台灣伴手禮",
                        brand: "海邊走走",
                    },
                    {
                        brandCover: "brand-1.jpg",
                        brandLogo: "brand-logo-1.jpg",
                        brandFrom: "台灣伴手禮",
                        brand: "佳德糕餅",
                    },
                    {
                        brandCover: "brand-2.jpg",
                        brandLogo: "brand-logo-2.jpg",
                        brandFrom: "台灣伴手禮",
                        brand: "小潘蛋糕坊",
                    },
                    {
                        brandCover: "brand-3.jpg",
                        brandLogo: "brand-logo-3.jpg",
                        brandFrom: "台灣伴手禮",
                        brand: "微熱山丘",
                    },
                    {
                        brandCover: "brand-4.jpg",
                        brandLogo: "brand-logo-4.jpg",
                        brandFrom: "台灣伴手禮",
                        brand: "海邊走走",
                    },
                ]
            }
        }
    };
</script>