module GameDomain

type Vector = {X : int; Y : int;}

type LifeForm = {
    Energy: int
}

type Grass = Grass of LifeForm
type Actor = Grass
type Location = Actor | Rock | Empty
type World = Location[,]

type WorldAction = GrowGrass
and GrowGrass = {Pos: Vector}

type Act = Actor -> WorldAction
type ApplyAction = World -> WorldAction -> World

type NextFrame = World -> World

type InitWorld = World -> World

let w: World =  array2D[|[|Empty ; Empty|] ; [|Empty ; Empty|] |]

// type LionStuff = {
//     Pie: int;
// }

// type Animal = {
//     Pos: Vector;
//     Energy: int;
//     Thirst: int;
// }

// type Lion = Lion of (Animal * LionStuff)
// type Antelope = Antelope of Animal

// let lion: Lion = Lion ({ Energy = 1; Thirst = 1; Pos = {X = 1; Y = 2} },  {Pie = 2})

// let (s, y) = lion

// let v : Vector = { X = 1; Y = 2}
// let x: Antelope =  Antelope { Energy = 1; Thirst = 1; Pos = {X = 1; Y = 2} }

