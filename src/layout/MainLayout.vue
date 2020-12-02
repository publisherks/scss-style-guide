<template>
    <div id="wrap">
        <LeftLayout/>
        <ContentLayout/>
    </div>
</template>

<script setup="">
    export { default as LeftLayout }    from "@/layout/LeftLayout";
    export { default as ContentLayout } from "@/layout/ContentLayout";
    export default {
        name : "MainLayout",
        data() {
            return {
                theme: "default",
            };
        },
        mounted() {
        },
        watch: {
            theme: {
                handler() {
                    this.$nextTick(() => {
                        document.getElementsByTagName("html")[0].setAttribute("data-theme", this.theme);
                        // this.root.style.setProperty("--main-color", "#4971ff");
                        // this.root.style.setProperty("--main-color-alpha2", "rgba(73, 113, 255, 0.2)");
                        // this.root.style.setProperty("--main-color-active", "#2f438d");
                        // this.root.style.setProperty("--sub-btn1-color", "#733dec");
                        // this.root.style.setProperty("--sub-btn1-color-active", "#442984");
                        // this.root.style.setProperty("--sub-btn2-color", "#c045e3");
                        // this.root.style.setProperty("--sub-btn2-color-active", "#6b2d7f");
                        // this.root.style.setProperty("--sub-btn3-color", "#9d98a4");
                        // this.root.style.setProperty("--sub-btn3-color-active", "#9d98a4");
                        // this.root.style.setProperty("--btn-shadow", "0 0 0 0.64");
                        // this.root.style.setProperty("--btn-disable-color", "#322d3a");
                        // this.root.style.setProperty("--gray-color", "#6a6571");
                        // this.root.style.setProperty("--gray-color-active", "#6a6571");
                        // this.root.style.setProperty("--red-color", "#f43827");
                        // this.root.style.setProperty("--red-color-active", "#f43827");
                        // this.root.style.setProperty("--bg-color", "#15141b");
                        // this.root.style.setProperty("--content-bg-color", "#231f29");
                        // this.root.style.setProperty("--content-bg-color-alpha5", "rgba(35, 31, 41, 0.5)");
                        // this.root.style.setProperty("--text-color1", "#ffffff");
                        // this.root.style.setProperty("--text-color1-alpha7", "rgba(255, 255, 255, 0.7)");
                        // this.root.style.setProperty("--text-color1-alpha3", "rgba(255, 255, 255, 0.3)");
                        // this.root.style.setProperty("--text-color2", "#d0cdd5");
                        // this.root.style.setProperty("--text-color3", "#9d98a4");
                        // this.root.style.setProperty("--text-disable-color", "#6a6571");
                        // this.root.style.setProperty("--table-th-color", "#342f3a");
                        // this.root.style.setProperty("--border-color", "#484251");
                        // this.root.style.setProperty("--border-color-alpha5", "rgba(72, 66, 81, 0.5)");
                        // else {
                        //     this.root.style.setProperty("--main-color", "#000");
                        // }
                    });
                },
                immediate: true,
            }
        },
    };
</script>
