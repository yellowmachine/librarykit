import { trpcServer } from "../lib/server/server";

export const load = async () => {
	await trpcServer.greeting.ssr({ name: 'tRPC' });
};