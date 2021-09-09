import { useState, useEffect } from "react";
//The problem with this custom hook is that the fetch continues to be running in background even when the component is unmounted and other component is loaded on the screen.
//Now when the data comes from fetch request the hook will try to change the state of the component which requested the data.
//Now since that component is unmounted react won't be able to update the state for an unmounted component.
//So,we need to abort the fetch process when the component gets unmounted to avoid errors.
//Let's see hoe we can achieve that:-
function useFetch(url) {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState();
  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })//attaching the abortController to the fetch function.
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
    return () => abortController.abort();//This function is returned when we are aborting the fetch process.This happens if we unmount the component and another component is rendered.
  }, [url]); //execute useEffect every time url changes.
  return { data, isPending, isError };
}

export default useFetch;
