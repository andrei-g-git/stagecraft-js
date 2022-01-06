export type NotFunction<T> = T extends Function ? never : T;

export type ContainsOneString<T extends string> = `${string}${T}${string}`;

export type EndsWithSubstring<T extends string> = `${string}${T}`;

//export type ReactStateObject<T> = T extends Object;