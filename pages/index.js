import React, { useState } from "react";

export default props => {
	const [catLoaded, setCatLoaded] = useState(false);
	const [externalPhotoLoaded, setExternalPhotoLoaded] = useState(false);
	return (
		<>
			<div>
				<img
					style={{ width: 400 }}
					src="/static/img/cat.jpg"
					onLoad={() => setCatLoaded}
				/>
				{catLoaded ? <p>Local cat is here!</p> : ""}
			</div>
			<div>
				<img
					style={{ width: 400 }}
					src="https://upload.wikimedia.org/wikipedia/commons/5/5e/21-224-5054_NNP_Synevyr_RB_18.jpg"
					onLoad={() => setExternalPhotoLoaded(true)}
				/>
				{externalPhotoLoaded ? <p>External photo is here!</p> : ""}
			</div>
		</>
	);
};
