import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';

function useFetchAvailableCount(
  url: string
): [data: string, setData: Dispatch<SetStateAction<string>>] {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    async function fetchUrl(): Promise<void> {
      const json = await axios.get(url);
      const data = json.data.data[0].count;
      setData(data);
    }

    fetchUrl();
  }, [url]);

  return [data, setData];
}

export default useFetchAvailableCount;
