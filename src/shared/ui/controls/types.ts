import type * as Vue from 'vue'

import type { DOMProps } from '../types'

export type InputControlView = 'normal' | 'clear'

export type InputControlSize = 's' | 'm' | 'l' | 'xl'

export type InputControlState = 'error'

export type BaseInputControlProps<T = Element> = DOMProps & {
  autoComplete?: boolean | 'on' | 'off' | string
  autoFocus?: boolean
  controlRef?: Vue.Ref<T>
  defaultValue?: string
  disabled?: boolean
  errorMessage?: Vue.VNode
  errorPlacement?: 'outside' | 'inside'
  validationState?: 'invalid'
  hasClear?: boolean
  id?: string
  onBlur?: Event
  onChange?: Event
  onFocus?: FocusEvent
  onKeyDown?: KeyboardEvent
  onKeyUp?: KeyboardEvent
  placeholder?: string
  readOnly?: boolean
  size?: InputControlSize
  tabIndex?: number
  value?: string
  view?: InputControlView
}

export type TextInputProps = BaseInputControlProps & {
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
  controlProps?: Vue.InputHTMLAttributes
  label?: string
  startContent?: Vue.VNode
  endContent?: Vue.VNode
}

export type TextInputSize = InputControlSize
export type TextInputView = InputControlView