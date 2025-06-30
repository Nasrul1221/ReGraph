import { atomWithStorage } from 'jotai/utils';

export const userSteamDataJotai = atomWithStorage('userSteamDataJotai', {
  steamID: null,
  appID: null,
});
