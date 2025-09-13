import casino from '../assets/casino.jpeg'
import greenClub from '../assets/green-club.jpeg'
import shift from '../assets/shift.jpeg'
import splash from '../assets/splash.jpeg'
import wave from '../assets/we-are-wave.jpeg'


export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  date: string; // YYYY-MM-DD
  image: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Casino",
    author: "Antoine de Saint-Exupéry",
    genre: "Conte",
    date: "1943-04-06",
    image: `${casino}`
  }, {
    id: 2,
    title: "Green Club",
    author: "Albert Camus",
    genre: "Roman",
    date: "1966-1-19",
    image: `${greenClub}`
  }, {
    id: 3,
    title: "Shift",
    author: "Donna Vandes",
    genre: "Slice of life",
    date: "1949-07-05",
    image: `${shift}`
  }, {
    id: 4,
    title: "Splashes",
    author: "Be kind to please",
    genre: "Fiction",
    date: "1961-12-19",
    image: `${splash}`
  }, {
    id: 5,
    title: "We are wave",
    author: "Romanof Alberto",
    genre: "Roman",
    date: "1942-05-19",
    image: `${wave}`
  }
];
