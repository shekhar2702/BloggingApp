import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState();
  useEffect(()=>{
      fetch(url)
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
        .catch(
          function (e) {
            setIsError(e.message);
            setIsPending(false);
          },
        ); 
  },[url])//execute useEffect every time url changes.
  return { data, isPending, isError };
}

export default useFetch;
