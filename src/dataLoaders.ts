import { ChracterLoaderRequest } from "./dataLoaders.d";
import { fetchCharacterData } from "./fetchCharacterData";
const DataLoader = require("dataloader");

export const createCharacterDataLoader = () => {
    return new DataLoader(
        (reqs: ChracterLoaderRequest[]) =>
            Promise.all(reqs.map((req) => fetchCharacterData(req.firstName, req.lastName))),
            {
                cacheKeyFn: (request: ChracterLoaderRequest) => `${request.firstName}${request.lastName}`,
            }
    );
};
