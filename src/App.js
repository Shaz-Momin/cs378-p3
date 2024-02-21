import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
	{
		id: 1,
		title: "Gyoza",
		description: "Japanese dumplings",
		imageName: "gyoza.png",
		price: 5.99,
	},
	{
		id: 2,
		title: "Sushi",
		description: "Japanese rice rolls",
		imageName: "sushi.png",
		price: 6.99,
	},
	{
		id: 3,
		title: "Ramen",
		description: "Japanese noodle soup",
		imageName: "ramen.png",
		price: 7.99,
	},
	{
		id: 4,
		title: "Matcha Cake",
		description: "Japanese green tea cake",
		imageName: "matcha-cake.png",
		price: 4.99,
	},
	{
		id: 5,
		title: "Mochi",
		description: "Japanese rice cake",
		imageName: "mochi.png",
		price: 3.99,
	},
	{
		id: 6,
		title: "Yakitori",
		description: "Japanese skewered chicken",
		imageName: "yakitori.png",
		price: 2.99,
	},
	{
		id: 7,
		title: "Takoyaki",
		description: "Japanese octopus balls",
		imageName: "takoyaki.png",
		price: 5.99,
	},
	{
		id: 8,
		title: "Sashimi",
		description: "Japanese raw fish",
		imageName: "sashimi.png",
		price: 8.99,
	},
	{
		id: 9,
		title: "Okonomiyaki",
		description: "Japanese savory pancake",
		imageName: "okonomiyaki.png",
		price: 6.99,
	},
	{
		id: 10,
		title: "Katsu Curry",
		description: "Japanese curry with fried pork",
		imageName: "katsu-curry.png",
		price: 9.99,
	},
];

function App() {
	let [subtotal, setSubtotal] = useState(0);
	let [quantities, setQuantities] = useState(
		new Array(menuItems.length).fill(0)
	);

	// Clear all the quantities
	const clearAll = (e) => {
		e.preventDefault();
		setQuantities(new Array(menuItems.length).fill(0));
		setSubtotal(0);
	};

	// Alert the order information
	const alertOrder = (e) => {
		e.preventDefault();

		if (subtotal == 0) {
			alert("No items in cart");
			return;
		}

		let result = "Order placed!\n";
		for (let i = 0; i < menuItems.length; i++) {
			if (quantities[i] > 0) {
				result += `${quantities[i]} ${menuItems[i].title}\n`;
			}
		}

		result += `Subtotal: $${subtotal}`;
		alert(result);
	};

	useEffect(() => {
		setSubtotal(
			quantities
				.reduce((acc, curr, i) => acc + curr * menuItems[i].price, 0)
				.toFixed(2)
		);
	}, [quantities]);

	return (
		<div className="body">
			<Header />
			<div className="items">
				{/* Display menu items dynamicaly here by iterating over the provided menuItems */}
				{menuItems.map((menuItem) => (
					<MenuItem
						key={menuItem.id}
						id={menuItem.id}
						title={menuItem.title}
						description={menuItem.description}
						imageName={menuItem.imageName}
						price={menuItem.price}
						itemCount={quantities[menuItem.id - 1]}
						quantities={quantities}
						setQuantities={setQuantities}
					/>
				))}
			</div>
			<div className="footer">
				<div className="subtotalText">
					Subtotal $<span>{subtotal}</span>
				</div>
				<div>
					<button
						className="footerBtn"
						onClick={(e) => alertOrder(e)}>
						Order
					</button>
					<button className="footerBtn" onClick={(e) => clearAll(e)}>
						Clear All
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
