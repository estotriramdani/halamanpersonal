import { useRouter } from 'next/dist/client/router';
import useSWR from 'swr';
import NotFoundPage from '../../../src/components/pages/NotFoundPage';
import Preloader from '../../../src/components/pages/Preloader/Index';
import Theme1ShowCase from '../../../src/components/pages/themes/Theme-1/Theme1ShowCase';
import { baseUrl } from '../../../src/configs/baseUrl';
import fetcher from '../../../src/utils/helpers/fetcher';

export default function Home() {
  const router = useRouter();
  const username = router.query.username;
  const pageName = router.query.pageName;
  const { data, error } = useSWR(baseUrl.API + 'user/' + username, fetcher);

  if (data) {
    if (data.status === 'success') {
      return <Theme1ShowCase username={username} type={pageName} />;
    } else {
      return <NotFoundPage />;
    }
  }
  return <Preloader />;
}
