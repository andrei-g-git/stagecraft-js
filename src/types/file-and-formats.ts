export type PossibleTypes<T> = T[keyof T];

//type ProjectFormat = PossibleTypes<{a: "text", b: "json"}>   nahhh

export type TextFormat = "text" | "json";