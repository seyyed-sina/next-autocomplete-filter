import { Suspense } from 'react';

import { Filter, LoadingContent } from '@components';

export default function Home() {
  return (
    <Suspense fallback={<LoadingContent />}>
      <Filter />
    </Suspense>
  );
}
