<template>
    <div class="clip-content">
            <h1 class="empty" v-if="emptyContent()">No clip-content in database</h1>
            <div class="_1">
                <div class="copied-text">
                    <div class="text-6">{{ text.data }}</div>
                </div>
                <button @click="copyAction(text.data)"  class="copy-button text-3">
                    Copy
                </button>
            </div>
    </div>
</template>

<script>
export default {
    props: ['content', 'text', 'index'],
    methods: {
            async copyAction(idd) {
            // const textToCopy = document.querySelector(`.${idd}`);
            const textToCopy = idd
            try {
                await navigator.clipboard.writeText(textToCopy);
                console.log("Text copied to clipboard");
            } catch (err) {
                console.error("Failed to copy text: ", err);
            }
        },
        emptyContent(){
            if (Object.keys(this.content).length) {
                return false
            }
            return true
        }
    },     
}
</script>

<style scoped>
.empty {
    margin-top: 50%;
    color: rgb(187, 190, 190);
}
</style>