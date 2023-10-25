--Device 
INSERT INTO DEVICE (DLocation, DIP, DCDistance, DPDistance, DCISP, DPISP, DSISP) VALUES ('Hong Kong', '34.92.39.7', '11,589', '11,533', 'BYU', 'Google', 'Xfinity');
INSERT INTO DEVICE (DLocation, DIP, DCDistance, DPDistance, DCISP, DPISP, DSISP) VALUES ('Tel Aviv', '34.165.106.136', '11,257', '11,215', 'BYU', 'Google', 'Xfinity');

--Hotel 
--INSERT INTO HOTEL (HMaxMeetSize, HName, HState, HZip, HAddress, HContactPhone, HPhone, HNumRooms, HCity) VALUES (100, 'Hilton Hotel Missoula', 'Montana', 59901, '100 Madison St, Missoula, MT 59802', '4067283100', '4067283198', 200, 'Missoula');
--INSERT INTO HOTEL (HMaxMeetSize, HName, HState, HZip, HAddress, HContactPhone, HPhone, HNumRooms, HCity) VALUES (10000, 'Hotel California', 'California', 90001, '3832 Warbler St, Los Angeles, CA 90001', '4001002000', '3105432189', 500, 'Los Angeles');
--INSERT INTO HOTEL (HMaxMeetSize, HName, HState, HZip, HAddress, HContactPhone, HPhone, HNumRooms, HCity) VALUES (650, 'The Blue Chateau', 'Florida', 56825, '56 Seashell Drive, Tampa Bay, FL 56825', '8524567894', '1234567890', 147, 'Tampa Bay');
--INSERT INTO HOTEL (HMaxMeetSize, HName, HState, HZip, HAddress, HContactPhone, HPhone, HNumRooms, HCity) VALUES (7500, 'Treasure Island', 'Nevada', 64585, '789 Las Vegas Boulevard, Las Vegasm NV 64585', '8567898520', '8569747458', 8900, 'Las Vegas');

--Conference
--INSERT INTO CONFERENCE (CName, CStartDate, CEndDate, CCity, CFee, CAttendance, CBudget, HName) VALUES ('IPOAC Year in Review', '2023-02-14', '2023-02-15', 'Missoula', 25, 95, 2000, 'Hilton Hotel Missoula');
--INSERT INTO CONFERENCE (CName, CStartDate, CEndDate, CCity, CFee, CAttendance, CBudget, HName) VALUES ('Uprising of the Avians', '2023-02-13', '2023-02-15', 'Los Angeles', 25, 95, 2000, 'Hotel California');
--INSERT INTO CONFERENCE (CName, CStartDate, CEndDate, CCity, CFee, CAttendance, CBudget, HName) VALUES ('TED (Technology, Entertainment, Design) Conference', '2023-05-18', '2023-05-20', 'Las Vegas', 50, 5000, 20000, 'Treasure Island');
--INSERT INTO CONFERENCE (CName, CStartDate, CEndDate, CCity, CFee, CAttendance, CBudget, HName) VALUES ('Global Innovation Summit', '2023-06-02', '2023-06-05', 'Tampa Bay', 15, 50, 1500, 'The Blue Chateau');

--Attendee issue with attendee won't insert because conference is skipping serial (1)
--INSERT INTO ATTENDEE (AName, APhone, ADiscount, AEmail, AFeePaid, HName) VALUES ('Paul Bunyan', 649100200, 10, 'paul_bunyan@yahoo.com', 5, 'Hilton Hotel Missoula');
--INSERT INTO ATTENDEE (AName, APhone, ADiscount, AEmail, AFeePaid, HName) VALUES ('Acanthis', 9991006542, 40, 'godofpigeons@pigeon.com', 0, 'Hotel California');
--INSERT INTO ATTENDEE (AName, APhone, ADiscount, AEmail, AFeePaid, HName) VALUES ('Cindy LouWho', 4568521590, 15, 'ilovechristmas@grinch.com', 15, 'The Blue Chateau');
--INSERT INTO ATTENDEE (AName, APhone, ADiscount, AEmail, AFeePaid, HName) VALUES ('Jack Black', 2354856258, 50, 'schoolofrock@rockers.com', 10, 'Treasure Island');
