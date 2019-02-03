export const splitName = (name: string) => ({
    firstName: name.split(" ")[0],
    lastName: name.split(" ")[1],
});
