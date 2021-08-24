import { useRouter } from 'next/dist/client/router';
import ShowCaseLayout from '../../../src/components/Layout/ShowCaseLayout';
import ItemDetail from '../../../src/components/moleculs/ItemDetail';
import ItemList from '../../../src/components/moleculs/ItemList';
import titleGenerator from '../../../src/components/utils/titleGenerator';

export default function Home() {
  const router = useRouter();
  let pageTitle = 'Loading ...';
  if (router.query.pageName) {
    pageTitle = titleGenerator(router.query.pageName);
  }
  return (
    <ShowCaseLayout title={pageTitle || 'Loading ...'}>
      <div className="content">
        <div className="left-side">
          <ItemDetail />
        </div>
        <div className="right-side">
          <ItemList />
        </div>
      </div>
    </ShowCaseLayout>
  );
}
