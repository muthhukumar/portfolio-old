import { gql } from '@apollo/client';

export const LIKE_THE_BOOKMARK = gql`
  mutation updateLikes($id: uuid) {
    update_likes(where: { id: { _eq: $id } }, _inc: { likes: 1 }) {
      returning {
        likes
        id
      }
    }
  }
`;
