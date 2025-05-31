#!/bin/bash

# 1. Levanta la base de datos en segundo plano
docker compose -f docker-compose.test.yml up -d

# 2. Espera a que el puerto de la base de datos esté disponible (ejemplo para PostgreSQL en el puerto 5432)
while ! nc -z localhost 5432; do
  echo "Esperando a que PostgreSQL esté listo..."
  sleep 1
done
a
# 3. Ejecuta las migraciones
npx mikro-orm migration:up --config=./src/mikro-orm.config.test.ts

# 4. Ejecuta los tests
npx vitest run

# 5. (Opcional) Apaga los contenedores después de los tests
docker compose -f docker-compose.test.yml down
