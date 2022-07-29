import type { InputComponent } from '@components/Input'

export type TimePickerInputProps = {
    isClearable?: boolean,
    onClear?: () => void
}

export type TimePickerInputComponent = InputComponent<TimePickerInputProps>