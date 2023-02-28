<template>
    <div class="content">
        <div class="background"></div>
        <div class="text-block">Texts</div>
        <div class="action-buttons">
            <button @click="sendClipboardData()" class="refresh-button w-inline-block">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_173_61981)">
                        <path
                            d="M9.81774 24.9898C9.81774 22.3768 10.8565 19.8712 12.7053 18.0247C14.5541 16.1784 17.061 15.1427 19.6738 15.1457H27.1774L23.9773 18.3458H23.9776C23.871 18.4516 23.811 18.5955 23.811 18.7459C23.811 18.896 23.871 19.04 23.9776 19.1458L25.1777 20.3458H25.1774C25.2834 20.4524 25.4274 20.5121 25.5775 20.5121C25.7276 20.5121 25.8716 20.4524 25.9776 20.3458L32.1654 14.1377C32.272 14.0319 32.332 13.888 32.332 13.7378C32.332 13.5877 32.272 13.4438 32.1654 13.3377L25.9776 7.15388C25.8716 7.04729 25.7276 6.9873 25.5775 6.9873C25.4274 6.9873 25.2834 7.04729 25.1774 7.15388L23.9773 8.35395H23.9776C23.871 8.4597 23.811 8.60367 23.811 8.75378C23.811 8.9039 23.871 9.04787 23.9776 9.1539L27.1777 12.354H19.6734C17.1706 12.3531 14.7239 13.0948 12.6427 14.4851C10.5612 15.8752 8.93924 17.8515 7.98138 20.1637C7.02352 22.4759 6.77295 25.0203 7.26124 27.4751C7.74979 29.9299 8.95516 32.1844 10.7252 33.9539C11.0827 34.311 11.6033 34.4506 12.0913 34.32C12.5793 34.1891 12.9607 33.808 13.0913 33.32C13.2222 32.832 13.0827 32.311 12.7252 31.9539C10.8634 30.1152 9.81595 27.6068 9.81731 24.9899L9.81774 24.9898Z"
                            fill="black" />
                        <path
                            d="M42.0213 20.0622C41.3863 18.558 40.4652 17.1914 39.3095 16.0382C38.9521 15.6811 38.4314 15.5416 37.9434 15.6721C37.4554 15.803 37.074 16.1841 36.9434 16.6721C36.8126 17.1601 36.9521 17.6811 37.3095 18.0382C39.1532 19.8845 40.1887 22.3876 40.1879 24.9969C40.1873 27.6063 39.1505 30.1085 37.3056 31.9539C35.4607 33.7994 32.9588 34.8367 30.3494 34.8381H22.8572L26.0573 31.6381H26.057C26.1636 31.5323 26.2236 31.3883 26.2236 31.2382C26.2236 31.0881 26.1636 30.9441 26.057 30.8381L24.8569 29.638H24.8572C24.7512 29.5317 24.6072 29.4718 24.4571 29.4718C24.307 29.4718 24.163 29.5317 24.057 29.638L17.8692 35.8423C17.7626 35.948 17.7026 36.092 17.7026 36.2421C17.7026 36.3922 17.7626 36.5362 17.8692 36.6422L24.057 42.8261C24.163 42.9327 24.307 42.9926 24.4571 42.9926C24.6072 42.9926 24.7512 42.9327 24.8572 42.8261L26.0573 41.626H26.057C26.1636 41.5202 26.2236 41.3763 26.2236 41.2262C26.2236 41.076 26.1636 40.9321 26.057 40.826L22.8569 37.626H30.3612C33.1598 37.6254 35.8794 36.698 38.0948 34.9884C40.3105 33.2785 41.8975 30.8832 42.6079 28.1762C43.318 25.4694 43.1119 22.6033 42.0209 20.0262L42.0213 20.0622Z"
                            fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_173_61981">
                            <rect width="50" height="50" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <button class="clear-button w-button">
                Clear
            </button>
        </div>
        <Cliptext v-for="(text, index) in content" :key="text.id" :content="content" :text="text" :index="index"
            @sendClipboardData="sendClipboardData" />
    </div>
</template>

<script>
import Cliptext from '@/components/Cliptext.vue'
import { getDatabase, ref, set, onValue } from 'firebase/database';

export default {
    name: 'Texts',
    data() {
        return {
            lastData: '',
            isMounted: false,
            content: ''
        }
    },
    // props: ['content'],
    components: {
        Cliptext,
    },
    mounted() {
        //     setInterval(() => {
        //     this.sendClipboardData();
        // }, 3000);
        this.isMounted = true;
        this.startInterval();
        window.addEventListener('focus', this.handleFocus);
    },
    activated() {
        this.isMounted = true;
        this.startInterval();
        window.addEventListener('focus', this.handleFocus);
    },
    deactivated() {
        this.isMounted = false;
        clearInterval(this.intervalId);
        window.removeEventListener('focus', this.handleFocus);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
        window.removeEventListener('focus', this.handleFocus);
    },
    unmount() {
        this.isMounted = false;
    },
    methods: {
        startInterval() {
            if (this.intervalId) {
                clearInterval(this.intervalId)
            }
            this.intervalId = setInterval(() => {
                if (this.isMounted && document.hasFocus()) {
                    this.sendClipboardData();
                    this.storage('2EpaUOFlvvOC30ZOLEoh7qABuJy2')
                } else {
                    console.log("Document not focused")
                    clearInterval(this.intervalId);
                }
            }, 1000);
        },
        async sendClipboardData() {
            const data = await navigator.clipboard.readText();
            // document.addEventListener('focus', async () => {
            //     const data = await navigator.clipboard.readText();
            this.lastData = localStorage.getItem('last_data');
            console.log(data === this.lastData)
            if (data !== this.lastData) {
                this.lastData = data;
                // console.log(this.lastData)
                const clip = {
                    data: data,
                    type: 'text',
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }
                console.log(typeof (this.lastData), typeof (data))
                localStorage.setItem('last_data', this.lastData);
                // this.lastData = data
                this.saveNewClip(clip);
            }

            // const db = getDatabase();
            // const reference = ref(db, 'copied_data/' + userId)

            // set(reference, {
            //     'id': id,
            //     'data': data,
            //     'type': 'text',
            //     created_at: new Date().toISOString(),
            //     updated_at: new Date().toISOString()
            // })
        },
        handleFocus() {
            if (this.isMounted) {
                this.startInterval();
            }
        },
        storage(id) {
            let data;
            fetch(`https://clipsync-1-default-rtdb.firebaseio.com/copied_data/${id}.json`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failed to fetch data');
                    }
                })
                .then(usersData => {
                    let arr = Object.entries(usersData).reverse();
                    let reversedObj = Object.fromEntries(arr);
                    this.content = reversedObj;
                    console.log(typeof (this.content));
                })
                .catch(error => {
                    console.error(error);
                });
        },
        async saveNewClip(clip) {
            try {
                const response = await fetch('https://clipsync-1-default-rtdb.firebaseio.com/copied_data/2EpaUOFlvvOC30ZOLEoh7qABuJy2.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(clip)
                });
                const dataId = await response.json().name;
                console.log(dataId);
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>
