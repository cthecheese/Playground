drop schema public cascade;
create schema public;

CREATE TABLE Users(
ID SERIAL NOT NULL PRIMARY KEY,
Username varchar(16) NOT NULL,
Email text
);

CREATE TABLE ToDoItem(
ID SERIAL NOT NULL PRIMARY KEY,
AuthorID integer NOT NULL references Users(ID),
Description text NOT NULL,
Completed boolean NOT NULL
);

INSERT INTO Users(Username) Values ('cthecheese'),('bkolumbic'),('romulo');

SELECT * FROM Users;