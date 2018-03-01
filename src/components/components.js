import * as components from './index';

export default {
  install(Vue) {
    const componentsNames = Object.keys(components);

    componentsNames.forEach((componentName) => {
      if (Object.prototype.hasOwnProperty.call(components[componentName], 'name')) {
        const component = components[componentName];
        Vue.component(component.name, component);
      }
    });
  },
};
