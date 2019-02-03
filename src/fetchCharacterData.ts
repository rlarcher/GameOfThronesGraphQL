import { Character } from "./character";
import axios from "axios";
import { splitName } from "./utils";

const apiUrl: string = "https://www.anapioficeandfire.com/api/characters";

export const fetchCharacterData = async (firstName: string, lastName: string): Promise<Character> => {
    const res =  await axios.get(apiUrl, {
        params: {
            name: `${firstName} ${lastName}`,
        },
    });
    return res.data.map((data) => ({
        ...data,
        ...splitName(data.name),
    }));
}