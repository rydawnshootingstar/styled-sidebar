import React from "react";
import styled from "styled-components";
import Hero from "../../globals/Hero";
import Image from "../../globals/Image";
import homeImg from "../../../../public/homeBcg.jpeg";
import Banner from "../../globals/Banner";
import { PrimaryButton } from "../../globals/Buttons";

const Header = () => (
	<div>
		<Hero img={homeImg}>
			<Banner greeting={"Welcome to "} title={"Beachwalk Resort"} text={"Your dream vacation awaits you"}>
				<PrimaryButton t={10}>Book Your Stay</PrimaryButton>
			</Banner>
		</Hero>
	</div>
);

export default Header;
