import React, { Component } from "react";
import styled from "styled-components";
import Room from "./Room";
import Section from "../../globals/Section";
import Title from "../../globals/Title";
import rooms from "../rooms-data";
import { setColor, media, setRem } from "../styles";

const RoomsCenter = styled.div`
	width: 90vw;
	margin: 0 auto;
	display: grid;
	/* 1170 - 90 = 1080 / 3 = 360 */
	grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
	grid-column-gap: ${setRem(45)};
	${media.large`
        width: 100vw;
        max-width: 1170px;
    `}
`;

class Rooms extends Component {
	state = {
		rooms
	};
	render() {
		return (
			<Section background={setColor.lightGrey}>
				<Title center title={"Our Rooms"} />
				<RoomsCenter>
					{this.state.rooms.map((room, index) => (
						<Room key={index} room={room} />
					))}
				</RoomsCenter>
			</Section>
		);
	}
}

export default Rooms;
