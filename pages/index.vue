<template>
    <NuxtLayout>
    Index
  </NuxtLayout>
</template>
<script>
export default {
    data(){
        return {
            user_data: null
        }
    },
    mounted(){
        let userData = localStorage.getItem('user_data')
        if(userData && JSON.parse(userData).id){
            this.user_data = JSON.parse(userData)
        }else{
            this.$router.push('/login')
        }
    }
}
</script>