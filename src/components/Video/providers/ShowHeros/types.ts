import type {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from 'react'

export interface ShowHerosProviderProps extends HTMLAttributes<HTMLDivElement> {

}

export type ShowHerosProviderRef = {
    _domRef: HTMLDivElement | null
}

export type ShowHerosProvider = ForwardRefExoticComponent<ShowHerosProviderProps & RefAttributes<ShowHerosProviderRef>>