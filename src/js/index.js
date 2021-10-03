import 'regenerator-runtime/runtime';
import Vue from "vue/dist/vue";

// importing Vue Components

Vue.component('v-button',require('../components/button.vue'));
Vue.component('v-panel',require('../components/panel.vue'));

const app = new Vue({
    el: "#app",
    data: {
        msg: "Hello Vue Wizard",
        current_step: 1, // do not remove
        total_step: 0, // do not remove
    },   
    methods: {
        say: function() {
            console.log("say awasome");
            return true;
        },

        // step_finish will execute as the last step next function
        // do not remove
        step_finish: function() {
            console.log("Last step");
            this.current_step = 1;
        },
    },
});