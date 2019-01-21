import { UserStore } from '@/modules/CurrentUser/UserStore';
// import { boundMethod } from 'autobind-decorator';
import { inject, observer } from 'mobx-react'
import * as React from 'react';
import { RepoData } from './components/RepoItem';
import RepoList from './components/RepoList';
import RepoService from './RepoService';

interface RepoProps {
	userStore?: UserStore
}
interface RepoState {
	list: RepoData[]
}

@inject('userStore')
@observer
export default class RepoContainer extends React.Component<RepoProps, RepoState> {
	get userStore() {
		return this.props.userStore!
    }
    
    get userLogin() {
        return this.userStore.user && this.userStore.user.login || '';
    }

	state = {
		list: []
	}

    get formatList() {
        return this.state.list;
    }

	render() {
		return (
            <RepoList list={this.formatList} />
		);
    }

    componentDidMount() {
        RepoService.fetchRepos(this.userLogin).then((list) => {
            this.setState({
                list
            })
        });
    }
}