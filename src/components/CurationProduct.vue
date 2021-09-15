<template>

<section class="event">
        <div class="py-4 lg:max-w-7xl lg:mx-auto lg:px-8 relative">
            <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <div>
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">✨即期良品限時下殺</h2>
                    <h4 class="text-sm tracking-tight text-gray-500">一站品嚐世界各地精選伴手禮</h4>
                </div>
                <a href="#" class="hidden sm:block text-sm font-semibold text-gray-600 hover:text-primary-500">更多
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline " fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <!-- Slider main container -->
            <div class="flex items-center">
            <swiper
                :modules="modules"
                :navigation = '{
                    nextEl: "#next" + curationId,
                    prevEl: "#prev" + curationId
                }'
                :slides-per-view="2.1"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :breakpoints='{
                    "640": {
                        "slidesPerView": 4.1,
                        "spaceBetween": 10
                    },
                    "1024": {
                        "slidesPerView": 6,
                        "slidesPerGroup": 6
                    }
                }'
                :loopFillGroupWithBlank="false"
                class="mt-6 mb-6 px-4 pr-4 lg:px-0 lg:pr-0 w-full"
            >
                <swiper-slide v-for="value in exampleImgArray">
                     <a href="https://google.com" class="text-gray-700 hover:text-black ">
                        <img :src="'./src/assets/' + value.fileName" alt="" title=""
                            class="w-full h-4/6 object-center object-cover hover:opacity-75 rounded-md shadow-md border mb-4 mt-3">
                        <div class="text-sm font-medium text-gray-500 leading-5 "> {{ value.brand }} </div>
                        <div class="text-base font-extrabold  leading-6 productName-abbr">{{ value.productName }}</div>
                        <div class="text-sm font-light text-secondary text-secondary-500 bg-secondary-50 rounded-lg p-1 px-2 mt-2">{{ value.desc }}</div>
                        <div v-if="value.headSticker" class="text-xs bg-primary-500 rounded-lg text-white px-3 py-1 block absolute top-0 "> {{ value.headSticker }} </div>
                        <div class="inline">
                            <span v-if="value.originalPrice" class="text-sm text-gray-400 line-through mr-1">NT$ {{ value.originalPrice }}</span>
                            <span class="text-base text-primary-500 font-medium">NT$ {{ value.price }}</span>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
                


                <!-- If we need navigation buttons -->
                <div class="px-4 hidden lg:flex items-center justify-between sm:px-6 lg:px-0">
                    <div
                        class="swiper-button left-0 top-1/3" :id="'prev' + curationId" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-1/2 " fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div
                        class="swiper-button right-0 top-1/3" :id="'next' + curationId" >
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
                curationId: 3,
                exampleImgArray: [
                    {
                        fileName: "curation-prd-1.jpg",
                        brand: "胡老爹菓子工房",
                        productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                        desc: "每一秒就賣出6包，熱銷全世界，搶購一空！",
                        headSticker: "省 NT$ 169",
                        price: "982",
                        originalPrice: "1200"
                    },
                    {
                        fileName: "curation-prd-2.jpg",
                        brand: "海邊走走",
                        productName: "激厚海苔蛋捲",
                        desc: "激厚系列用5倍的厚實口感",
                        headSticker: "",
                        price: "300",
                        originalPrice: ""
                    },
                    {
                        fileName: "curation-prd-3.jpg",
                        brand: "糖村",
                        productName: "激厚海苔蛋捲超美味（2盒一組）",
                        desc: "每一秒就賣出6包，熱銷全世界，搶購一空！",
                        headSticker: "",
                        price: "500",
                        originalPrice: ""
                    },
                    {
                        fileName: "curation-prd-4.jpg",
                        brand: "微熱山丘",
                        productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                        desc: "來自日本青森縣岩木山腳下的紅玉蘋果",
                        headSticker: "",
                        price: "683",
                        originalPrice: "1300"
                    },
                    {
                        fileName: "curation-prd-5.jpg",
                        brand: "海邊走走 ",
                        productName: "手工肉鬆蛋捲第一品牌",
                        desc: "每一秒就賣出6包，熱銷全世界，搶購一空！",
                        headSticker: "省 NT$ 169",
                        price: "1111",
                        originalPrice: ""
                    },
                    {
                        fileName: "curation-prd-6.jpg",
                        brand: "過海製麵所",
                        productName: "麻油椒香(全素)",
                        desc: "四川巴蜀，大紅袍、青花椒",
                        headSticker: "省 NT$ 169",
                        price: "2431",
                        originalPrice: "98201"
                    },
                    {
                        fileName: "curation-prd-1.jpg",
                        brand: "胡老爹菓子工房",
                        productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                        desc: "每一秒就賣出6包，熱銷全世界，搶購一空！",
                        headSticker: "省 NT$ 169",
                        price: "121",
                        originalPrice: ""
                    },
                    {
                        fileName: "curation-prd-2.jpg",
                        brand: "海邊走走",
                        productName: "激厚海苔蛋捲",
                        desc: "激厚系列用5倍的厚實口感",
                        headSticker: "",
                        price: "982",
                        originalPrice: ""
                    },
                    {
                        fileName: "curation-prd-3.jpg",
                        brand: "胡老爹菓子工房",
                        productName: "港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精港式流心奶黃精典浮雕心奶黃精典浮雕心奶黃精",
                        desc: "每一秒就賣出6包，熱銷全世界，搶購一空！",
                        headSticker: "",
                        price: "676",
                        originalPrice: ""
                    },
                    {
                        fileName: "curation-prd-4.jpg",
                        brand: "海邊走走",
                        productName: "激厚海苔蛋捲",
                        desc: "激厚系列用5倍的厚實口感",
                        headSticker: "省 NT$ 169",
                        price: "982",
                        originalPrice: "1200"
                    },
                ]
            }
        }
    };
</script>