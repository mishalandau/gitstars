import * as React from 'react';

interface IconProps {
	color: string;
	size: number | string;
}

export default class FavouriteActiveIcon extends React.Component<IconProps> {
	static defaultProps: IconProps = {
		color: '#000',
		size: 44
	}

	render() {
		return (
			<svg width={this.props.size} viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4V40L17 33.5L31.5 40V4C31.5 2.89543 30.6046 2 29.5 2H4C2.89543 2 2 2.89543 2 4Z" fill={this.props.color} stroke={this.props.color} strokeWidth="4"/>
            </svg>
		);
	}
}
