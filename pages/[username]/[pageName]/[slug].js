import { useRouter } from 'next/dist/client/router';
import Theme1ShowCaseDetail from '../../../src/components/pages/themes/Theme-1/Theme1ShowCaseDetail';

function Home() {
  const router = useRouter();
  const pageName = router.query.pageName;
  const username = router.query.username;
  return <Theme1ShowCaseDetail username={username} type={pageName} />;
}

export default Home;
