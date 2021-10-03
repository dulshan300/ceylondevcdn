<template>
  <div
    :data-step="step"
    v-if="$parent.current_step == step"
    class="vue-panel card"
  >
    <div class="card-body">
      <div v-if="title">
        <h5 class="text-center">{{ title }}</h5>
        <hr />
      </div>
      <slot></slot>
      <hr />
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-secondary mr-1"
          v-if="isBack"
          v-on:click="back"
        >
          Back
        </button>
        <button
          :disabled="disabled_next"
          type="button"
          class="btn btn-primary"
          v-on:click="next"
        >
          <span
            v-if="processing"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          {{ next_text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
module.exports ={
    props: ['step', 'title', 'action', 'bnext','dnext'],
    data: function() {
            return {
                isBack: (this.step == 1) ? false : true,
                next_text: (this.bnext) ? this.bnext : "Next",
                disabled_next: (this.dnext)?this.dnext:false,
                processing:false               
            }
        },
        methods: {
            next: async function() {
                this.processing = true;
                if (this.action) {
                    if (await this.$parent[this.action]()) {
                        if (this.$parent.current_step == this.$parent.total_step) {
                            this.$parent.step_finish();
                        } else {
                            this.$parent.current_step++;
                        }
                    }
                } else {
                    if (this.$parent.current_step == this.$parent.total_step) {
                        this.$parent.step_finish();
                    } else {
                        this.$parent.current_step++;
                    }
                }
                this.processing = false;
            },
            back: function() {
                this.$parent.current_step--
            }
        },
        created:function(){
        	this.$parent.total_step++;
        }
}
</script>