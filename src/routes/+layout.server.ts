import { trpcServer } from "../lib/server/server";

export const load = async (event) => {
	return {
		trpc: trpcServer.hydrateToClient(event),
	};
};