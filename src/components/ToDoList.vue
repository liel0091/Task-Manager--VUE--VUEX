<template>
  <div class="task-group">
    <b-card
      bg-variant="light"
      header="TASK"
      @dblclick="onDblClick(item)"
      v-for="item in allTasks"
      :key="item.id"
      title="Double click me when I am completed!"
      class="box word-break mb-3"
      :class="{'is-complete':item.completed}"
    >
      <span class="word-break">{{ item.title }}</span>
      <i @click="removeTask(item.id)" class="icon fas fa-skull"></i>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ToDoList",
  methods: {
    ...mapActions(["fetchtasks", "removeTask", "updateTask"]),
    onDblClick(item) {
      const task = {
        id: item.id,
        title: item.title,
        completed: !item.completed
      };
      this.updateTask(task);
    }
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.fetchtasks();
  }
};
</script>

<style scoped>
.task-group {
  display: flex;
  flex-flow: row wrap;
}

.box {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .box {
    width: calc(50% - 10px);
    min-width: 320px;
  }

  .box:nth-child(even) {
    margin-left: 20px;
  }
}

.is-complete {
  background: #35495e !important;
  color: #fff;
}

.word-break {
  word-break: break-all;
  white-space: normal;
}

.icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgb(110, 7, 7);
  cursor: pointer;
}
</style>
