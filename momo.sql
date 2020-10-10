
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
    userType varchar(30) not null,
    phoneNumber int(10) not null
);

create table jobs(
JobID int(4) primary key auto_increment,
jobName varchar(250) not null,
jodDesc varchar (250) not null,
tag varchar (200) not null ,
price int (11) not null,
UserID int(4)

);


ALTER TABLE jobs
ADD CONSTRAINT FK_UserID
FOREIGN KEY (UserID) REFERENCES User(UserID);


