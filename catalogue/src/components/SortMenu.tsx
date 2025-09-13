interface Props {
  sortBy: string;
  setSortBy: (s: string) => void;
}

export default function SortMenu({ sortBy, setSortBy }: Props) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="p-2 border rounded mb-4"
    >
      <option value="">Trier par...</option>
      <option value="genre">Genre</option>
      <option value="date">Date</option>
    </select>
  );
}
