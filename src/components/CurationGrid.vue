<template>

<section class="event relative" v-for="item in list" >
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
                :grid = '{
                    rows: 2,
                    fill: "row"
                }'
                :slidesPerView = item.swiperSetting.slidesPerView
                :spaceBetween="16"
                :pagination="false"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :breakpoints=item.swiperSetting.breakpoints
                :loopFillGroupWithBlank="false"
                class="mt-6 mb-6 px-4 pr-4 lg:px-0 lg:pr-0 "
            >
                <swiper-slide v-for="value in item.curationData" >
                    <a :href="value.link" class="text-gray-700 hover:text-gray-500 ">
                        <img :src="'./src/assets/' + value.fileName" alt="" title=""
                            class="w-full h-full object-center object-cover hover:opacity-75 md:w-24 md:h-24 md:mr-3 md:inline-block  ">
                        <div class="gridName-abbr text-center text-xs leading-5 font-medium text-gray-900 md:leading-7 md:inline-block md:text-base md:font-semibold"> {{ value.brand }} </div>
                    </a>
                </swiper-slide>
            </swiper>
            <!-- If we need navigation buttons -->
            <div class="px-4 hidden lg:flex items-center justify-between sm:px-6 lg:px-0">
                <div
                    class="swiper-button absolute left-0" :style="'top:calc(50% - ' + item.paginationPosition + 'px);'"  :id="'prev' + item.curationId" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-1/2 " fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div
                    class="swiper-button absolute right-0" :style="'top:calc(50% - ' + item.paginationPosition + 'px);'"  :id="'next' + item.curationId" >
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
    import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    console.log(Grid)

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import 'swiper/css/grid';

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
                modules: [Navigation, Pagination, Scrollbar, A11y, Grid],
            };
        },
        data() {
            return {
                list: [
                    {
                        curationId: 33,
                        title: '伴手禮分類',
                        desc: '記憶中的古早味點心',
                        paginationPosition: 0,
                        showMore: true,
                        swiperSetting: {
                            "slidesPerView": 4.5,
                            "breakpoints": {
                                "640": {
                                    "slidesPerView": 4.5,
                                },
                                "1024": {
                                    "slidesPerView": 4,
                                    "slidesPerGroup": 4
                                }
                            },
                            
                        },
                        curationData: [
                            {
                                fileName: "curation-prd-1.jpg",
                                brand: "胡老爹菓子工房",
                            },
                            {
                                fileName: "curation-prd-2.jpg",
                                brand: "胡老爹菓子工房",
                            },
                            {
                                fileName: "curation-prd-3.jpg",
                                brand: "糖村",
                            },
                            {
                                fileName: "curation-prd-4.jpg",
                                brand: "微熱山丘",
                            },
                            {
                                fileName: "curation-prd-5.jpg",
                                brand: "海邊走走 ",
                            },
                            {
                                fileName: "curation-prd-6.jpg",
                                brand: "過海製麵所",
                            },
                            {
                                fileName: "curation-prd-1.jpg",
                                brand: "胡老爹菓子工房",
                            },
                            {
                                fileName: "curation-prd-2.jpg",
                                brand: "海邊走走",
                            },
                            {
                                fileName: "curation-prd-3.jpg",
                                brand: "胡老爹菓子工房",
                            },
                            {
                                fileName: "curation-prd-4.jpg",
                                brand: "海邊走走",
                            },
                            {
                                fileName: "curation-prd-4.jpg",
                                brand: "微熱山丘",
                            },
                            {
                                fileName: "curation-prd-5.jpg",
                                brand: "海邊走走 ",
                            },
                            {
                                fileName: "curation-prd-6.jpg",
                                brand: "過海製麵所",
                            },
                            {
                                fileName: "curation-prd-1.jpg",
                                brand: "胡老爹菓子工房",
                            },
                            {
                                fileName: "curation-prd-2.jpg",
                                brand: "海邊走走",
                            },
                            {
                                fileName: "curation-prd-3.jpg",
                                brand: "胡老爹菓子工房",
                            },
                            {
                                fileName: "curation-prd-4.jpg",
                                brand: "海邊走走",
                            },
                        ]                        
                    },
                ]
                
            }
        }
    };
</script>
<style>
.gridName-abbr {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>