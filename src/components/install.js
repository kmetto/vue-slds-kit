export default component => ({
  install(Vue) {
    Vue.component(component.name, component);
  },
});
