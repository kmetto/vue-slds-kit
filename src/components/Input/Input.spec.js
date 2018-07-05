import { mount, shallowMount } from '@vue/test-utils';
import Button from './Input.vue';

describe('Input', () => {
  test('must be an instance of Vue', () => {
    const wrapper = mount(Button);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Renders input event', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.contains('input[type="text"]')).toBeTruthy();
  });

  test('Emits input event', () => {
    const wrapper = shallowMount(Button);
    const input = wrapper.find('input[type="text"]');
    input.setValue('Test string');
    expect(wrapper.emitted('input')[0]).toEqual(['Test string']);
  });

  test('Clear button hidden', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.contains('.slds-button_clear')).toBeFalsy();
  });

  test('Clear button visible', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        clearButton: true,
      },
    });
    expect(wrapper.contains('.slds-button_clear')).toBeTruthy();
  });

  // test('Click on clear button emits "clear" event', () => {
  //   const wrapper = shallowMount(Button, {
  //     propsData: {
  //       clearButton: true,
  //     },
  //   });
  //   const clearButton = wrapper.find('.slds-button_clear');
  //   clearButton.trigger('click');
  //   expect(wrapper.emitted('clear')).toBeTruthy();
  // });
});
