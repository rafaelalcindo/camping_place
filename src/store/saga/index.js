import { all, takeLatest } from 'redux-saga/effects';

import { Types as AcampamentosTypes } from '../duck/acampamentos';
import { Types as AcampamentoTypes } from '../duck/acampamento';

import { listaAcampamentos } from './acampamentos';
import { detalheAcampamento } from './acampamento';

export default function* rootSaga() {
  return yield all(
    [
      // Acampamentos
      takeLatest(AcampamentosTypes.REQUEST, listaAcampamentos),

      // Acampamento
      takeLatest(AcampamentoTypes.REQUEST, detalheAcampamento)

    ]
  )
}
