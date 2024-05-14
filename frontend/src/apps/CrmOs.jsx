import { lazy, Suspense } from 'react';

const CRMApp = lazy(() => import('./CrmApp'));

const DefaultApp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CRMApp />
  </Suspense>
);

export default function CrmOs() {
  console.log('Loading the app');
  return <DefaultApp />;
}
