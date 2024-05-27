import React from "react";

function ImageComponent({ imageName }) {
	// Construct the image path based on the prop
	const imagePath = `${imageName}.png`;

	return (
		<>
			<img
				src={imagePath}
				alt={imageName}
				className="pt-2 pb-2 w-130px"
			/>
		</>
	);
}

export default ImageComponent;
