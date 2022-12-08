export type MenuContext = {
    activeSubMenuId: string,
    onClickOutside: (event: MouseEvent | TouchEvent) => void,
    addSubMenu: (id: string) => void,
    removeSubMenu: (id: string) => void

} | null