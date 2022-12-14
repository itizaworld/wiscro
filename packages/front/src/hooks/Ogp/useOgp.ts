import { Ogp } from '@wiscro/common';
import useSWR, { SWRResponse } from 'swr';
import { restClient } from '../../libs/restClient';

/**
 * urlをもとにOGPを取得するSWR
 * @param url
 */
export const useOgp = (url?: string): SWRResponse<Ogp, Error> => {
  const key = url ? `/ogps?url=${url}` : null;
  return useSWR(key, (endpoint: string) =>
    restClient.apiGet<{ ogp: Ogp }>(endpoint).then((result) => {
      return new Ogp(result.data.ogp);
    }),
  );
};
