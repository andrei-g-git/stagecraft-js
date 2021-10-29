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
            callback(prop, object); //  -- no it wouldn't ---the callback would have to be passed through a curry function if I need to provide arguments
        }
    }
}


export const iterateNestedObjects = (object: any, callback: Function) => {
    for(const prop in object){
        if(typeof(object[prop]) === "object"){
            //console.log("BRANCH:  ", object[prop])

            // const branch = object[prop];
            // if(Array.isArray(branch)){
            //     branch.forEach((item: any) => {
            //         for(const prop in item){
            //             if(typeof(item[prop]) === "object"){
            //                 callback(item);
            //                 iterateObject(item[prop], callback);
            //             }
            //         }
            //     })
            // } else {
                callback(object[prop]);
                iterateNestedObjects(object[prop], callback);                
            //}

        }
    }
}
// export const iteratNestedProperties = (object: any, callback: Function) => {
//     // for(const prop in object){
//     //     if(typeof object[prop] === "object"){
//     //         callback(object);
//     //         iteratNestedProperties(object[prop], callback);
//     //     }
//     // }

//     objectEntries(object).forEach((entry: any) => {
//         const [, value] = entry;
//         if(typeof value === "object"){
//             callback(object, value);
//             //console.log("value:   ", value)
//             iteratNestedProperties(value, callback);
//         }
//     })

// }

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

export function objectEntries<
  T extends Record<PropertyKey, unknown>,
  K extends keyof T,
  V extends T[K]
>(o: T) {
  return Object.entries(o) as [K, V][];
}