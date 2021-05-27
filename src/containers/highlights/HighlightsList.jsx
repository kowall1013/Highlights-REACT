import HighlightItem from "./HighlightItem";

function HighlightsList({ highlights }) {
  if (highlights === []) {
    return <h1>Loi</h1>;
  }

  const highlight = highlights.map((item) => {
    return (
      <li key={`highlight ${item.title}`}>
        <HighlightItem highlight={item} />
      </li>
    );
  });

  return highlight;
}

export default HighlightsList;
