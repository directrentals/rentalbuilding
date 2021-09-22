import create from "zustand";
import { persist } from "zustand/middleware";

export const useAuth = create(
	persist(
		(set, get) => ({
			authToken: null,
			authError: null,
			registerUser: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					mode: "cors",
					body: JSON.stringify({ email, password }),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (resp.status !== 204) {
							throw new Error("register-error");
						}

						get().loginUser(email, password);
					})
					.catch(error => set({ authError: error, authToken: null }));
			},

			registerOwner: (email, password, phone, number, building_id) => {
				fetch(process.env.BACKEND_URL + "/api/registerowner", {
					method: "POST",
					mode: "cors",
					body: JSON.stringify({ email, password, phone, number, building_id }),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (resp.status !== 204) {
							throw new Error("register-error");
						}

						get().loginUser(email, password);
					})
					.catch(error => set({ authError: error, authToken: null }));
			},

			logout: () => set({ authToken: null }),

			loginUser: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						mode: "cors",
						body: JSON.stringify({ email, password }),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (resp.status !== 200) {
						throw new Error("authentication-error");
					}

					const data = await resp.json();

					const respinfo = await fetch(process.env.BACKEND_URL + "/api/userinfo", {
						method: "GET",
						mode: "cors",
						headers: {
							Authorization: "Bearer " + data.token
						}
					});

					const userdata = await respinfo.json();

					set({ authToken: data.token, authError: null, user: userdata });
				} catch (error) {
					set({ authToken: null, authError: error });
				}
			}
		}),
		{
			name: "auth-storage", // unique name
			getStorage: () => sessionStorage // (optional) by default the 'localStorage' is used
		}
	)
);
