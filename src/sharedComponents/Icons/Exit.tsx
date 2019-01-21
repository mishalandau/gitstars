import * as React from 'react';

interface IconProps {
	color: string;
	width: number | string;
	height: number | string;
}

export default class ExitIcon extends React.Component<IconProps> {
	static defaultProps: IconProps = {
		color: '#000',
		height: 35,
		width: 42,
	}

	render() {
		return (
			<svg width={this.props.width} height={this.props.height} viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 3H38C38.5523 3 39 3.44772 39 4V31C39 31.5523 38.5523 32 38 32H4C3.44772 32 3 31.5523 3 31V23H0V31C0 33.2091 1.79086 35 4 35H38C40.2091 35 42 33.2091 42 31V4C42 1.79086 40.2091 0 38 0H4C1.79086 0 0 1.79086 0 4V12H3V4C3 3.44772 3.44772 3 4 3Z" fill={this.props.color}/>
                <path d="M24.0607 19.0607C24.6464 18.4749 24.6464 17.5251 24.0607 16.9393L14.5147 7.3934C13.9289 6.80761 12.9792 6.80761 12.3934 7.3934C11.8076 7.97919 11.8076 8.92893 12.3934 9.51472L20.8787 18L12.3934 26.4853C11.8076 27.0711 11.8076 28.0208 12.3934 28.6066C12.9792 29.1924 13.9289 29.1924 14.5147 28.6066L24.0607 19.0607ZM-1.31134e-07 19.5L23 19.5L23 16.5L1.31134e-07 16.5L-1.31134e-07 19.5Z" fill={this.props.color} />
            </svg>
		);
	}
}
