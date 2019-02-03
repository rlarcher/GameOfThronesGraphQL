import { IContext } from "./context";
import axios from "axios";
import { splitName } from "./utils";


export const resolvers = {
    Query: {
        findCharacter: async (_, args, context: IContext) => {
            return context.dataLoaders.characterLoader.load({
                firstName: args.firstName,
                lastName: args.lastName,
            });
        }
    },
    Character: {
        spouse: async (parent) => {
            const data = (await axios.get(parent.spouse)).data;
            return {
                ...splitName(data.name),
                ...data,
            }
        }
    }
}