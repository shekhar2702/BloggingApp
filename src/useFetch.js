import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState();
  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then(function (res) {
        console.log(res);
        if (!res.ok) throw new error("Can't fetch the specified resource");
        return res.json();
      })
      .then(function (data) {
        setData(data);
        setIsError();
        setIsPending(false);
      })
      .catch(function (e) {
        if (e.name == "AbortError") console.log("Process aborted!!");
        setIsError(e.message);
        setIsPending(false);
      });
    return () => abortController.abort();
  }, [url]);
  return { data, isPending, isError };
}

export default useFetch;
