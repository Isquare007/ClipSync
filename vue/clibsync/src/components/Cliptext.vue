<template>
    <div class="clip-content">
        <div class="_1">
            <div class="copied-text">
                <!-- dynamically populates it with the database content -->
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
        async copyAction(id) {
            // copy's the text of the id passed into it
            const textToCopy = id
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