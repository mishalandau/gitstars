// import { boundMethod } from 'autobind-decorator';
import Favourite from '@/sharedComponents/Icons/Favourite';
import FavouriteActive from '@/sharedComponents/Icons/FavouriteActive';
import * as React from 'react';
import styled from 'styled-components';


export interface RepoData {
    id: number;
    authorName: string;
    repoName: string;
    starred: number;
    description: string;
    primaryLanguage: {
        id: number;
        name: string;
        color: string;
    }
}

interface RepoProps {
    data: RepoData,
    isFavourite: boolean;
}


const RepoContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    /* flex-direction: column; */
    position: relative;
    background-color: #FFFFFF;
`
const RepoInner = styled.div`
    width: 100%;
`

const RepoHeaderView = styled.div`
    flex: 1 0 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const RepoContentView = styled.div`
    flex: 1 0 100%;
    padding: 1.5rem 0;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const RepoDescription = styled.div`
    flex: 1 0 0;
    overflow: hidden;
    display: -webkit-box;
    height: 100%;
    line-height: 1.4;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3D3D3D;
`

const RepoName = styled.span`
    font-weight: bold;
`

const Starred = styled.div`
`
const StarredIcon = styled.span`
    margin-right: 0.5rem;
`

const PrimaryLangauage = styled.div`
    width: 100%;
    height: 0.6rem;
    bottom: 0;
    left: 0;
    position: absolute;
    background-color: ${props => props.color}
`

const Favourites = styled.div`
    flex: 0.3 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
`

const RepoTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
`

const RepoHeader = ({ data }: {data: RepoData}) => (
    <RepoHeaderView>
        <RepoTitle>
            <span>{data.authorName}</span>
            <span>&nbsp;/&nbsp;</span>
            <RepoName>{data.repoName}</RepoName>
        </RepoTitle>
        <Starred>
            <StarredIcon>&#9733;</StarredIcon>
            <span>{data.starred}</span>
        </Starred>
    </RepoHeaderView>
)

const RepoContent = ({ isFavourite, data }: {data: RepoData, isFavourite: boolean}) => (
    <RepoContentView>
        <RepoDescription>
            {data.description}
        </RepoDescription>
        <Favourites>
            {isFavourite ?
                <FavouriteActive size="1.4rem" color="#6DB5A9" /> :
                    <Favourite size="1.4rem" color="#6DB5A9" /> }
        </Favourites>
    </RepoContentView>
)

export default class RepoItem extends React.Component<RepoProps> {
    static defaultProps = {
        isFavourite: false
    }

	render() {
        const { data, isFavourite } = this.props;
		return (
            <RepoContainer>
                <RepoInner>
                    <RepoHeader data={data} />
                    <RepoContent
                        data={data}
                        isFavourite={isFavourite}/>
                    <PrimaryLangauage color={data.primaryLanguage && data.primaryLanguage.color} />
                </RepoInner>
            </RepoContainer>
		);
	}
}
