import create from "zustand";

export const useUnit = create((set, get) => ({
	savingUnit: false,
	unitSaved: false,
	registerUnit: async (number, token) => {
		set({
			savingUnit: true
		});
		const response = await fetch(process.env.BACKEND_URL + "/api/unit", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify({ number }),
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		});
		const unit = await response.json();
		set({
			savingUnit: false,
			unitSaved: true,
			unit: unit
		});
	}
}));
