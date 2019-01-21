import client from '@/config/Apollo';
import gql from 'graphql-tag';

namespace RepoApi {
    export async function fetchRepos(username: string) {
		return client.query({
			query: gql`
				query {
					user(login:${username}) {
						starredRepositories(
							first: 74,
							orderBy: {field: STARRED_AT, direction: DESC}
						) {
							totalCount
							edges {
								node {
									id
									name
									stargazers (last: 0){
										totalCount
									}
									primaryLanguage {
										id
										name
										color
									}
									createdAt
									updatedAt
									description
									owner {
										login
									}
								}
							}
						}
					}
				}
			`
		}).then(({ data }: any) => {
			return data.user.starredRepositories.edges.map(({ node }: any) => ({
                authorName: node.owner.login,
                createdAt: node.createdAt,
                description: node.description,
                id: node.id,
                primaryLanguage: node.primaryLanguage,
                repoName: node.name,
                starred: node.stargazers.totalCount,
                updatedAt: node.updatedAt
            }))
		})
    }
}

export default RepoApi
