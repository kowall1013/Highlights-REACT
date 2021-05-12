import { Wrapper } from "./HighlightItem.styles";

function HighlightItem({ highlight }) {
  const { title, date, videos } = highlight;
  const { embed } = videos[0];

  const src = embed.slice(90, 187);

  return (
    <Wrapper>
      <div>
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <div className="container">
        <iframe title={title} src={src}></iframe>
      </div>
    </Wrapper>
  );
}
export default HighlightItem;
