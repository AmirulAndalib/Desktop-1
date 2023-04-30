import type { LayoutServerLoad } from "./$types";
import axios from "axios";
import { BACKEND_URL } from "$env/static/private";

const getCategories = async () => {
	try {
		const response = await axios.get(BACKEND_URL);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const load = (async () => {
	return getCategories();
}) satisfies LayoutServerLoad;
