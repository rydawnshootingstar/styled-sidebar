import styled, { css, keyframes } from "styled-components";
import React from "react";

import { setColor, media, setRem, setBorder, setLetterSpacing } from "../Hotel/styles";

/* 

	start - position in % of where to start (-100%)
	mid - position in % of where to go from start (-10%)
	end - position in % to end up at (0%)
*/
const fadeIn = (start, mid, end) => {
	const animation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(${start});
    }
    20%{
        opacity: 0.5;
        transform: translateY(${mid});
    }
    100%{
        opacity: 1;
        transform: translateY(${end});
        
    }
`;

	return css`
		animation: ${animation} 3s ease-in-out;
	`;
};

// don't forget to pass className for this syntax!
const Banner = ({ title, className, children, text, greeting }) => (
	<div className={className}>
		<h1>
			{greeting}
			<span>{title}</span>
		</h1>
		<div className="info">
			<p>{text}</p>
			{children}
		</div>
	</div>
);

const BannerWrapper = styled(Banner)`
	color: ${setColor.mainWhite};
	background: rgba(0, 0, 0, 0.7);
	text-align: center;
	padding: ${setRem(60)} ${setRem(32)};
	${setLetterSpacing(3)};
	h1 {
		color: ${setColor.primaryColor};
		font-size: ${setRem(48)};
		text-transform: capitalize;
		span {
			color: ${setColor.mainWhite};
		}
	}
	p {
		width: 85%;
		margin: 0 auto;
	}

	${media.tablet`
    width: 70vw;
		${setBorder({ width: "6px", color: setColor.primaryColor })};
        p {
			width: 75%;
		}
    `}

	h1 {
		${fadeIn("100%", "-10%", "0%")};
	}
	.info {
		/* animation */
	}
`;

export default BannerWrapper;
