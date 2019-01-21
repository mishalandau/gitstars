import * as React from 'react';
import styled from 'styled-components';
import RepoItem, { RepoData } from './RepoItem';

interface RepoProps {
    list: RepoData[]
}

const RepoListView = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-gap: 20px;
`

export default class RepoList extends React.Component<RepoProps> {
	render() {
		return (
			<RepoListView>
                {this.props.list.map((repo) => (
                    <RepoItem key={repo.id} data={repo} />
                ))}
			</RepoListView>
		);
	}
}
