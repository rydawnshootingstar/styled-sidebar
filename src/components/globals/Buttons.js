import styled from "styled-components";
import { setColor, setRem, setFont, setBorder, setLetterSpacing, setTransition } from "../Hotel/styles";

export const PrimaryButton = styled.button`
	color: ${setColor.mainWhite};
	background: ${setColor.primaryColor};
	display: inline-block;
	text-transform: capitalize;
	font-size: ${setRem(18)};
	padding: ${setRem(17)} ${setRem(36)};
	${setFont.main};
	${setBorder({ color: setColor.primaryColor })};
	${setLetterSpacing(3)};
	cursor: pointer;
	margin-top: ${setRem(25)};
	text-decoration: none;
	${setTransition({ time: ".22s" })};
	&:hover {
		background: transparent;
		color: ${setColor.primaryColor};
	}
	${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
`;

export const SmallButton = styled(PrimaryButton)`
	padding: ${setRem(9)} ${setRem(12)};
`;
