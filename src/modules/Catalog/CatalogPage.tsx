import LogoutContainer from '@/modules/Auth/LogoutContainer';
import ButtonDefault from '@/sharedComponents/ButtonDefault';
import LogoInfo from '@/sharedComponents/LogoInfo';
import * as React from 'react';
import styled from 'styled-components';
import RepoContainer from '../Repo/RepoContainer';
import styles from './styles/catalog-page.scoped.scss';


const ButtonActions = styled.div`
	display: flex;
`

export default class CatalogPage extends React.Component {
	goCatalog() {
		// tslint:disable-next-line:no-console
		console.log(1)
	}
	render() {
		return (
			<div className={styles['catalog-page']}>
				<header className={styles['catalog-page__header']}>
					<LogoInfo zoom={0.5} />
					<ButtonActions>
						<ButtonDefault
							onClick={this.goCatalog}
							title='Catalog'
							type='active' />
							<ButtonDefault
								onClick={this.goCatalog}
								title='Favourites'
								type='default' />
					</ButtonActions>
					<LogoutContainer />
				</header>
				<div className='content'>
					<RepoContainer />
				</div>
			</div>
		);
	}
}