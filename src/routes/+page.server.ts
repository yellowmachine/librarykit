import { trpcServer } from "../lib/server/server";
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	await trpcServer.greeting.ssr();
};
