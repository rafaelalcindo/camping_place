import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as AcampamentoActions } from '../duck/acampamentos';

export function* listaAcampamentos(action)
{
  try {
    console.log('entrou')
  } catch (err) {
    console.log(err);
    yield put(AcampamentoActions.FAILURE);
  }
}
