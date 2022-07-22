import type { InputComponent } from '@components/Input'

export type DatePickerInputProps = {
    isClearable?: boolean,
    onClear?: () => void
}

export type DatePickerInputComponent = InputComponent<DatePickerInputProps>