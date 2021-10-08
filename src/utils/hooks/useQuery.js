import { useRouter } from 'next/dist/client/router';

const useQuery = () => {
  const router = useRouter();
  const query = router.query;
  return {
    username: query.username,
    slug: query.slug,
    type: query.type,
    isReady: router.isReady,
  };
};

export default useQuery;
