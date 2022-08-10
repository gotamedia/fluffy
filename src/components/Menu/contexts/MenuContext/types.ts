import type { MouseEventHandler } from 'react'

export type MenuContext = {
    activeSubMenuId: string,
    onClickOutside: MouseEventHandler<HTMLDivElement>,
    addSubMenu: (id: string) => void,
    removeSubMenu: (id: string) => void

} | null