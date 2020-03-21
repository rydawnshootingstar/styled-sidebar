import React from "react";
import styled from "styled-components";
import { setRem, setFont, setLetterSpacing } from "../Hotel/styles";
const Title = ({ className, title, center }) => <h3 className={className}>{title}</h3>;

export default styled(Title)`
	font-size: ${setRem(36)};
	text-transform: capitalize;
	${setLetterSpacing(4)};
	${setFont.slanted};
	text-align: ${props => (props.center ? "center" : "left")};
`;
