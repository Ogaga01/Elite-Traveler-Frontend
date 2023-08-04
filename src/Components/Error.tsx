import React, {FC} from 'react';
import {useRouteError, isRouteErrorResponse} from 'react-router-dom'

const Error:FC = () => {
    const error = useRouteError() as Error;

    if (!isRouteErrorResponse(error)) {
        return null;
    }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
};

export default Error;