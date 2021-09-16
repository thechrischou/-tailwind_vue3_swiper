<template>

<section class="event" v-for="item in list">
    <div class="py-4 lg:max-w-7xl lg:mx-auto lg:px-8 relative">
        <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
            <div>
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">{{ item.title }}</h2>
                <h4 class="text-sm tracking-tight text-gray-500">{{ item.desc }}</h4>
            </div>
            <button v-if="item.showMore" type="button" class=" text-sm font-semibold text-gray-600 hover:text-primary-500">更多
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
                    nextEl: "#next" + item.curationId,
                    prevEl: "#prev" + item.curationId
                }'
                :slides-per-view = item.swiperSetting.slidesPerView
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :breakpoints = item.swiperSetting.breakpoints
                :loopFillGroupWithBlank="false"
                class="mt-6 mb-6 px-4 pr-4 lg:px-0 lg:pr-0 w-full"
            >
                <swiper-slide v-for="value in item.curationData">
                    <a v-if="item.textInside" :href="value.link">
                        <img :src="'./src/assets/' + value.fileName" alt="" title=""
                            class="w-full h-4/6 object-center object-cover hover:opacity-75 rounded-md shadow-md">
                        <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b rounded-md from-black opacity-60  block"></div>
                        <div class="absolute top-0 left-0 p-5 text-white">
                            <div class="text-xl font-extrabold"> {{ value.title }} </div>
                            <div class="text-xs md:text-sm mt-2">{{ value.desc }}</div>
                        </div>
                    </a>
                    <a v-else :href="value.link">
                        <img :src="'./src/assets/' + value.fileName" alt="" title=""
                            class="w-full h-4/6 object-center object-cover hover:opacity-75 rounded-md shadow-md">
                        <div class="text-xs font-light text-primary-500 leading-4 mt-4 ">精選文章</div>
                        <div class="text-base font-extrabold  leading-6 curationTitle-abbr"> {{ value.title }} </div>
                        <div class="text-sm  font-light text-gray-500 leading-6 mt-1 ">{{ value.desc }}</div>
                    </a>
                </swiper-slide>
            </swiper>

            <!-- If we need navigation buttons -->
            <div class="px-4 hidden lg:flex  sm:px-6 lg:px-0 " >
                <div
                    class="swiper-button absolute left-0" :style="'top:calc(50% - ' + item.paginationPosition + 'px);'" :id="'prev' + item.curationId">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-1/2 w-1/2 " fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div
                    class="swiper-button absolute right-0" :style="'top:calc(50% - ' + item.paginationPosition + 'px);'" :id="'next' + item.curationId">
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
                list: [
                    {
                        curationId: 2,
                        title: "世界各地精選伴手禮",
                        desc: "一站品嚐世界各地精選伴手禮",
                        showMore: false,
                        textInside: true,
                        paginationPosition: 0,
                        swiperSetting: {
                            "slidesPerView": 1.1,
                            "breakpoints": {
                                "640": {
                                    "slidesPerView": 2.1,
                                    "spaceBetween": 10
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "slidesPerGroup": 3
                                }
                            },
                            
                        },
                        curationData: [
                            {
                                fileName: "img-with-text-inside-col-3-1.jpg",
                                title: "台灣",
                                desc: "台灣嚴選伴手禮",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-3-2.jpg",
                                title: "日本",
                                desc: "日本最夯伴手禮",
                                link: "#"
                            },
                        ]
                    },
                    {
                        curationId: 6,
                        title: "世界各地精選伴手禮",
                        desc: "一站品嚐世界各地精選伴手禮",
                        showMore: true,
                        textInside: true,
                        paginationPosition: 0,
                        swiperSetting: {
                            "slidesPerView": 2.2,
                            "breakpoints": {
                                "640": {
                                    "slidesPerView": 3.3,
                                    "spaceBetween": 10
                                },
                                "1024": {
                                    "slidesPerView": 5,
                                    "slidesPerGroup": 5
                                }
                            },
                            
                        },
                        curationData: [
                            {
                                fileName: "img-with-text-inside-col-5-1.jpg",
                                title: "台南",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-2.jpg",
                                title: "嘉義",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-3.jpg",
                                title: "基隆",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-4.jpg",
                                title: "金門",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-5.jpg",
                                title: "台中",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-5.jpg",
                                title: "台中",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            }
                        ]
                    },
                    {
                        curationId: 7,
                        title: "世界各地精選伴手禮",
                        desc: "一站品嚐世界各地精選伴手禮",
                        showMore: true,
                        textInside: true,
                        paginationPosition: 0,
                        swiperSetting: {
                            "slidesPerView": 2.2,
                            "breakpoints": {
                                "640": {
                                    "slidesPerView": 3.3,
                                    "spaceBetween": 10
                                },
                                "1024": {
                                    "slidesPerView": 6,
                                    "slidesPerGroup": 6
                                }
                            },
                            
                        },
                        curationData: [
                            {
                                fileName: "img-with-text-inside-col-5-1.jpg",
                                title: "台南",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-2.jpg",
                                title: "嘉義",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-3.jpg",
                                title: "基隆",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-4.jpg",
                                title: "金門",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-5.jpg",
                                title: "台中",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-5.jpg",
                                title: "台中",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-1.jpg",
                                title: "台南",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-2.jpg",
                                title: "嘉義",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-inside-col-5-3.jpg",
                                title: "基隆",
                                desc: "台灣歷史文化古都台灣歷史文化古都",
                                link: "#"
                            },
                        ]
                    },
                    {
                        curationId: 10,
                        title: "iCarry 部落格",
                        desc: "你想知道的伴手禮懶人包都在這！",
                        showMore: true,
                        textInside: false,
                        paginationPosition: 48,
                        swiperSetting: {
                            "slidesPerView": 1.1,
                            "breakpoints": {
                                "640": {
                                    "slidesPerView": 2.2
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "slidesPerGroup": 3
                                }
                            },
                        },
                        curationData: [
                            {
                                fileName: "img-with-text-outside-col-4-1.jpg",
                                title: "2021 全台鳳梨酥推薦 TOP 10 全台鳳梨酥推薦全台鳳梨酥推薦全台鳳梨酥推薦全台鳳梨酥推薦",
                                desc: "佳德、小潘、微熱山丘等精選台灣伴手禮",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-outside-col-4-2.jpg",
                                title: "2021 板橋必買人氣伴手禮",
                                desc: "小潘鳳梨酥／小潘鳳凰酥（含最新價格）",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-outside-col-4-1.jpg",
                                title: "2021 全台鳳梨酥推薦 TOP 10",
                                desc: "佳德、小潘、微熱山丘等精選台灣伴手禮",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-outside-col-4-2.jpg",
                                title: "2021 板橋必買人氣伴手禮",
                                desc: "小潘鳳梨酥／小潘鳳凰酥（含最新價格）",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-outside-col-4-1.jpg",
                                title: "2021 全台鳳梨酥推薦 TOP 10",
                                desc: "佳德、小潘、微熱山丘等精選台灣伴手禮",
                                link: "#"
                            },
                            {
                                fileName: "img-with-text-outside-col-4-2.jpg",
                                title: "2021 板橋必買人氣伴手禮",
                                desc: "小潘鳳梨酥／小潘鳳凰酥（含最新價格）",
                                link: "#"
                            }
                        ]
                    }
                ]
                
            }
        }
    };
</script>
<style>
.curationTitle-abbr {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>