import Vue from 'vue';
import * as components from './index';

export default {
  install(Vue, options){    
    for(let componentName in components){
      const component = components[componentName];
      Vue.component(component.name, component);
    };
  },
};
