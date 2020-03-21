import React, { Suspense } from "react";

import { hot } from "react-hot-loader/root";

// Import Components
import Main from "./components/Main";
import GlobalStyle from "./components/globals/GlobalStyles";

// Main page
const App = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Main />
		</React.Fragment>
	);
};

export default hot(App);
