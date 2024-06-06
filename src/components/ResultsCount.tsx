import { useDebounce, useJobItemsContext } from "../lib/hooks";

export default function ResultsCount() {
  const { totalNumberOfResults } = useJobItemsContext();
  const debouncedTotalNumberOfResults = useDebounce(totalNumberOfResults, 500);
  return <p className="count">{debouncedTotalNumberOfResults} results</p>;
}
