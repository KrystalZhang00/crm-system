import { lazy, Suspense } from 'react';
import PageLoader from '@/components/PageLoader';
import { useSelector } from 'react-redux';
import { selectAuth } from '@/redux/auth/selectors';
import Localization from '@/locale/Localization';

const CRMApp = lazy(() => import('./CrmApp'));

const DefaultApp = () => (
  <Localization>
    <AppContextProvider>
        <Suspense fallback={<PageLoader />}>
            <CRMApp />
        </Suspense>
    </AppContextProvider>
  </Localization> 
);

export default function CrmOs() {
  const { isLoggedIn } = useSelector(selectAuth);
  if (!isLoggedIn)
    return (
      <Localization>
        <div>Loading...</div>
      </Localization>
    );
  else {
    return <DefaultApp />;
  }    
}
