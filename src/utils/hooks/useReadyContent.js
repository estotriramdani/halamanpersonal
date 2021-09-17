import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { baseUrl } from '../../configs/baseUrl';

const useReadyContent = (type, username) => {
  const [isReadyContent, setIsReadyContent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { data } = useSWR(baseUrl.API + 'contents/' + username + '/' + type);
  useEffect(() => {
    if (data) {
      if (data.data.length <= 0) {
        setIsReadyContent(false);
      } else {
        setIsReadyContent(true);
      }
    }
  }, [data, isLoaded]);
  return isReadyContent;
};

export default useReadyContent;
