import { all, takeLatest } from 'redux-saga/effects';

import { Types as AcampamentosTypes } from '../duck/acampamentos';

import { listaAcampamentos } from './acampamentos';

export default function* rootSaga() {
  return yield all(
    [
      takeLatest(AcampamentosTypes.REQUEST, listaAcampamentos)
    ]
  )
}
