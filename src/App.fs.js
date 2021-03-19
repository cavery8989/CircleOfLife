import { singleton } from "./.fable/fable-library.3.1.4/AsyncBuilder.js";
import { printf, toConsole } from "./.fable/fable-library.3.1.4/String.js";
import { int32ToString } from "./.fable/fable-library.3.1.4/Util.js";
import { startImmediate, sleep } from "./.fable/fable-library.3.1.4/Async.js";

export const div = document.getElementById("div");

export function game() {
    return singleton.Delay(() => singleton.ReturnFrom(update(1)));
}

export function completed() {
    return singleton.Delay(() => singleton.ReturnFrom(game()));
}

export function update(number) {
    return singleton.Delay(() => {
        toConsole(printf("number %i"))(number);
        div.innerHTML = int32ToString(number);
        return (number >= 30) ? singleton.ReturnFrom(completed()) : singleton.Bind(sleep(~(~(1000 / 1))), () => singleton.ReturnFrom(update(number + 1)));
    });
}

startImmediate(game());

