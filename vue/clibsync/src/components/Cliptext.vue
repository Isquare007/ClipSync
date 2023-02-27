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
     data() {
        return{
            lastData: ""
        }
     },
    mounted() {
    //     setInterval(() => {
    //     this.$emit(sendClipboardData());
    // }, 9000);
    },

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
        },
        //  async saveNewClip(clip) {
        //      try {
        //          const response = await fetch('https://clipsync-1-default-rtdb.firebaseio.com/copied_data/MDWkzWViaoMK3vQmwckEaQnfDEu1.json', {
        //              method: 'POST',
        //              headers: {
        //                  'Content-Type': 'application/json'
        //              },
        //              body: JSON.stringify(clip)
        //          });
        //          const json = await response.json();
        //          console.log(json);
        //      } catch (error) {
        //          console.error(error);
        //      }

        //     },

        async sendClipboardData() {
            const data = await navigator.clipboard.readText();
                
             if (data !== this.lastData) {
                 this.lastData = data
                //  this.saveNewClip(data);
                console.log(this.lastData)
             }

            // const db = getDatabase();
            // const reference = ref(db, 'copied_data/' + userId)
            
            // set(reference, {
            //     'data': data,
            //     'type': 'text',
            //     created_at: new Date().toISOString(),
            //     updated_at: new Date().toISOString()
            // })
        },
    },
}
</script>

<style scoped>
.empty {
    margin-top: 50%;
    color: rgb(187, 190, 190);
}
</style>