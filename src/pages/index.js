import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace('/blog');
  }, []);

  return <p><a href="/blog">Redirect</a></p>;
};

export default RedirectPage;
