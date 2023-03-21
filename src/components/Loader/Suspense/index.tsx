import NProgress from 'nprogress';
import { useEffect } from 'react';
import { SuspenseLoaderInterface } from './index.d';

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
