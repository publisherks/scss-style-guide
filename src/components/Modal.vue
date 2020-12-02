<template>
    <div
        class="modal modal-overlay"
        v-on:click.self="$emit('close')">
        <div class="modal-contanier">
            <div class="modal-top">
                <h3 class="sub-title">{{ title }}</h3>
                <a
                    href="#n"
                    class="close-btn"
                    v-on:click="$emit('close')">
                    <i class="fal fa-times"></i>
                </a>
            </div>
            <div class="modal-contents">
                <p class="input-title mb-10">계약자(상호명)</p>
                <div class="input-box pull mb-20">
                    <input
                        type="text"
                        placeholder="계약자(상호명) 입력하세요.">
                    <a
                        href="#"
                        class="del"></a>
                </div>
                <p class="input-title mb-10">계약자(상호명)</p>
                <div class="input-box pull mb-20">
                    <input
                        type="text"
                        placeholder="계약자(상호명) 입력하세요.">
                    <a
                        href="#"
                        class="del"></a>
                </div>
                <p class="input-title mb-10">계약자(상호명)</p>
                <div class="input-box pull mb-20">
                    <input
                        type="text"
                        placeholder="계약자(상호명) 입력하세요.">
                    <a
                        href="#"
                        class="del"></a>
                </div>
                <p class="input-title mb-10">계약자(상호명)</p>
                <div class="input-box pull mb-20">
                    <input
                        type="text"
                        placeholder="계약자(상호명) 입력하세요.">
                    <a
                        href="#"
                        class="del"></a>
                </div>
                <p class="input-title mb-10">계약자(상호명)</p>
                <div class="input-box pull">
                    <input
                        type="text"
                        placeholder="계약자(상호명) 입력하세요.">
                    <a
                        href="#"
                        class="del"></a>
                </div>
            </div>
            <slot/>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Modal",
        props: {
            title : {
                type: String,
            }
        }
    };
</script>