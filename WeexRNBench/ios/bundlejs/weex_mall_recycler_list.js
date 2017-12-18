// { "framework": "Vue" }

"use weex:vue";


/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
        /******/
            return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
                /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }


    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var _App = __webpack_require__(1);

        var _App2 = _interopRequireDefault(_App);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        _App2.default.el = '#root';
        new Vue(_App2.default);

        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports, __webpack_require__) {

        var __vue_exports__, __vue_options__
        var __vue_styles__ = []

        /* styles */
        __vue_styles__.push(__webpack_require__(2))

        /* script */
        __vue_exports__ = __webpack_require__(3)

        /* template */
        var __vue_template__ = __webpack_require__(4)
        __vue_options__ = __vue_exports__ = __vue_exports__ || {}
        if (
            typeof __vue_exports__.default === "object" ||
            typeof __vue_exports__.default === "function"
        ) {
            if (Object.keys(__vue_exports__).some(function(key) {
                    return key !== "default" && key !== "__esModule"
                })) {
                console.error("named exports are not supported in *.vue files.")
            }
            __vue_options__ = __vue_exports__ = __vue_exports__.default
        }
        if (typeof __vue_options__ === "function") {
            __vue_options__ = __vue_options__.options
        }
        __vue_options__.__file = "/usr/src/app/raw/ccd95a7597dc32e01cbd278e8624be3e/App.vue"
        __vue_options__.render = __vue_template__.render
        __vue_options__.staticRenderFns = __vue_template__.staticRenderFns
        __vue_options__._scopeId = "data-v-f9101b82"
        __vue_options__.style = __vue_options__.style || {}
        __vue_styles__.forEach(function(module) {
            for (var name in module) {
                __vue_options__.style[name] = module[name]
            }
        })
        if (typeof __register_static_styles__ === "function") {
            __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
        }

        module.exports = __vue_exports__


        /***/
    }),
    /* 2 */
    /***/
    (function(module, exports) {

        module.exports = {
            "list": {
                "width": "750",
                "backgroundColor": "#EFEFEF"
            },
            "row": {
                "flexDirection": "row"
            },
            "tab-cell": {
                "backgroundColor": "#f51438"
            },
            "tab": {
                "height": "120",
                "width": "150",
                "justifyContent": "center",
                "alignItems": "center"
            },
            "tab-icon": {
                "width": "45",
                "height": "45"
            },
            "tab-title": {
                "fontSize": "28",
                "color": "#FFFFFF",
                "marginTop": "10"
            },
            "banner-image": {
                "width": "750",
                "height": "235"
            },
            "app-cell": {
                "backgroundColor": "#FFFFFF"
            },
            "app-box": {
                "width": "180",
                "paddingTop": "15",
                "paddingBottom": "15",
                "paddingLeft": "15",
                "paddingRight": "15"
            },
            "app-title": {
                "width": "180",
                "fontSize": "30",
                "textAlign": "center",
                "paddingTop": "15",
                "color": "#999999"
            },
            "app-icon": {
                "width": "140",
                "height": "140",
                "marginLeft": "20"
            },
            "card": {
                "width": "710",
                "marginTop": "20",
                "marginRight": "20",
                "marginBottom": "20",
                "marginLeft": "20",
                "backgroundColor": "#FFFFFF",
                "borderRadius": "15"
            },
            "card-banner": {
                "width": "222",
                "height": "60"
            },
            "card-side": {
                "paddingTop": "20",
                "paddingRight": "20",
                "paddingBottom": "20",
                "paddingLeft": "20"
            },
            "card-poster": {
                "width": "230",
                "height": "230",
                "marginRight": "20"
            },
            "card-title": {
                "fontSize": "26",
                "color": "#666666",
                "marginTop": "10",
                "paddingBottom": "6"
            },
            "card-line": {
                "alignItems": "center",
                "paddingTop": "5",
                "paddingBottom": "5"
            },
            "card-icon": {
                "width": "36",
                "height": "36",
                "marginRight": "8"
            },
            "card-subtitle": {
                "fontSize": "28",
                "color": "#07152a"
            },
            "card-progress": {
                "flexDirection": "row",
                "alignItems": "center",
                "width": "230",
                "height": "30",
                "backgroundColor": "#FEC1C1",
                "borderRadius": "20",
                "marginTop": "10",
                "marginBottom": "10"
            },
            "card-progress-inner": {
                "position": "absolute",
                "height": "30",
                "left": 0,
                "borderRadius": "20",
                "backgroundColor": "#ff3c32"
            },
            "card-got": {
                "position": "absolute",
                "left": "8",
                "lineHeight": "30",
                "color": "#FFFFFF",
                "fontSize": "22"
            },
            "card-remain": {
                "position": "absolute",
                "right": "8",
                "lineHeight": "30",
                "color": "#FFFFFF",
                "fontSize": "22"
            },
            "card-info": {
                "width": "400",
                "flexDirection": "row",
                "alignItems": "flex-end"
            },
            "card-price": {
                "fontSize": "52",
                "color": "#ff3c32",
                "marginBottom": "-10",
                "marginTop": "10",
                "marginRight": "8"
            },
            "card-sale-price": {
                "fontSize": "28",
                "color": "#999999",
                "textDecoration": "line-through"
            },
            "card-btn": {
                "position": "absolute",
                "right": 0,
                "bottom": 0,
                "backgroundColor": "#ff5d62",
                "borderRadius": "8",
                "width": "125",
                "height": "52",
                "justifyContent": "center"
            },
            "card-btn-text": {
                "color": "#FFFFFF",
                "fontSize": "32",
                "textAlign": "center"
            },
            "floor": {
                "marginBottom": "15",
                "backgroundColor": "#FFFFFF"
            },
            "floor-title": {
                "fontSize": "40",
                "textAlign": "center",
                "paddingTop": "35",
                "paddingBottom": "25"
            },
            "floor-desc": {
                "lines": 2,
                "color": "#999999",
                "fontSize": "30",
                "paddingLeft": "30",
                "paddingRight": "30"
            },
            "floor-image-box": {
                "flexDirection": "row",
                "justifyContent": "space-between",
                "marginTop": "20"
            },
            "floor-image": {
                "width": "245",
                "height": "245"
            },
            "floor-comment": {
                "color": "#52bfe6",
                "fontSize": "32",
                "textAlign": "right",
                "paddingRight": "50",
                "marginTop": "25",
                "marginBottom": "20"
            }
        }

        /***/
    }),
    /* 3 */
    /***/
    (function(module, exports) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var dataset = {
            apps: [{
                type: 'apps',
                apps: [{
                    title: '热门搭配',
                    icon: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg'
                }, {
                    title: '网红大衣',
                    icon: 'https://gw.alicdn.com/tfs/TB1oM1qaMvD8KJjy0FlXXagBFXa-140-140.png_150x10000.jpg'
                }, {
                    title: '四件套',
                    icon: 'https://gw.alicdn.com/tfs/TB1Oiz0b22H8KJjy0FcXXaDlFXa-140-140.png_150x10000.jpg'
                }, {
                    title: '人气彩妆',
                    icon: 'https://gw.alicdn.com/tfs/TB1LhJzQFXXXXabXXXXXXXXXXXX-140-140.png_150x10000.jpg'
                }]
            }, {
                type: 'apps',
                apps: [{
                    title: '红人新品',
                    icon: 'https://gw.alicdn.com/tfs/TB1L5upaH_I8KJjy1XaXXbsxpXa-140-140.png_150x10000.jpg'
                }, {
                    title: '网红拖鞋',
                    icon: 'https://gw.alicdn.com/tfs/TB1w.ocb3DD8KJjy0FdXXcjvXXa-140-140.png_150x10000.jpg'
                }, {
                    title: '腔调掌柜',
                    icon: 'https://img.alicdn.com/tfs/TB1sWLoRVXXXXbdXXXXXXXXXXXX-140-140.png'
                }, {
                    title: '时尚新品',
                    icon: 'https://gw.alicdn.com/tfs/TB10.R_SpXXXXbtXXXXXXXXXXXX-140-140.png'
                }]
            }, {
                type: 'apps',
                apps: [{
                    title: '潮流穿搭',
                    icon: 'https://img.alicdn.com/tfs/TB1fRVASpXXXXXdXXXXXXXXXXXX-140-140.png'
                }, {
                    title: '暖心好物',
                    icon: 'https://img.alicdn.com/tfs/TB1_TkdPVXXXXcJXXXXXXXXXXXX-140-140.png'
                }, {
                    title: '明星面膜',
                    icon: 'https://img.alicdn.com/tps/TB1goZhPXXXXXXfXpXXXXXXXXXX-118-118.png_170x120Q50s50.jpg'
                }, {
                    title: '彩妆香氛',
                    icon: 'https://img.alicdn.com/tps/TB1zUTQPXXXXXaZaXXXXXXXXXXX-118-118.png_170x120Q50s50.jpg'
                }]
            }],
            tab: [{
                type: 'tab',
                tabs: [{
                    title: '首页',
                    icon: 'https://gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
                }, {
                    title: '耍帅',
                    icon: 'https://gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
                }, {
                    title: '旅行',
                    icon: 'https://gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
                }, {
                    title: '潮玩',
                    icon: 'https://img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png'
                }, {
                    title: '穿搭',
                    icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png'
                }]
            }],
            banner: [{
                type: 'banner',
                src: 'https://img.alicdn.com/imgextra/i4/184/TB2LPjVhMLD8KJjSszeXXaGRpXa_!!184-0-luban.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://img.alicdn.com/imgextra/i4/61/TB24IbTh3fH8KJjy1zcXXcTzpXa_!!61-0-yamato.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/i2/145/TB24D30cMjN8KJjSZFkXXaboXXa_!!145-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/i3/161/TB2syUXcJLO8KJjSZPcXXaV0FXa_!!161-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/i4/167/TB2wrL8h26H8KJjSspmXXb2WXXa_!!167-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/i2/25/TB2GgAmhS_I8KJjy0FoXXaFnVXa_!!25-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB2uQAFhb_I8KJjy1XaXXbsxpXa_!!89-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://img.alicdn.com/simba/img/TB19heYdwn.PuJjSZFkSuw_lpXa.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://img.alicdn.com/imgextra/i1/174/TB2xzb0eOqAXuNjy1XdXXaYcVXa_!!174-0-luban.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB27XSvg6nD8KJjSspbXXbbEXXa_!!12-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB2cF.xfTnI8KJjSszbXXb4KFXa_!!112-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB2ZweVg9_I8KJjy0FoXXaFnVXa_!!158-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB2O_AKctHO8KJjSZFtXXchfXXa_!!53-0-lubanu.jpg_q50.jpg'
            }],
            floor: [{
                type: 'floor',
                title: '就造专属感，给孩子寻个座椅好玩伴',
                desc: '犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？',
                pictures: ['https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                count: 237
            }, {
                type: 'floor',
                title: '睡袍穿不对，脱光也不媚！',
                desc: '“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚',
                pictures: ['https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                count: 876
            }, {
                type: 'floor',
                title: '上天入海？运动相机帮你搞定',
                desc: '现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备',
                pictures: ['https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                count: 59
            }, {
                type: 'floor',
                title: '关于培根的那些事，教你吃得门清',
                desc: '培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉',
                pictures: ['https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'],
                count: 3576
            }, {
                type: 'floor',
                title: '轻奢风来袭，皮艺床打造典雅居室',
                desc: '对于追求生活高品质感的小伙伴来说，皮艺家具是展现其高格调的途径之一。想要营造出奢华质感的卧室环境，大气庄重的皮床当然是不错的选择。特别是简欧风或是美式古典风格的家居环境，如果配以皮艺床简直就是点睛之笔',
                pictures: ['https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                count: 36
            }, {
                type: 'floor',
                title: '提高品质生活，从用好水开始',
                desc: '我们生活中每天都要喝水、用水，可是你真的喝到、用到好水了么？为了得到更高品质的生活，我们需要更多的好东西让我们的生活更有档次，那不如就从改变你每天都要亲密接触的水开始吧',
                pictures: ['https://gw.alicdn.com/imgextra/i2/1904229646/TB2dRg4dgoQMeJjy0FpXXcTxpXa_!!1904229646-2-daren.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i1/1904229646/TB2JtOjfOAKL1JjSZFoXXagCFXa_!!1904229646-2-daren.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i1/1904229646/TB2BSXjdwsSMeJjSspeXXa77VXa_!!1904229646-2-daren.png_250x250.jpg'],
                count: 74
            }, {
                type: 'floor',
                title: '酒鬼到了意大利，收不住的红酒心',
                desc: '意大利是一个集古典与艺术于一身的国度，这里是艺术的发源地之一，也是欧洲最早种植葡萄的国家之一。意大利的酿酒历史超过4000年，本地葡萄品种过千不止，古希腊人称其为“葡萄酒之国”',
                pictures: ['https://gw.alicdn.com/imgextra/i1/2872639756/TB21lwtXjihSKJjy0FiXXcuiFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/2872639756/TB2zgRJdwMPMeJjy1XdXXasrXXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i2/2872639756/TB2Ki0NdBUSMeJjSspfXXX0VFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg'],
                count: 182
            }],
            card: [{
                type: 'card',
                poster: 'http://gw.alicdn.com/tps/i4/1611893164/TB2t4mtXJqUQKJjSZFIXXcOkFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: '澳洲牛排10份装送刀叉酱料黄油',
                subtitle1: '送平底锅前3000仅78',
                subtitle2: '私厨经典 镇店套餐',
                got: 173,
                progress: 35,
                price: {
                    real: 108,
                    sale: 240.00
                }
            }, {
                type: 'card',
                poster: 'http://gw.alicdn.com/tps/i2/2838892713/TB2ma39aqmgSKJjSsphXXcy1VXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: 'HUAWEI P10',
                subtitle1: '买赠好礼6期免息',
                subtitle2: '6期免息',
                got: 996,
                progress: 89,
                price: {
                    real: 3488,
                    sale: 3488.00
                }
            }, {
                type: 'card',
                poster: 'http://gw.alicdn.com/tps/i3/902257410/TB2pzypfU3IL1JjSZFMXXajrFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: '海宁真皮皮衣男绵羊皮夹克外套',
                subtitle1: '店内领券下单438',
                subtitle2: '限送500双皮手套',
                got: 296,
                progress: 16,
                price: {
                    real: 538,
                    sale: 3080.00
                }
            }, {
                type: 'card',
                poster: 'https://gw.alicdn.com/tps/i4/0/TB2Mx3Jg4TI8KJjSspiXXbM4FXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: '玛丽黛佳元气风动三色腮红正品',
                subtitle1: '满108领券立减10元',
                subtitle2: '宛若天生粉红好气色',
                got: 1457,
                progress: 61,
                price: {
                    real: 49,
                    sale: 69.80
                }
            }, {
                type: 'card',
                poster: 'https://gw.alicdn.com/tps/i2/0/TB2i25DgN6I8KJjSszfXXaZVXXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: '王小二高山脐橙，酸甜如初恋',
                subtitle1: '前3分钟半价',
                subtitle2: 'VC仓库，酸甜如初恋',
                got: 598,
                progress: 42,
                price: {
                    real: 29.8,
                    sale: 56.10
                }
            }]

            // generate list data
        };

        function createListData(order) {
            var array = [];
            var list = order.split(/[\s,]+/);
            for (var i = 0; i < list.length; ++i) {
                var candidates = dataset[list[i]];
                if (candidates) {
                    var idx = Math.floor(Math.random() * candidates.length);
                    array.push(candidates[idx]);
                }
            }
            return array;
        }

        exports.default = {
            data: function data() {
                var blockList = 'tab,banner,apps,apps,banner,card,floor,floor' + ',tab,apps,apps,banner,card,card,banner,floor,floor,floor' + ',tab,banner,card,apps,banner,card,floor,floor,floor,floor,floor' + ',tab,apps,banner,card,banner,floor,floor,floor' + ',tab,apps,apps,card,floor,card,banner,floor,floor' + ',tab,banner,card,apps,banner,card,floor,floor,floor,floor' + ',tab,apps,banner,card,card,apps,floor,floor,floor';
                var order = blockList + ',' + blockList + ',' + blockList + ',' + blockList;
                return {
                    longList: createListData(order)
                };
            }
        };

        /***/
    }),
    /* 4 */
    /***/
    (function(module, exports) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', [_c('recycle-list', {
                    staticClass: ["list"],
                    appendAsTree: true,
                    attrs: {
                        "listData": _vm.longList,
                        "alias": "item",
                        "templateKey": "type",
                        "append": "tree"
                    }
                }, [_c('cell-slot', {
                    staticClass: ["tab-cell", "row"],
                    attrs: {
                        "templateType": "tab"
                    }
                }, [_c('div', {
                    key: {
                        "@binding": "t"
                    },
                    staticClass: ["tab"],
                    attrs: {
                        "[[repeat]]": {
                            "@expression": "item.tabs",
                            "@alias": "tab",
                            "@index": "t"
                        }
                    }
                }, [_c('image', {
                    staticClass: ["tab-icon"],
                    attrs: {
                        "src": {
                            "@binding": "tab.icon"
                        }
                    }
                }), _c('text', {
                    staticClass: ["tab-title"],
                    attrs: {
                        "value": {
                            "@binding": "tab.title"
                        }
                    }
                })])]), _c('cell-slot', {
                    staticClass: ["banner-cell"],
                    attrs: {
                        "templateType": "banner"
                    }
                }, [_c('image', {
                    staticClass: ["banner-image"],
                    attrs: {
                        "src": {
                            "@binding": "item.src"
                        }
                    }
                })]), _c('cell-slot', {
                    staticClass: ["app-cell", "row"],
                    attrs: {
                        "templateType": "apps"
                    }
                }, [_c('div', {
                    key: {
                        "@binding": "a"
                    },
                    staticClass: ["app-box"],
                    attrs: {
                        "[[repeat]]": {
                            "@expression": "item.apps",
                            "@alias": "app",
                            "@index": "a"
                        }
                    }
                }, [_c('image', {
                    staticClass: ["app-icon"],
                    attrs: {
                        "src": {
                            "@binding": "app.icon"
                        }
                    }
                }), _c('text', {
                    staticClass: ["app-title"],
                    attrs: {
                        "value": {
                            "@binding": "app.title"
                        }
                    }
                })])]), _c('cell-slot', {
                    staticClass: ["card-cell"],
                    attrs: {
                        "templateType": "card"
                    }
                }, [_c('div', {
                    staticClass: ["card"]
                }, [_c('div', {
                    staticStyle: {
                        height: "60px",
                        paddingLeft: "30"
                    }
                }, [_c('image', {
                    staticClass: ["card-banner"],
                    attrs: {
                        "src": "//img.alicdn.com/tfs/TB1moeURFXXXXasXXXXXXXXXXXX-390-105.png"
                    }
                })]), _c('div', {
                    staticClass: ["row"],
                    staticStyle: {
                        paddingBottom: "18px"
                    }
                }, [_c('div', {
                    staticClass: ["card-side"]
                }, [_c('image', {
                    staticClass: ["card-poster"],
                    attrs: {
                        "src": {
                            "@binding": "item.poster"
                        }
                    }
                })]), _c('div', {
                    staticClass: ["card-message"]
                }, [_c('text', {
                    staticClass: ["card-title"],
                    attrs: {
                        "value": {
                            "@binding": "item.title"
                        }
                    }
                }), _c('div', {
                    staticClass: ["card-line", "row"]
                }, [_c('image', {
                    staticClass: ["card-icon"],
                    attrs: {
                        "src": "//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"
                    }
                }), _c('text', {
                    staticClass: ["card-subtitle"],
                    attrs: {
                        "value": {
                            "@binding": "item.subtitle1"
                        }
                    }
                })]), _c('div', {
                    staticClass: ["card-line", "row"]
                }, [_c('image', {
                    staticClass: ["card-icon"],
                    attrs: {
                        "src": "//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"
                    }
                }), _c('text', {
                    staticClass: ["card-subtitle"],
                    attrs: {
                        "value": {
                            "@binding": "item.subtitle2"
                        }
                    }
                })]), _c('div', {
                    staticClass: ["card-progress", "row"]
                }, [_c('div', {
                    staticClass: ["card-progress-inner"]
                }), _c('text', {
                    staticClass: ["card-got"],
                    attrs: {
                        "value": ["已抢 ", {
                            "@binding": "item.got"
                        }, " 件"]
                    }
                }), _c('text', {
                    staticClass: ["card-remain"],
                    attrs: {
                        "value": [{
                            "@binding": "item.progress"
                        }, " %"]
                    }
                })]), _c('div', {
                    staticClass: ["card-info", "row"]
                }, [_c('text', {
                    staticClass: ["card-price"],
                    attrs: {
                        "value": ["¥ ", {
                            "@binding": "item.price.real"
                        }]
                    }
                }), _c('text', {
                    staticClass: ["card-sale-price"],
                    attrs: {
                        "value": ["¥ ", {
                            "@binding": "item.price.sale"
                        }]
                    }
                }), _c('div', {
                    staticClass: ["card-btn"]
                }, [_c('text', {
                    staticClass: ["card-btn-text"],
                    attrs: {
                        "value": "马上抢"
                    }
                })])])])])])]), _c('cell-slot', {
                    staticClass: ["floor-cell"],
                    attrs: {
                        "templateType": "floor"
                    }
                }, [_c('div', {
                    staticClass: ["floor"]
                }, [_c('text', {
                    staticClass: ["floor-title"],
                    attrs: {
                        "value": {
                            "@binding": "item.title"
                        }
                    }
                }), _c('text', {
                    staticClass: ["floor-desc"],
                    attrs: {
                        "lines": "2",
                        "value": {
                            "@binding": "item.desc"
                        }
                    }
                }), _c('div', {
                    staticClass: ["floor-image-box", "row"]
                }, [_c('image', {
                    key: {
                        "@binding": "x"
                    },
                    staticClass: ["floor-image"],
                    attrs: {
                        "src": {
                            "@binding": "source"
                        },
                        "[[repeat]]": {
                            "@expression": "item.pictures",
                            "@alias": "source",
                            "@index": "x"
                        }
                    }
                })]), _c('text', {
                    staticClass: ["floor-comment"],
                    attrs: {
                        "[[match]]": "item.count",
                        "value": [{
                            "@binding": "item.count"
                        }, " 人说好"]
                    }
                })])])], 1)], 1)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true

        /***/
    })
    /******/
]);