import type * as Vue from 'vue'
import { defineComponent } from 'vue';
import type { TextInputProps } from '../types';

type Props = Omit<TextInputProps, 'autoComplete' | 'controlProps'> & {
  autoComplete?: Vue.TextareaHTMLAttributes['autocomplete']
  controlProps: NonNullable<TextInputProps['controlProps']>
}

export const TextInputControl = defineComponent(props: Props) => {
  return () => {
    <input
      {...props} 
    />
  }
}