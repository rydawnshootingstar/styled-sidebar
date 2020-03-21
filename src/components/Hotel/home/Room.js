import React from "react";
import styled from "styled-components";
import { SmallButton } from "../../globals/Buttons";
import { setShadow, setRem, setLetterSpacing, setTransition, setColor, setBorder } from "../styles";
import PropTypes from "prop-types";

const Room = ({ className, room }) => {
	const { title = "", img = "", info = "", price = 0 } = room;
	return (
		<article className={className}>
			<div className={"img-container"}>
				<img src={img} alt="single room" />
				<div className={"price"}>${price}</div>
			</div>

			<div className={"room-info"}>
				<h4>{title}</h4>
				<p>{info}</p>
			</div>

			<SmallButton b={setRem(12)} l={setRem(16)}>
				See More
			</SmallButton>
		</article>
	);
};

export default styled(Room)`
	background: ${setColor.mainWhite};
	margin: ${setRem(32)} 0;
	${setTransition()};
	${setShadow.light};
	&:hover {
		${setShadow.dark};
	}
	.img-container {
		background: ${setColor.mainBlack};
		position: relative;
		img {
			width: 100%;
			display: block;
			${setTransition()};
			&:hover {
				opacity: 0.5;
			}
		}

		&:hover .price {
			opacity: 1;
		}
	}
	.price {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: ${setColor.mainWhite};
		${setLetterSpacing(5)};
		font-size: ${setRem(32)};
		padding: ${setRem(10)} ${setRem(33)};
		${setBorder({ color: setColor.mainWhite })};
		opacity: 0;
	}
	.room-info {
		padding: ${setRem()} ${setRem()} ${setRem()} ${setRem()};
		h4 {
			text-transform: capitalize;
			${setLetterSpacing()};
		}
		p {
			${setLetterSpacing()};
		}
	}
`;

Room.PropTypes = {
	room: PropTypes.shape({
		img: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		info: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
};
