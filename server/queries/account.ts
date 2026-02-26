export const account = (where: string): string => `
{
    account(where: ${where}) {
        id
        firstName
        lastName
        password
    }
}
`;
// Account query, used to get the account information for a specific user, it takes a where argument which is used to specify the conditions for the query, it returns the id, first name, last name and password of the user, the password is returned for testing purposes and should not be returned in a production environment

export default {};
