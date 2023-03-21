import NProgress from 'nprogress';
import { useEffect } from 'react';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return <p>...Loading</p>;
}

export default SuspenseLoader;
