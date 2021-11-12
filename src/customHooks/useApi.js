import React from "react";

export const useApi = (promise) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    promise
      .then((res) => {
        if (res.status < 300) {
          setData(res.data);
        } else {
          setIsError(true);
          setError(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        setError(err);
      });
  }, []);

  return [data, loading, isError, error];
};
