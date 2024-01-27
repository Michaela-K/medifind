INSERT INTO users (first_name, last_name, handle, email, password, profile_picture, gender, occupation, license, points, badge_id, last_login, token) VALUES
('John', 'Doe', 'johndoe', 'john.doe@example.com', 'password', 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Male', 'Registered Nurse', 'L123456', 100, 1, '2024-01-01 12:00:00', 'token1'),
('Jane', 'Doe', 'janedoe', 'jane.doe@example.com', 'password', 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Female', 'Personal Support Worker', 'L654321', 200, 2, '2024-01-02 13:00:00', 'token2'),
('Alice', 'Smith', 'alicesmith', 'alice.smith@example.com', 'password', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Female', 'Personal Support Worker', 'L789123', 150, 3, '2024-01-03 14:00:00', 'token3'),
('Havier', 'Gutierrez', 'havier', 'havier.gutierrez@example.com', 'password', 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Male', 'Registered Nurse', 'L987654', 50, 4, '2024-01-04 15:00:00', 'token4'),
('Eva', 'Williams', 'evawilliams', 'eva.williams@example.com', 'password', 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg', 'Female', 'Registered Nurse', 'L456789', 300, 5, '2024-01-05 16:00:00', 'token5'),
('Michael', 'Bowman', 'michaelbowman', 'michael.bowman@example.com', 'password', 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Male', 'Personal Support Worker', 'L789456', 75, 6, '2024-01-06 17:00:00', 'token6');


INSERT INTO job_postings (user_id, title, type_of_worker, rate, gender, duration, date, start_time, facility_name, facility_short_address, facility_latitude, facility_longitude, available_to_choose, is_filled) VALUES
(1, 'Registered Nurse', 'Full-time', 50, 'Any', 9, '2024-02-01', '09:00:00', 'Elysium Medical Center', '123 Tech St', 40.7128, -74.0060, TRUE, FALSE),
(2, 'Personal Support Worker', 'Part-time', 33, 'Female', 12, '2024-02-15', '10:00:00', 'Aurelia Medical Group', '456 Design Ave', 37.7749, -122.4194, TRUE, FALSE),
(3, 'Registered Nurse', 'Full-time', 65, 'Male', 8, '2024-03-01', '08:30:00', 'Veritas Health Systems', '202 Analyze Ave', 41.8781, -87.6298, TRUE, FALSE),
(4, 'Personal Support Worker', 'Full-time', 35, 'Any', 12, '2024-02-15', '09:30:00', 'Aurelia Medical Group', '456 Design Ave', 37.7749, -122.4194, TRUE, FALSE),
(5, 'Registered Nurse', 'Part-time', 60, 'Any', 8, '2024-03-01', '11:00:00', 'Elysium Medical Center', '123 Tech St', 40.7128, -74.0060, TRUE, FALSE),
(6, 'Personal Support Worker', 'Full-time', 40, 'Any', 12, '2024-03-15', '08:00:00', 'Veritas Health Systems', '202 Analyze Ave', 41.8781, -87.6298, TRUE, FALSE);