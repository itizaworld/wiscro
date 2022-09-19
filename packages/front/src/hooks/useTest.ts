import useSWR, { SWRResponse } from 'swr';
import { restClient } from '../../libs/restClient';

export const useTest = (): SWRResponse<string, Error> => {
  return useSWR('/', (endpoint) => restClient.apiGet<string>(endpoint).then((res) => res.data));
};
