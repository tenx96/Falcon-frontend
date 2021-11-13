import React from "react";

export const useApi = (promise) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const consumeAxiosPromise = () => {
      setLoading(true);
      promise()
        .then((res) => {
          if (res.status < 300) {
            setData(res.data);
          } else {
            setError(res.data);
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setIsError(true);
          setError(err);
        });
    };

    consumeAxiosPromise();
  }, []);

  return [data, loading, isError, error];
};
