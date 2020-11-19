import { put, takeLatest, call } from 'redux-saga/effects';
import { go, replace } from 'connected-react-router';
import { reset } from 'redux-form';
import {
  contributionSubmissionFailed,
  contributionSubmitted,
  SUBMIT_CONTRIBUTION,
  SubmitContributionAction
} from 'app/actions/contribution';
import { createSubmissionError } from 'app/utils/form';
import sendEmail from 'api/sendInBlue/sendEmail';
import createContributionEmail from 'app/background/services/createContributionEmail';
import { history } from '../store';
import { captureException } from '../../utils/sentry';
import { createCallAndRetry } from '../../sagas/effects/callAndRetry';

const sendEmailAndRetry = createCallAndRetry({
  maximumAttempts: 15, // ~ 1 min 45s
  onFinalError: () => {
    captureException(new Error('Could not send contribution email'));
  }
});

export function* submitContributionSaga({
  payload: contribution,
  meta: { form, resolve, reject }
}: SubmitContributionAction) {
  try {
    yield sendEmailAndRetry(sendEmail, createContributionEmail(contribution));

    yield put(contributionSubmitted(contribution));

    if (form) {
      // reset history, form and redirect to success page
      yield put(go(-history.entries.length));
      yield put(replace('/contribute/submitted'));

      yield put(reset(form));

      yield call(resolve);
    }
  } catch (e) {
    yield put(contributionSubmissionFailed(e));

    if (form) {
      yield call(reject, createSubmissionError(e));
    }
  }
}

export default function*() {
  yield takeLatest(SUBMIT_CONTRIBUTION, submitContributionSaga);
}
