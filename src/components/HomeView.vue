<template>
  <div class="flex bg-blue-50">
    <div class="nav-container p-1 h-screen bg-blue-200 w-60 shadow-lg">
      <div class="flex p-2">
        <ul class="w-full">
          <li class="p-3 bg-blue-400 m-3 rounded text-white hover:bg-blue-800 cursor-pointer" @click="setActiveComponent('WelcomePageVue')">Welcome Page</li>
          <li class="p-3 bg-blue-400 m-3 rounded text-white hover:bg-blue-800 cursor-pointer" @click="setActiveComponent('HelloWorld')">Sign up Page</li>
          <li class="p-3 bg-blue-400 m-3 rounded text-white hover:bg-blue-800 cursor-pointer" @click="setActiveComponent('LogsPageVue')">Logs Page</li>
        </ul>
      </div>
    </div>


    <div class="flex flex-1 justify-center items-center">
      <div class="w-full max-w-8xl mx-6">
       <component :is="activeComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
import LogsPageVue from './LogsPage.vue';
import WelcomePageVue from './WelcomePage.vue';

export default {
  name: "HelloView",
  components: {
    LogsPageVue,
    HelloWorld,
    WelcomePageVue
  },
  data() {
    return {
      activeComponent: "WelcomePageVue", 
    };
  },
  methods:{
    setActiveComponent(componentName) {
      this.activeComponent = componentName; 
    },
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
