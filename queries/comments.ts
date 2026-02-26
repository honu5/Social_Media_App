import gql from "graphql-tag";

//Comments by post id query, used to get comments for a specific post, also gets the creator of the comment and their avatar url and name

export const COMMENTS_BY_POST_ID = gql`
  query($id: ID!) {
    posts(where: { id: $id }) {
      id
      comments {
        id
        content {
          html
        }
        creator {
          id
          firstName
          lastName
          avatar {
            url
            id
          }
        }
      }
    }
  }
`;

export default {};
