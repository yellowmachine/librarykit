// Import the router type from your server file
import type { Router } from './router';
import { createTRPCSvelte, httpBatchLink } from 'trpc-svelte-query';

export const trpc = createTRPCSvelte<Router>({
	links: [
		httpBatchLink({
			url: '/api/trpc',
		}),
	],
});