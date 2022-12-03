import { ICMSs } from 'interfaces/cms';
import { useEffect, useState } from 'react';
import { ListCMS } from 'service/cms.services';

export function useCMS() {
  const [list, setList] = useState<ICMSs>([]);

  useEffect(() => {
    async function getCMSList() {
      const { data } = await ListCMS();
      if (data.listCMS) {
        const internInfo = data.listCMS;
        if (internInfo) {
          const data = internInfo.items as ICMSs;
          setList(data);
        }
      }
    }

    getCMSList();
    return () => {};
  }, []);

  return [list];
}
