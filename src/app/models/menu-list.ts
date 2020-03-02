export interface MenuList {
    label: string;
    text: string;
    id: string;
    url?: string;
    subMenu?: Array<SubMenuList>
}

export interface SubMenuList extends MenuList {
    menuID: string;
}