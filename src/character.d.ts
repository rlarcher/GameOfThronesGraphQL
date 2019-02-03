export interface Character {
    firstName: string;
    lastName: string;
    isAlive: boolean;
    died: string | null;
    born: string;
    culture: string;
    father: string;
    mother: string;
    spouse: Character;
}
