import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Movie {
  id: string;
  title: string;
  genre: string;
  language: string;
  imdb_rating: number;
  description: string;
  year: number;
  director: string;
  created_at: string;
}
