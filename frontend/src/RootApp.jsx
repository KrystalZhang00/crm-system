import { Suspense, lazy } from 'react';

const CrmOs = lazy(() => import('./apps/CrmOs'));

export default function RootApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CrmOs />
    </Suspense>
  );
}
