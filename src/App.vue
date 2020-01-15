<template>
  <div id="app">
    <Nav/>
    <b-container fluid>
      <span class="text-center">
        <h1>Task Manager</h1>
      </span>
      <AddTask/>
      <FilterTasks/>
      <ToDoList/>
    </b-container>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import ToDoList from "./components/ToDoList.vue";
import AddTask from "./components/AddTask.vue";
import FilterTasks from "./components/Filter.vue";

export default {
  name: "app",
  components: {
    Nav,
    ToDoList,
    AddTask,
    FilterTasks
  }
};
</script>
