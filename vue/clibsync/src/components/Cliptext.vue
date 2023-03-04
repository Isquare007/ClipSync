<template>
    <div class="clip-content">
        <div class="_1">
            <div class="copied-text">
                <div class="text-6">{{ text.data }}</div>
            </div>
            <button @click="copyAction(text.data)" class="copy-button text-3">
                Copy
            </button>
        </div>
    </div>
</template>

<script>


export default {
    props: ['content', 'text', 'index'],
    data() {
        return {
        }
    },
    methods: {
        async copyAction(idd) {
            const textToCopy = idd
            try {
                await navigator.clipboard.writeText(textToCopy);
                console.log("Text copied to clipboard");
            } catch (err) {
                console.error("Failed to copy text: ", err);
            }
        },
    },
}
</script>