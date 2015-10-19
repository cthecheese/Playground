﻿drop schema public cascade;
create schema public;

CREATE TABLE Users(
ID SERIAL NOT NULL PRIMARY KEY,
Username varchar(16) NOT NULL,
Email text
);

CREATE TABLE Tasks(
ID SERIAL NOT NULL PRIMARY KEY,
AuthorID integer NOT NULL references Users(ID),
AssignedTo integer references Users(ID),
Description text NOT NULL,
Completed boolean NOT NULL DEFAULT false
);

INSERT INTO Users(Username) Values ('cthecheese'),('bkolumbic'),('romulo');
INSERT INTO Tasks(AuthorID, Description, Completed) Values (1, 'Get this task done', true);

SELECT Users.Username, Task.Description, UserTasks.Completed FROM Users, Task, UserTasks
WHERE UserTasks.UserID = Users.ID AND Task.Active = true;