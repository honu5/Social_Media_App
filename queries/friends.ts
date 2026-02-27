import gql from "graphql-tag";

export const FRIENDS = gql`
  query account($id: ID!) {
    account(where: { id: $id }) {
      id
      friends {
        id
      }
    }
  }
`;

export default {};
