import type { Book } from "../../data/books";
import './BookCard.scss';

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="BookCard">
      <div className="cas" ></div>
      <img src={book.image} alt={book.title} className="" />
      <span className="title">Titre : {book.title}</span>
      <span className="author">Auteur : {book.author}</span>
      <span className="genre">Genre : {book.genre} • {book.date}</span>
    </div>
  );
}
