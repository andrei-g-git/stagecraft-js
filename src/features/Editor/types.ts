export type Delta = {
    ops: {
        insert: string, 
        attributes: {[key: string]: any}
    }[]
}