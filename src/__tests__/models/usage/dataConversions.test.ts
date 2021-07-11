import {expect, describe, test} from "vitest";
import { literalToClass } from "@/models/usage/dataConversion";

type StringOrNumber = {[prop: string] : string | number}

const objectLiteral: StringOrNumber = {
    foo: "blah",
    bar: 123
}

class ObjectClass implements StringOrNumber{
    [prop: string]: string | number;
    foo:string = "not blah";
    bar:number = 321;

}

describe("dataConversions.ts", () => {
    test("that in literalToClass() class props match literal props", () => {
        const obj = literalToClass(objectLiteral, ObjectClass);
        const objKeys = Object.keys(obj);
        const literalKeys = Object.keys(objectLiteral);        

        expect(objKeys.length).toEqual(literalKeys.length)
        Object.keys(obj).forEach((key, index) => {
            console.log(key);
            expect(key in obj).toBeTruthy(); //this is a given since otherwise literalToClass will merge all properties, resulting in extra properties in class object
            expect(obj[key]).toEqual(objectLiteral[key])
        })
    })
})


