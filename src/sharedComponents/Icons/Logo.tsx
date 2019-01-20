import * as React from 'react';

interface IconProps {
	color: string;
	width: number | string;
	height: number | string;
}

export default class LogoIcon extends React.Component<IconProps> {
	static defaultProps: IconProps = {
		color: '#000',
		height: 40,
		width: 40,
	}

	render() {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				style={{isolation: 'isolate'}}
				viewBox="0 0 512 512"
				width={this.props.width}
				height={this.props.height}>
				<defs><clipPath id="_clipPath_CHkQO3HVkyUO81twlkmNVQ85PJCd5e1X"><rect width="512" height="512"/></clipPath></defs>
				<g clipPath="url(#_clipPath_CHkQO3HVkyUO81twlkmNVQ85PJCd5e1X)">
					<path
					d=" M 58.5 256 C 58.5 146.997 146.997 58.5 256 58.5 C 365.003 58.5 453.5 146.997 453.5 256 C 453.5 365.003 365.003 453.5 256 453.5 C 146.997 453.5 58.5 365.003 58.5 256 Z  M 351.69 394.252 L 256 343.945 L 160.31 394.252 L 178.585 287.699 L 101.17 212.238 L 208.155 196.693 L 256 99.748 L 303.845 196.693 L 410.83 212.238 L 333.415 287.699 L 351.69 394.252 Z "
					fillRule="evenodd"
					fill={this.props.color} />
				</g>
			</svg>
		);
	}
}
