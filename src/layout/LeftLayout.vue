<template>
    <aside id="sideNav">
        <h2 class="logo">
            <!-- <img
                src="@/assets/images/logo-gray.png"
                alt="">-->
        </h2>
        <a
            href="#"
            class="side-btn">
            <i class="fal fa-long-arrow-left"></i>
        </a>
        <div id="nav">
            <ul>
                <li>
                    <a href="#">
                        <i class="fas fa-chart-bar"></i>모니터링
                    </a>
                </li>
                <li class="depth1">
                    <a
                        href="#"
                        class="on">
                        <i class="far fa-briefcase"></i>영업관리
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a
                                href="#"
                                class="on">주문확인</a>
                        </li>
                        <li>
                            <a href="#">발주</a>
                        </li>
                        <li>
                            <a href="#">반품확인</a>
                        </li>
                        <li>
                            <a href="#">배송조회</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="far fa-boxes"></i>자재관리
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">재고</a>
                        </li>
                        <li>
                            <a href="#">입고</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>생산관리
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">생산계획</a>
                        </li>
                        <li>
                            <a href="#">작업지시</a>
                        </li>
                        <li>
                            <a href="#">출하지시</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>공정관리
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">공정투입현황</a>
                        </li>
                        <li>
                            <a href="#">LOT 추적관리</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>품질관리
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">수입검사</a>
                        </li>
                        <li>
                            <a href="#">포장검사</a>
                        </li>
                        <li>
                            <a href="#">부적합관리</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>현황
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">생산실적관리</a>
                        </li>
                        <li>
                            <a href="#">출하실적</a>
                        </li>
                        <li>
                            <a href="#">매출현황</a>
                        </li>
                        <li>
                            <a href="#">불량현황</a>
                        </li>
                        <li>
                            <a href="#">반품현황</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>설비관리
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">설비이력관리</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>HACCP 관리
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">HACCP 기준관리</a>
                        </li>
                        <li>
                            <a href="#">선행요건 기준관리</a>
                        </li>
                        <li>
                            <a href="#">CCP 기준관리</a>
                        </li>
                        <li>
                            <a href="#">HACCP 현황</a>
                        </li>
                        <li>
                            <a href="#">HACCP 보고서</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>기준정보
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">공통코드</a>
                        </li>
                        <li>
                            <a href="#">품목정보</a>
                        </li>
                        <li>
                            <a href="#">BOM</a>
                        </li>
                        <li>
                            <a href="#">거래처 정보</a>
                        </li>
                        <li>
                            <a href="#">고객 정보</a>
                        </li>
                        <li>
                            <a href="#">배송지 정보</a>
                        </li>
                        <li>
                            <a href="#">설비 정보</a>
                        </li>
                        <li>
                            <a href="#">검사 정보</a>
                        </li>
                        <li>
                            <a href="#">불량유형</a>
                        </li>
                        <li>
                            <a href="#">공지사항</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>조직관리
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">사원관리</a>
                        </li>
                        <li>
                            <a href="#">부서관리</a>
                        </li>
                        <li>
                            <a href="#">권한관리</a>
                        </li>
                    </ul>
                </li>
                <li class="depth1">
                    <a href="#">
                        <i class="fas fa-briefcase"></i>시스템
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a href="#">POP</a>
                        </li>
                        <li>
                            <a href="#">사용자 통계</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
    export default {
        name : "LeftLayout",
        mounted () {
            this.initNav();
        },
        methods: {
            initNav () {
                const SLIDE  = this.$el.querySelectorAll(".depth1"),
                      SUBNAV = this.$el.querySelectorAll(".sub-nav");

                SLIDE.forEach((el) => {
                    let target = el.childNodes[0];
                    target.addEventListener("click", event => {
                        let subnavcls = event.currentTarget.nextElementSibling.classList,
                            subnav    = event.currentTarget.nextElementSibling,
                            element   = event.currentTarget;

                        if ( subnavcls.contains("show") && !target.classList.contains("on")) {
                            subnavcls.remove("show");
                            element.classList.remove("open");
                        } else {
                            SLIDE.forEach((el) => {
                                if (!el.childNodes[0].classList.contains("on")){
                                    el.childNodes[0].classList.remove("open");
                                }
                            });

                            SUBNAV.forEach((el) => {
                                if (!el.getElementsByClassName("on").length){
                                    el.classList.remove("show");
                                }
                            });

                            subnavcls.add("show");
                            element.classList.add("open");
                        }

                    });

                    if (target.classList.contains("on")) {
                        target.classList.add("open");
                        target.nextElementSibling.classList.add("show");
                    }
                });
            },
        },
    };
</script>