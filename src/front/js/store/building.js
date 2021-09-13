import create from "zustand";

export const useBuilding = create((set, get) => ({
	savingBuilding: false,
	buildingSaved: false,
	registerBuilding: async (name, phone, street, street2, city, state, zipcode, token) => {
		set({
			savingBuilding: true
		});
		const response = await fetch(process.env.BACKEND_URL + "/api/building", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify({ name, phone, street, street2, city, state, zipcode }),
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		});
		const building = await response.json();
		set({
			savingBuilding: false,
			buildingSaved: true,
			building: building
		});
	}
}));
