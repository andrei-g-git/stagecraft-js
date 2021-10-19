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