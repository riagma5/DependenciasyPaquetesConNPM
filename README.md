# DependenciasyPaquetesConNPM

# Inicializar proyecto
git init
npm init (rellenar los datos)
npm init -y (archivo con configuracion base)
npm set init.author.email (añade el email)
npm set init author.name (añade el nombre)
npm set init.license (añade la licencia)

# Instalar paquetes
npm install (y el nombre del paquete) --save-dev (vive en produccion y en desarrollo)

npm i (nombre del paquete) -D
npm i (nombre del paquete) -S

npm install -g (nombre del paquete) paquete en forma global se debe de instalar con permisos

npm list -g --depth 0 (buscar paquetes instalados)

npm install (nombre del paquete) -O -> paquetes opcionales