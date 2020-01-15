import axios from "axios";

const state = {
  taskList: []
};

const getters = {
  allTasks: state => state.taskList
};

const actions = {
  async fetchtasks({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTasks", response.data);
  },

  async addTask({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("newTasks", response.data);
  },

  async removeTask({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTask", id);
  },

  async filtering({ commit }, e) {
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTasks", response.data);
  },

  async updateTask({ commit }, task) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${task.id}`,
      task
    );
    commit("updateTask", response.data);
  }
};

const mutations = {
  setTasks: (state, taskList) => (state.taskList = taskList),
  newTasks: (state, task) => state.taskList.unshift(task),
  removeTask: (state, id) =>
    (state.taskList = state.taskList.filter(task => task.id !== id)),
  updateTask: (state, task) => {
    const i = state.taskList.findIndex(item => item.id === task.id);
    if (i !== -1) {
      state.taskList.splice(i, 1, task);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
