import type * as Vue from 'vue'

export type CSSProperties =
  | (Vue.CSSProperties & {
    [key: `--${string}`]: string | number
  })
  | Vue.CSSProperties

export interface DOMProps {
  style?: CSSProperties
  className?: string
}

export interface ControlProps extends Pick<Vue.InputHTMLAttributes,
  | 'name'
  | 'value'
  | 'id'
  | 'checked'
  | 'onChange'
  | 'onFocus'
  | 'onBlur'
  | 'disabled'
> {
  indeterminate?: boolean
  onUpdate?: (checked: boolean) => void
  controlProps?: Omit<Vue.InputHTMLAttributes,
    | 'name'
    | 'value'
    | 'id'
    | 'onFocus'
    | 'onBlur'
    | 'disabled'
    | 'type'
    | 'onChange'
    | 'defaultChecked'
    | 'checked'
    | 'aria-checked'
  >
  controlRef?: Vue.Ref<HTMLInputElement>
}

export interface ControlGroupOption<ValueType extends string = string> {
  value: ValueType
  content?: Vue.VNode
  children?: Vue.VNode
  disabled?: boolean
  title?: string
}

export interface AriaLabelingProps {
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
}

export interface ControlGroupProps<ValueType extends string = string> extends AriaLabelingProps {
  name?: string
  value?: ValueType | null
  defaultValue?: ValueType
  onUpdate?: (value: ValueType) => void
  onChange?: (event: Event) => void
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
  disabled?: boolean
  options?: ControlGroupOption<ValueType>[]
}