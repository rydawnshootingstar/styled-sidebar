import styled from "styled-components";
import { setFlex, setBackground } from "../Hotel/styles";

const Hero = styled.header`
	min-height: 100vh;
	min-width: 100vw;
	${props => setBackground({ img: props.img, color: "rgba(0, 0, 0, 0)" })};
	${setFlex()}
`;

export default Hero;
