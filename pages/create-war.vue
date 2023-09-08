<template>
    <NuxtLayout v-slot="{user}">
        <div v-if="user" class="w-full h-screen overflow-y-auto pb-16 flex flex-wrap">
            <h1 class="w-full font-bold text-xl p-4 text-center">Create War</h1>
            <div class="w-full mx-auto p-3">
                <textarea v-model="text" class="border-2 w-full p-4 rounded-lg" rows="6" placeholder="Tulis Joke Anda"></textarea>
                <button class="bg-primary text-primary_text py-4 w-full rounded-lg" @click="submit(user.id)">
                    Bagikan
                </button>
            </div>
        </div>
  </NuxtLayout>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            text: null
        }
    },
    methods:{
       submit(uId){
        if(!this.text){
            return
        }
        axios.post('/api/create-war', {
            text: this.text,
            u_id: uId
        }).then(({data}) => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
       }
    }
}
</script>