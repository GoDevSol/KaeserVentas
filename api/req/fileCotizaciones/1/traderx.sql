CREATE TABLE "usuarios" (
  "id" SERIAL PRIMARY KEY,
  "id_grupo" int,
  "nombre_completo" varchar,
  "telefono" varchar,
  "correo" varchar,
  "direccion" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "acciones" (
  "id" SERIAL PRIMARY KEY,
  "id_acceso" int,
  "nombre" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "accesos" (
  "id" SERIAL PRIMARY KEY,
  "id_grupo" int,
  "nombre" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "grupo" (
  "id" SERIAL PRIMARY KEY,
  "nombre" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "actividad" (
  "id" SERIAL PRIMARY KEY,
  "id_usuario" int,
  "nombre" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "ajustes_usuario" (
  "id" SERIAL PRIMARY KEY,
  "id_usuario" int,
  "id_ajuste" int,
  "valor" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "ajustes" (
  "id" SERIAL PRIMARY KEY,
  "nombre" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "estado_cuenta" (
  "id" SERIAL PRIMARY KEY,
  "id_usuario" int,
  "balance" decimal,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "historico_estado_cuenta" (
  "id" SERIAL PRIMARY KEY,
  "id_estado_cuenta" int,
  "id_activos_usuario" int,
  "numero_transaccion" varchar,
  "debe" decimal,
  "haber" decimal,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "activos" (
  "id" SERIAL PRIMARY KEY,
  "id_tipo_activo" int,
  "nombre" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "activos_usuario" (
  "id" SERIAL PRIMARY KEY,
  "id_usuario" int,
  "id_activo" int,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

CREATE TABLE "tipos_activo" (
  "id" SERIAL PRIMARY KEY,
  "id_activo" int,
  "nombre" varchar,
  "eliminado" bit,
  "fecha_creacion" timestamp,
  "fecha_ultima_modificacion" timestamp,
  "fecha_eliminado" timestamp
);

ALTER TABLE "acciones" ADD FOREIGN KEY ("id") REFERENCES "accesos" ("id");

ALTER TABLE "grupo" ADD FOREIGN KEY ("id") REFERENCES "accesos" ("id_grupo");

ALTER TABLE "grupo" ADD FOREIGN KEY ("id") REFERENCES "usuarios" ("id_grupo");

ALTER TABLE "actividad" ADD FOREIGN KEY ("id_usuario") REFERENCES "usuarios" ("id");

ALTER TABLE "ajustes_usuario" ADD FOREIGN KEY ("id_ajuste") REFERENCES "ajustes" ("id");

ALTER TABLE "ajustes_usuario" ADD FOREIGN KEY ("id_usuario") REFERENCES "usuarios" ("id");

ALTER TABLE "estado_cuenta" ADD FOREIGN KEY ("id_usuario") REFERENCES "usuarios" ("id");

ALTER TABLE "estado_cuenta" ADD FOREIGN KEY ("id") REFERENCES "historico_estado_cuenta" ("id_estado_cuenta");

ALTER TABLE "activos_usuario" ADD FOREIGN KEY ("id_activo") REFERENCES "activos" ("id");

ALTER TABLE "activos_usuario" ADD FOREIGN KEY ("id") REFERENCES "historico_estado_cuenta" ("id_activos_usuario");

ALTER TABLE "activos_usuario" ADD FOREIGN KEY ("id_usuario") REFERENCES "usuarios" ("id");

ALTER TABLE "tipos_activo" ADD FOREIGN KEY ("id") REFERENCES "activos" ("id_tipo_activo");
