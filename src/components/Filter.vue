<template>
  <div class="col-12 mb-5 p-0">
    <small>Filter tasks:</small>
    <br>
    <select @change="filtering($event)" class="col-1">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="200">200</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTasks",
  methods: mapActions(["filtering"])
};
</script> 
