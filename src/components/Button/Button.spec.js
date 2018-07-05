import { mount, shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import Button from './Button.vue';

describe('Button', () => {
  test('must be an instance of Vue', () => {
    const wrapper = mount(Button);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallowMount(Button);
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw err;
      }
      expect(str).toMatchSnapshot();
    });
  });

  test('matches snapshot with slot', () => {
    const renderer = createRenderer();
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw err;
      }
      expect(str).toMatchSnapshot();
    });
  });

  test('displays slds-button_neutral class', () => {
    const wrapper = mount(Button, {
      propsData: {
        neutral: true,
      },
    });
    expect(wrapper.contains('button.slds-button.slds-button_neutral')).toBeTruthy();
  });

  test('displays slds-button_brand class', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        brand: true,
      },
    });
    expect(wrapper.contains('button.slds-button.slds-button_brand')).toBeTruthy();
  });

  test('displays slds-button_inverse class', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        inverse: true,
      },
    });

    expect(wrapper.contains('button.slds-button.slds-button_inverse')).toBeTruthy();
  });

  test('displays slds-button_destructive class', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        destructive: true,
      },
    });

    expect(wrapper.contains('button.slds-button.slds-button_destructive')).toBeTruthy();
  });

  test('displays slds-button_success class', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        success: true,
      },
    });

    expect(wrapper.contains('button.slds-button.slds-button_success')).toBeTruthy();
  });

  test('displays disabled button', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.attributes().disabled).toBeTruthy();
  });
});
