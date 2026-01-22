import { Star, Calendar, User } from 'lucide-react';
import { Movie } from '../lib/supabase';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800 flex-1">{movie.title}</h3>
          <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full ml-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-amber-700">{movie.imdb_rating}</span>
          </div>
        </div>

        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            {movie.genre}
          </span>
          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            {movie.language}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{movie.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{movie.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{movie.director}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
