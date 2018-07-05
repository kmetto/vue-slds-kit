export default {
  name: 'slds-input',
  props: {
    placeholder: {
      required: false,
      type: String,
      default: '',
    },
    value: {
      required: false,
      default: '',
    },
    clearButton: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
};
