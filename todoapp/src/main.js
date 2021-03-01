/* eslint-disable no-param-reassign */
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// localStorage persistence
const STORAGE_KEY = 'todos-vuejs-2.0';

const todoStorage = {
  fetch() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    todos.forEach((todo, index) => {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

// visibility filters
const filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((todo) => !todo.completed);
  },
  completed(todos) {
    return todos.filter((todo) => todo.completed);
  },
};

Vue.prototype.$todoStorage = todoStorage;
Vue.prototype.$filters = filters;

// a custom directive to wait for the DOM to be updated
// before focusing on the input field.
// http://vuejs.org/guide/custom-directive.html
Vue.directive('todo-focus', {
  // When the bound element is inserted into the DOM...
  inserted(el, binding) {
    if (binding.value) {
      el.focus();
    }
  },
});

const app = new Vue({
  render: (h) => h(App),
});

// handle routing
function onHashChange() {
  const visibility = window.location.hash.replace(/#\/?/, '');
  if (filters[visibility]) {
    app.visibility = visibility;
  } else {
    window.location.hash = '';
    app.visibility = 'all';
  }
}

window.addEventListener('hashchange', onHashChange);
onHashChange();

// mount
app.$mount('#app');
