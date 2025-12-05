import { defineComponent } from 'vue'
import './Button.scss'

export const Button = defineComponent({
  name: 'Button',
  props: {
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(props, { slots }) {
    return () => (
      <button class={`ech-button ech-button--${props.variant} ech-button--${props.size}`}>
        {slots.default?.()}
      </button>
    )
  },
})

export default Button