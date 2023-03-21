import NProgress from 'nprogress';
import { useEffect } from 'react';

interface SuspenseLoaderInterface {
  title?: string;
}

export function SuspenseLoader({
  title = '...Loading',
}: SuspenseLoaderInterface) {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return <p>{title}</p>;
}
