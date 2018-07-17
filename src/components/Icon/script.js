export default {
  name: 'slds-icon',
  props: {
    assistiveText: {
      default: '',
      required: false,
      type: String,
    },
    size: {
      default: 'small',
      type: String,
    },
    src: {
      required: true,
      type: String,
    },
  },
};
