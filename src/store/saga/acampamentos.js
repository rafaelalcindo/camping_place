import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as AcampamentoActions } from '../duck/acampamentos';

export function* listaAcampamentos(action)
{
  try {
    const { page } = action.payload;

    const response = yield call(api.get, `acampamento?page=${page}`);

    if (response.status == 200) {
      const acampamentos = response.data.data;
      const pagination = {
        current_page: response.data.current_page,
        first_page_url: response.data.first_page_url,
        from: response.data.from,
        last_page: response.data.last_page,
        last_page_url: response.data.last_page_url,
        next_page_url: response.data.next_page_url,
        path: response.data.path,
        per_page: response.data.per_page,
        prev_page_url: response.data.prev_page_url,
        to: response.data.to,
        total: response.data.total
      }

      yield put(AcampamentoActions.acampamentosSuccess(acampamentos, pagination));

    } else {
      yield put(AcampamentoActions.acampamentosFailure());
    }

  } catch (err) {
    console.log(err);
    // yield put(AcampamentoActions.FAILURE);
  }
}
