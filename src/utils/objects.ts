export const retrieveNestedValue = (obj: any, target: string): any =>
    target in obj
        ? obj[target]
        : Object.values(obj).reduce(
            (acc: any, val: any) => {
                if (acc !== undefined) return acc;
                if (typeof val === 'object') return retrieveNestedValue(val, target);
            }, 
            undefined
        );

export const iterateObject = (object: any, callback: Function) => {
    for(const prop in object){
        if(typeof(object[prop]) === "object"){
            iterateObject(object[prop], callback);
        } else {
            callback(prop, object); //the callback would have to be passed through a curry function if I need to provide arguments
        }
    }
}

//decorator
export function staticImplements<T>() {
    return <U extends T>(constructor: U) => {constructor};
}


export type StaticImplements<I extends new (...args: any[]) => any, C extends I> = InstanceType<I>;


export const findPropertyValue = (key: string, obj: any) => {

    const find = (propkey: keyof typeof obj) => { //dude I dunno...
        return obj[propkey]
    }

    return find(key);
}