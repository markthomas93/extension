import { createSelector } from 'reselect';
import { RouteComponentProps } from 'react-router';
import { getLocation } from 'connected-react-router';
import {
  EnhancedNotice,
  getNotice,
  shouldNoticeBeShown
} from 'app/lmem/notice';
import { InstallationDetails } from 'app/lmem/installation';
import { State } from '../store';

export const getNotices = (state: State) => state.recommendations;

export const isRead = (notice: EnhancedNotice) => notice.read === true;

export const isUnread = (notice: EnhancedNotice) => !isRead(notice);

export const getUnreadNotices = (state: State) =>
  getNotices(state).filter(isUnread);

export const hasUnreadNotices = (state: State) =>
  getUnreadNotices(state).length > 0;

export const getNoticeById = (
  state: State,
  {
    match: {
      params: { id }
    }
  }: RouteComponentProps<{ id?: string }>
) => getNotice(Number(id), getNotices(state));

export const isOpen = (state: State): boolean => state.open.open;
export const isMounted = (state: State): boolean => state.open.mounted;

export const getFilteredNotices = createSelector(
  getNotices,
  notices => notices.filter(shouldNoticeBeShown)
);

export const getOnInstalledDetails = (state: State): InstallationDetails =>
  state.installationDetails;

export const getExtensionInstallationDate = createSelector(
  getOnInstalledDetails,
  (details: InstallationDetails) =>
    details.datetime ? new Date(details.datetime) : undefined
);

export const getTabId = (state: State) => state.tabId;

export const getPathname = (state: State) => getLocation(state).pathname;