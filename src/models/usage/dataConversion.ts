//import { ClassConstructor } from "@/utils/misc";
import { ClassConstructor } from "class-transformer";
import {plainToInstance} from "class-transformer";

export function literalToClass<V, T>  (literal: V, modelClass: ClassConstructor<T>): T {
    return plainToInstance(modelClass, literal);
}