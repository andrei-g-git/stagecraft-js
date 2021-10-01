export type PropsWithContent = {
    content: any,
    [keys: string] : any
}

export type PropsWithIndex = {
    index: number,
    [keys: string] : any
}

export type MenuItemProps = {
    name: string,
    icon?: any, //needs BlueprintIcons_16Id | MaybeElement but BlueprintIcons_16Id is unresolved... 
    handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}