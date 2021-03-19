
module ElectricLife

open Browser

let div = document.getElementById("div")

let rec game () = async {
    return! update 1 }
and completed () = async {
    return!  game() }
and update number = async {
    printf "number %i" number
    div.innerHTML <- string number
    if number >= 30 then
        return! completed()
    else 
        do! Async.Sleep(int (1000. / 1.))
        return! update (number + 1) }

game () |> Async.StartImmediate