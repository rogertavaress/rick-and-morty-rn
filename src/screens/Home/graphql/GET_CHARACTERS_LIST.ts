import { gql } from "@apollo/client";

export const GET_CHARACTERS_LIST = gql`
  query GetCharactersList($page: Int) {
    characters(page: $page) {
      results {
        episode {
          air_date
          created
          episode
          id
          name
        }
        gender
        id
        image
        location {
          type
          name
          id
          dimension
        }
        name
        origin {
          type
          name
          id
          dimension
        }
        species
        status
        type
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }
`;
