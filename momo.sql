
-- Check if db exists first
CREATE Database
IF NOT EXISTS momo;
--  Use this database
USE momo;
--  Tables
 Create Table User(
    UserID int(4) primary key auto_increment not null,
    userName varchar(30) not null,
    lastName varchar(30) not null,
    Email varchar(30) not null,
    idNumber int(14) not null,
    Userpassword varchar(30) not null,
    userType varchar(30) not null
);

