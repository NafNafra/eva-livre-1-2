import { useState } from "react";
import { books } from "../../data/books";
import BookCard from "../../components/BookCard";
import SearchBar from "../../components/SearchBar";
import SortMenu from "../../components/SortMenu";
import "./catalogue.scss";


export default function Catalogue() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredBooks = books
    .filter(b =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "genre") return a.genre.localeCompare(b.genre);
      if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });

  return (
    <div className="Catalogue">
      <div className="header">
        <h2>Catalogue de Livres</h2>
        <div>
          <SearchBar query={query} setQuery={setQuery} />
          <SortMenu sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>
      <div className="content">
        {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
      </div>

    </div>
  );
}
