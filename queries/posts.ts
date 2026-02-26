import gql from "graphql-tag";
//Posts query, used to get posts for the feed, also gets the creator of the post and their avatar url and name, also gets the likes for the post to show the like count and to check if the user has liked the post or not

export const POSTS = gql`
  query posts($friends: [ID!]) {
    posts(where: { creator: { id_in: $friends } }) {
      id
      content {
        html
      }
      createdAt
      likes {
        id
      }
      creator {
        id
        firstName
        lastName
        avatar {
          id
          url
        }
      }
    }
  }
`;
