import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createTRPCHandle } from 'trpc-sveltekit';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';


const trpcHandle: Handle = createTRPCHandle({ router, createContext });

let hasInitialized = false;

async function initializeServer() {
  console.log("Inicializando el servidor...");

  try{
    
    console.log("Servidor inicializado.");
  }catch(e){
    console.error(e);
  }
  
  hasInitialized = true;
}

const defaultHandle: Handle = async ({ event, resolve }) => {
  if (!hasInitialized) {
    await initializeServer();
  }
  return await resolve(event);
}

export const handle: Handle = sequence(defaultHandle, trpcHandle);

