<template>
    <div id="container">
        <TopLayout/>
        <div class="contents">
            <router-view/>
        </div>
    </div>
</template>

<script setup="">
    export { default as TopLayout }     from "@/layout/TopLayout";
    export default {
        name : "ContentLayout",
    };
</script>