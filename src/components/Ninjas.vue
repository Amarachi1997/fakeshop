<template>
    <ul>
        <li v-for="ninja in ninjas">{{ninja}}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            ninjas: ["yam", "beans", "rice", "pasta"]
        }
    }
}
</script>

<style scoped>

</style>