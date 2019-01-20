import { boundMethod } from 'autobind-decorator';
import * as React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	width: 100%;
	padding: 12px 15px;
	font-size: 1rem;
	border-radius: 4px;
	box-sizing: border-box;
	outline: none;
	border: 1px solid #EFEFEF;
	background-color: #FFFFFF;
	
	&::placeholder {
		color: #999999;
	}
`;

const LabelInfo = styled.label`
	margin-bottom: 10px;
	display: block;
`;

interface ITextField {
	label?: string;
	placehloder?: string;
	changeValue: (val?: string) => void;
}

export default class TextFieldDefault extends React.Component<ITextField> {
	static defaultProps: ITextField = {
		changeValue: () => null
	}

	@boundMethod
	changeValue(e: React.ChangeEvent<HTMLInputElement>) {
		this.props.changeValue(e.target.value);
	}

	render() {
		return (
			<div>
				{this.props.label && <LabelInfo>{this.props.label}</LabelInfo>}
				<Input
					onInput={this.changeValue}
					placeholder={this.props.placehloder} />
			</div>
		);
	}
}
