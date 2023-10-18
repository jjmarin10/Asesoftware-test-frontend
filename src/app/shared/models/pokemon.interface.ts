export interface IPokemon {
    id: number;
    name: string;
    image?: string;
    sprites: {};
    weight: number;
    moves: string[];
    types: {};
    url: string
}