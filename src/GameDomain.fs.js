import { Union, Record } from "./.fable/fable-library.3.1.4/Types.js";
import { union_type, record_type, int32_type } from "./.fable/fable-library.3.1.4/Reflection.js";

export class Vector extends Record {
    constructor(X, Y) {
        super();
        this.X = (X | 0);
        this.Y = (Y | 0);
    }
}

export function Vector$reflection() {
    return record_type("GameDomain.Vector", [], Vector, () => [["X", int32_type], ["Y", int32_type]]);
}

export class LionStuff extends Record {
    constructor(Pie) {
        super();
        this.Pie = (Pie | 0);
    }
}

export function LionStuff$reflection() {
    return record_type("GameDomain.LionStuff", [], LionStuff, () => [["Pie", int32_type]]);
}

export class Animal extends Record {
    constructor(Pos, Energy, Thirst) {
        super();
        this.Pos = Pos;
        this.Energy = (Energy | 0);
        this.Thirst = (Thirst | 0);
    }
}

export function Animal$reflection() {
    return record_type("GameDomain.Animal", [], Animal, () => [["Pos", Vector$reflection()], ["Energy", int32_type], ["Thirst", int32_type]]);
}

export class Antelope extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Antelope"];
    }
}

export function Antelope$reflection() {
    return union_type("GameDomain.Antelope", [], Antelope, () => [[["Item", Animal$reflection()]]]);
}

export const lion = [new Animal(new Vector(1, 2), 1, 1), new LionStuff(2)];

const patternInput$004020 = lion;

export const y = patternInput$004020[1];

export const s = patternInput$004020[0];

export const v = new Vector(1, 2);

export const x = new Antelope(0, new Animal(new Vector(1, 2), 1, 1));

