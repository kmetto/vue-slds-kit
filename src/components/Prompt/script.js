import SldsButton from '../Button/Button.vue';

export default {
  name: 'slds-prompt',
  components: [
    SldsButton,
  ],
  data(){
    return {
      isVisible: false,
    };
  },
  methods: {
    show(){
      this.isVisible = true;
    },
    hide(){
      this.isVisible = false;
    },
    onClose() {
      this.hide();
      this.$emit('onclose');
    },
  },
};
