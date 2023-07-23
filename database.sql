-- CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- gif table
CREATE TABLE "gif" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (280),
    "path" VARCHAR (10000),
    "category_id" integer REFERENCES "category"
);

-- category 
INSERT INTO "category" ("name")
VALUES ('meme'), ('art'), ('animal'), ('food');
