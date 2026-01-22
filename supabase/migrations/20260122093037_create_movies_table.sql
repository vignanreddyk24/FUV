/*
  # Create movies table for movie recommendation system

  1. New Tables
    - `movies`
      - `id` (uuid, primary key) - Unique identifier for each movie
      - `title` (text) - Movie title
      - `genre` (text) - Movie genre (Action, Drama, Comedy, etc.)
      - `language` (text) - Movie language (English, Spanish, Hindi, etc.)
      - `imdb_rating` (numeric) - IMDB rating (0-10 scale)
      - `description` (text) - Brief movie description
      - `year` (integer) - Release year
      - `director` (text) - Director name
      - `created_at` (timestamptz) - Timestamp of record creation
  
  2. Security
    - Enable RLS on `movies` table
    - Add policy for public read access (anyone can view movies)
    - No insert/update/delete policies (movies managed by admin only)

  3. Notes
    - Movies are publicly viewable for all users
    - Data is pre-populated with sample movies across various genres and languages
    - IMDB ratings are stored as numeric for accurate sorting
*/

CREATE TABLE IF NOT EXISTS movies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  genre text NOT NULL,
  language text NOT NULL,
  imdb_rating numeric(3,1) NOT NULL CHECK (imdb_rating >= 0 AND imdb_rating <= 10),
  description text NOT NULL,
  year integer NOT NULL CHECK (year >= 1900 AND year <= 2100),
  director text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE movies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view movies"
  ON movies
  FOR SELECT
  USING (true);