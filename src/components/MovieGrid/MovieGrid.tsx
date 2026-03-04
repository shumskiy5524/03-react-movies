import css from './MovieGrid.module.css';

interface MovieGridProps {
    onSelectMovie: (movieId: number) => void;
    movies : {
        id: number;
        title: string;
        poster_path: string;
    }[];
}