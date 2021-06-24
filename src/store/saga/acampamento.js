import { call, put } from "redux-saga/effects";

import api from '../../services/api';

import { Creators as AcampamentoActions } from '../duck/acampamento';

export function* detalheAcampamento(action)
{
  try {
    const { id } = action.payload;

    const response = yield call(api.get, `acampamento/view/${id}`);

    if (response.status == 200) {
      console.tron.log(response)
      const acampamento = response.data;
      yield put(AcampamentoActions.acampamentoSuccess(acampamento));
    } else {
      yield put(AcampamentoActions.acampamentoFailure());
    }

  } catch (err) {
    console.log(err)
    yield put(AcampamentoActions.acampamentoFailure());
  }
}
