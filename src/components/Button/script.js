export default {
  name: 'slds-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    neutral: {
      type: Boolean,
      default: false,
    },
    brand: {
      type: Boolean,
      default: false,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    destructive: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classes: {
        'slds-button_neutral': this.neutral,
        'slds-button_brand': this.brand,
        'slds-button_inverse': this.inverse,
        'slds-button_destructive': this.destructive,
        'slds-button_success': this.success,
      },
    };
  },
};
