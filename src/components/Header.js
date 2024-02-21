import React from "react";

const Header = () => {
	return (
		<div>
			<img
				src="https://coyotestudentnews.files.wordpress.com/2012/11/food-court.jpg"
				alt="Food court logo"
				className="logo"
			/>
			{/* Logo reference: https://coyotestudentnews.com/2012/11/02/new-food-vendor-on-campus/ */}
			<div className="main">
				<p className="mainSubtitle">
					Delicious, From-Scratch Recipes Close at Hand
				</p>
				<p className="slogan">The Fresh Choice of UT!</p>
			</div>
		</div>
	);
};

export default Header;
