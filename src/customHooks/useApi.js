import React from "react";

export const useApi = (promise, onSuccess, onError, cancel) => {
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
            if (onSuccess) {
              onSuccess(res.data);
            }

            setData(res.data);
          } else {
            if (onError) {
              onError(res.data);
            }
            setError(res.data);
          }
          setLoading(false);
        })
        .catch((err) => {
          if (onError) {
            onError(err);
          }
          setLoading(false);
          setIsError(true);
          setError(err);
        });
    };
    if (!cancel) {
      consumeAxiosPromise();
    }
  }, []);

  return [data, loading, isError, error];
};
