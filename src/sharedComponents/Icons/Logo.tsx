import '@/App.css';
import * as React from 'react';

interface Icon {
    color: string;
}

export default class LogoIcon extends React.Component<Icon> {
	render() {
		return (
			<div className="App">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					style={{isolation: 'isolate'}}
					viewBox="0 0 512 512"
					width="512"
					height="512">
					<defs><clipPath id="_clipPath_CHkQO3HVkyUO81twlkmNVQ85PJCd5e1X"><rect width="512" height="512"/></clipPath></defs>
					<g clip-path="url(#_clipPath_CHkQO3HVkyUO81twlkmNVQ85PJCd5e1X)">
                        <path d=" M 58.5 256 C 58.5 146.997 146.997 58.5 256 58.5 C 365.003 58.5 453.5 146.997 453.5 256 C 453.5 365.003 365.003 453.5 256 453.5 C 146.997 453.5 58.5 365.003 58.5 256 Z  M 351.69 394.252 L 256 343.945 L 160.31 394.252 L 178.585 287.699 L 101.17 212.238 L 208.155 196.693 L 256 99.748 L 303.845 196.693 L 410.83 212.238 L 333.415 287.699 L 351.69 394.252 Z " fill-rule="evenodd"
                        fill={this.props.color}/>
					</g>
				</svg>
			</div>
		);
	}
}
