import React from "react";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({
	id,
	title,
	description,
	imageName,
	price,
	itemCount,
	quantities,
	setQuantities,
}) => {
	// Increment the quantity of this item
	const incrementQuantity = () => {
		const newQuantities = [...quantities];
		newQuantities[id - 1]++;
		setQuantities(newQuantities);
	};

	// Decrement the quantity of this item
	const decrementQuantity = () => {
		if (quantities[id - 1] === 0) return;

		const newQuantities = [...quantities];
		newQuantities[id - 1]--;
		setQuantities(newQuantities);
	};

	return (
		<div className="item">
			<img
				src={require(`../images/${imageName}`)}
				alt={description}
				className="itemImage"
			/>
			<div className="itemInfo">
				<h4 className="itemTitle">{title}</h4>
				<p className="itemDescription">{description}</p>
				<div className="itemFooter">
					<div className="itemPrice">${price}</div>
					<div>
						<button
							className="itemButton"
							onClick={() => decrementQuantity()}>
							-
						</button>
						<span className="itemQuantity">{itemCount}</span>
						<button
							className="itemButton"
							onClick={() => incrementQuantity()}>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
