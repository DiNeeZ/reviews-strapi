import { gql } from '@apollo/client'

export const REVIEWS = gql`
	query getReviews {
		reviews {
			data {
				id
				attributes {
					raiting
					title
					body
				}
			}
		}
	}
`

export const REVIEW = gql`
	query getReview($id: ID!) {
		review(id: $id) {
			data {
				id
				attributes {
					raiting,
					title,
					body
				}
			}
		}
	}
`