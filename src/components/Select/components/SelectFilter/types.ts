import {
    KeyboardEventHandler,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export type SelectFilterProps = {
    value: string,
    style: Record<string, any>,
    onChange: (value: string) => void,
    onKeyDown: KeyboardEventHandler<HTMLInputElement>
}

export type SelectFilterComponent = ForwardRefExoticComponent<SelectFilterProps & RefAttributes<HTMLInputElement>>