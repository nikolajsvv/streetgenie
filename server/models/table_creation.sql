CREATE TABLE users(
  "user_id" SERIAL,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL,
  CONSTRAINT "user_pk0" PRIMARY KEY("user_id")
)

