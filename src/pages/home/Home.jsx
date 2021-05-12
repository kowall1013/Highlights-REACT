import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchHighlights } from "../../redux";
import { HighlightsList } from "../../containers";

function Home() {
  const disptach = useDispatch();
  const highlights = useSelector((state) => state.highlights);

  useEffect(() => {
    disptach(fetchHighlights());
  }, [disptach]);

  const copyHighlights = highlights.highlights.slice(0, 2);

  if (highlights.loading) return <h1>Loading</h1>;
  if (highlights.error) return <h1>{highlights.error}</h1>;
  if (highlights.highlights)
    return (
      <ul>
        <HighlightsList highlights={copyHighlights} />;
      </ul>
    );
}

export default Home;
