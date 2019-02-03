import { Character } from "./character";
import DataLoader from "dataloader";

export interface DataLoaders {
    characterLoader: DataLoader<ChracterLoaderRequest, Character>
}

export interface ChracterLoaderRequest {
    firstName: string | null;
    lastName: string | null;
}
