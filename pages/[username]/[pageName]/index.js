import { useRouter } from 'next/dist/client/router';
import Theme1ShowCase from '../../../src/components/pages/themes/Theme-1/Theme1ShowCase';

export default function Home() {
  const router = useRouter();
  const username = router.query.username;
  const pageName = router.query.pageName;
  return <Theme1ShowCase username={username} type={pageName} />;
}
