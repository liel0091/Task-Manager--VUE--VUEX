<template>
  <b-card
    header="Create tasks"
    header-tag="header"
    class="mb-5"
    title="Describe your new task here:"
  >
    <b-form @submit="onSubmit">
      <input
        type="input"
        v-model="title"
        placeholder="Enter describe ..."
        class="form-control col-12"
      >
      <input type="submit" value="Submit" class="btn btn-primary mt-5 col-12">
    </b-form>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTask",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTask(this.title);
    }
  }
};
</script>
