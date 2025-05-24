import { createTRPCSvelteServer } from 'trpc-svelte-query/server';
import { router } from '../trpc/router';
import { createContext } from '../trpc/context';

export const trpcServer = createTRPCSvelteServer({
	endpoint: '/api/trpc',
	router: router,
	createContext,
});