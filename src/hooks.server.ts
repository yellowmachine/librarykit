import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

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

export const handle: Handle = sequence(defaultHandle);

