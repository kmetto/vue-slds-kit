import Vue from 'vue';
import * as components from './index';

export default {
  install(Vue, options){
    components.Map((component) => {
      Vue.component(component.name, component);
    });
  },
};
