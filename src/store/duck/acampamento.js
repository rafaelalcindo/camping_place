/**
 * Action Types
 */
export const Types = {
  REQUEST: 'ACAMPAMENTO_REQUEST',
  SUCCESS: 'ACAMPAMENTO_SUCCESS',
  FAILURE: 'ACAMPAMENTO_FAILURE'
}

/**
 * Reducers
 */
export const INITIAL_STATE = {
  id: null,
  nome_local: null,
  foto_principal: null,
  descricao: null,
  preco_1: 0,
  preco_2: 0,
  created_at: null,
  updated_at: null,
  enderecos: {},
  anexos: [],
  loading: false,
  error: false,
};

export default function acampamento(state = INITIAL_STATE, action) {
  switch (action.type){
    case Types.REQUEST:
      return { ...state, loading: true }
    case Types.SUCCESS:
      return {
        ...state,
        nome_local: action.payload.acampamento.nome_local,
        foto_principal: action.payload.acampamento.foto_principal,
        descricao: action.payload.acampamento.descricao,
        preco_1: action.payload.acampamento.preco_1,
        preco_2: action.payload.acampamento.preco_2,
        created_at: action.payload.acampamento.created_at,
        updated_at: action.payload.acampamento.updated_at,
        enderecos: action.payload.acampamento.enderecos,
        anexos: action.payload.acampamento.anexos
      }
    case Types.FAILURE:
      return {
        ...state,
        loading: false,
        error: false
      }

    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  acampamentoRequest: (id) => ({
    type: Types.REQUEST,
    payload: { id }
  }),

  acampamentoSuccess: (acampamento) => ({
    type: Types.SUCCESS,
    payload: { acampamento }
  }),

  acampamentoFailure: () => ({
    type: Types.FAILURE
  })
}
