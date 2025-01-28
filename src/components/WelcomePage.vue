<template>
    <div class="flex justify-center items-center">
        <div>
            <h1>{{message}}</h1>
            <button @click="updateMessage">Update Message</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
       return{
        //  message : "Hello World"
       }
    },
    computed: {
        message() {
        return this.$store.getters.getMessage;
        }
    },
    methods: {
    updateMessage() {
      this.$store.commit("updateMessage", "Hello Prashanth");
    },
  },
}
</script>

<style>

</style>