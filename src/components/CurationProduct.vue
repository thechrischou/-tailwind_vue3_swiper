<template>

<section class="event relative" v-for="item in list" >
    <div v-if="item.showGradientBg" class="bg-gradient-to-b  from-primary-500 opacity-20 w-full h-full absolute top-0"></div>
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
            :breakpoints=item.swiperSetting.breakpoints
            :loopFillGroupWithBlank="false"
            class="mt-6 mb-6 px-4 pr-4 lg:px-0 lg:pr-0 w-full"
        >
            <swiper-slide v-for="value in item.curationData">
                    <a :href="value.link" class="text-gray-700 hover:text-gray-500 ">
                    <img :src="'./src/assets/' + value.fileName" alt="" title=""
                        class="w-full h-4/6 object-center object-cover hover:opacity-75 rounded-md shadow-md border mb-4 mt-3">
                    <div class="text-sm font-medium text-gray-500 leading-5 "> {{ value.brand }} </div>
                    <div class="text-base font-extrabold  leading-6 productName-abbr">{{ value.productName }}</div>
                    <div v-if="value.headSticker" class="text-xs bg-primary-500 rounded-lg text-white px-3 py-1 block absolute top-0 "> {{ value.headSticker }} </div>
                    <div class="inline">
                        <span class="text-base text-primary-500 font-medium mr-2"><small>NT$</small> {{ value.price }}</span>
                        <span v-if="value.originalPrice" class="text-sm text-gray-400 line-through "><small>NT$</small> {{ value.originalPrice }}</span>
                    </div>
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
                        curationId: 123,
                        title: '⚡閃購有到禮',
                        desc: '中午前下單 隔天輕鬆取貨（限台灣地區）',
                        paginationPosition: 48,
                        showMore: true,
                        showGradientBg: false,
                        swiperSetting: {
                            "slidesPerView": 2.2,
                            "breakpoints": {
                                "640": {
                                    "slidesPerView": 4.1,
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
                                fileName: "curation-prd-1.jpg",
                                brand: "胡老爹菓子工房",
                                productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                                headSticker: "省 NT$ 169",
                                price: "982",
                                originalPrice: "1200",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-2.jpg",
                                brand: "海邊走走",
                                productName: "激厚海苔蛋捲",
                                headSticker: "",
                                price: "300",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-3.jpg",
                                brand: "糖村",
                                productName: "激厚海苔蛋捲超美味（2盒一組）",
                                headSticker: "",
                                price: "500",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-4.jpg",
                                brand: "微熱山丘",
                                productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                                headSticker: "",
                                price: "683",
                                originalPrice: "1300",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-5.jpg",
                                brand: "海邊走走 ",
                                productName: "手工肉鬆蛋捲第一品牌",
                                headSticker: "省 NT$ 169",
                                price: "1111",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-6.jpg",
                                brand: "過海製麵所",
                                productName: "麻油椒香(全素)",
                                headSticker: "省 NT$ 169",
                                price: "2431",
                                originalPrice: "98201",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-1.jpg",
                                brand: "胡老爹菓子工房",
                                productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                                headSticker: "省 NT$ 169",
                                price: "121",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-2.jpg",
                                brand: "海邊走走",
                                productName: "激厚海苔蛋捲",
                                headSticker: "",
                                price: "982",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-3.jpg",
                                brand: "胡老爹菓子工房",
                                productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                                headSticker: "",
                                price: "676",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-4.jpg",
                                brand: "海邊走走",
                                productName: "激厚海苔蛋捲",
                                headSticker: "省 NT$ 169",
                                price: "982",
                                originalPrice: "1200",
                                link: "#"
                            },
                        ]                        
                    },
                    {
                        curationId: 919,
                        title: '⚡閃購有到禮',
                        desc: '中午前下單 隔天輕鬆取貨（限台灣地區）',
                        paginationPosition: 48,
                        showMore: true,
                        showGradientBg: true,
                        swiperSetting: {
                            "slidesPerView": 2.2,
                            "breakpoints": {
                                "640": {
                                    "slidesPerView": 4.1,
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
                                fileName: "curation-prd-1.jpg",
                                brand: "胡老爹菓子工房",
                                productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                                headSticker: "省 NT$ 169",
                                price: "982",
                                originalPrice: "1200",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-2.jpg",
                                brand: "海邊走走",
                                productName: "激厚海苔蛋捲",
                                headSticker: "",
                                price: "300",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-3.jpg",
                                brand: "糖村",
                                productName: "激厚海苔蛋捲超美味（2盒一組）",
                                headSticker: "",
                                price: "500",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-4.jpg",
                                brand: "微熱山丘",
                                productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                                headSticker: "",
                                price: "683",
                                originalPrice: "1300",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-5.jpg",
                                brand: "海邊走走 ",
                                productName: "手工肉鬆蛋捲第一品牌",
                                headSticker: "省 NT$ 169",
                                price: "1111",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-6.jpg",
                                brand: "過海製麵所",
                                productName: "麻油椒香(全素)",
                                headSticker: "省 NT$ 169",
                                price: "2431",
                                originalPrice: "98201",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-1.jpg",
                                brand: "胡老爹菓子工房",
                                productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                                headSticker: "省 NT$ 169",
                                price: "121",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-2.jpg",
                                brand: "海邊走走",
                                productName: "激厚海苔蛋捲",
                                headSticker: "",
                                price: "982",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-3.jpg",
                                brand: "胡老爹菓子工房",
                                productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                                headSticker: "",
                                price: "676",
                                originalPrice: "",
                                link: "#"
                            },
                            {
                                fileName: "curation-prd-4.jpg",
                                brand: "海邊走走",
                                productName: "激厚海苔蛋捲",
                                headSticker: "省 NT$ 169",
                                price: "982",
                                originalPrice: "1200",
                                link: "#"
                            },
                        ]                         
                    }
                ]
                
            }
        }
    };
</script>
<style>
.productName-abbr {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 3rem;
    min-height: 3rem;
}
</style>