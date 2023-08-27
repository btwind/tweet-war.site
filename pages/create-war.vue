<template>
    <div v-if="user_data">
        <h1>Create War</h1>
        <Menu />
    </div>
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