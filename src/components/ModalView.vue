<template>
  <div class="details-container">
    <div class="details-item" v-for="(value, key) in details" :key="key">
      <span class="key">{{ formatKey(key) }}</span>
      <span class="value">{{ value }}</span>
    </div>
    <div class="confirmation-bar">
        <s-checkbox v-model="selected" label="Confirm here" :required="checkBoxRequired"  :invalidMessage="invalidMessage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalView",
  data(){
    return{
        checkBoxRequired: true,
        isInvalid: false,
        invalidMessage: "This is required"
    }
  },
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatKey(key) {
      return key.toUpperCase();
    },
    toggleFavorite() {
    this.$emit('check-confirm', this.isInvalid , this.invalidMessage );
    }
  },
};
</script>

<style scoped>
.details-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: auto;
}

.details-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px dashed #e0e0e0;
}

.key {
  font-weight: bold;
  color: #555;
  flex: 1;
}

.value {
  color: #333;
  flex: 2;
  text-align: right;
  word-wrap: break-word;
}
.confirmation-bar{
    padding: 10px;
}
</style>
