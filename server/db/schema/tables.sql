-- Drop existing tables
DROP TABLE IF EXISTS job_postings CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- USERS TABLE
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  handle VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255) NOT NULL,
  gender VARCHAR(50),
  occupation VARCHAR(255),
  license VARCHAR(255),
  points INTEGER DEFAULT 0,
  badge_id INTEGER,
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  token VARCHAR(255)
);


CREATE TABLE job_postings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  type_of_worker VARCHAR(255),
  rate DECIMAL,
  gender VARCHAR(50),
  duration INTEGER,
  date DATE,
  start_time TIME,
  facility_name VARCHAR(255),
  facility_short_address VARCHAR(255),
  facility_latitude DECIMAL,
  facility_longitude DECIMAL,
  available_to_choose BOOLEAN DEFAULT FALSE,
  is_filled BOOLEAN DEFAULT FALSE
);
