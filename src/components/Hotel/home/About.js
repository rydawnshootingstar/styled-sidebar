import React from "react";
import Section from "../../globals/Section";
import Title from "../../globals/Title";
import Image from "../../globals/Image";
import aboutImg from "../../../../public/aboutBcg.jpeg";
import { setRem, setBorder, setColor, setLetterSpacing, media } from "../../Hotel/styles";
import { PrimaryButton } from "../../globals/Buttons";
import styled from "styled-components";

const AboutCenter = styled.div`
	.about-img {
		padding: ${setRem(30)};
		img {
			width: 100%;
			display: block;
			${setBorder({ color: setColor.primaryColor, width: "6px" })}
		}
	}
	.about-info {
		padding: ${setRem(30)};
		p {
			${setLetterSpacing()};
		}
	}

	width: 90vw;
	margin: 0 auto;
	${media.large`
        width: 100vw;
        max-width: 1170px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: ${setRem(32)};
        .about-img{
            align-self: center;
			padding: 0;
        }
        .about-info{
            p{
				align-self: center;
                width: 80%;
				padding: 0;
            }
        }
    `}
`;

const About = () => (
	<Section background="">
		<AboutCenter>
			<div className={"about-img"}>
				{/* <img src={aboutImg} alt="about us" /> */}
				<Image imgSrc={aboutImg} />
			</div>
			<div className={"about-info"}>
				<Title title="About Us" />
				<p>
					Id qui cillum ipsum nulla. Laborum in quis ut eiusmod excepteur Lorem consectetur deserunt elit amet
					enim. Commodo anim eiusmod nulla excepteur. Consectetur labore pariatur occaecat deserunt adipisicing
					cillum laboris.
				</p>
				<PrimaryButton t={50}>Read More</PrimaryButton>
			</div>
		</AboutCenter>
	</Section>
);

export default About;
