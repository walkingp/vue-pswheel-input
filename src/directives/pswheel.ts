import { DirectiveOptions } from "vue";
import { DirectiveBinding } from "vue/types/options";
const directive: DirectiveOptions = {
  inserted(el: HTMLElement, node: DirectiveBinding) {
    if (node.value) {
      el.style.color = node.value.color;
    }
  }
};

export default directive;
