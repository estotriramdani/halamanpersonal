import { useRouter } from 'next/dist/client/router';
import ShowCaseLayout from '../../../src/components/Layout/ShowCaseLayout';
import titleGenerator from '../../../src/components/utils/titleGenerator';

export default function Home() {
  const router = useRouter();
  let pageTitle = 'Loading ...';
  if (router.query.pageName) {
    pageTitle = titleGenerator(router.query.pageName);
  }
  return (
    <ShowCaseLayout title={pageTitle || 'Loading ...'}>
      <p>hah</p>
    </ShowCaseLayout>
  );
}
