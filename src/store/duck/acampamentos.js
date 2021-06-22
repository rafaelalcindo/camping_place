/**
 * Action Types
 */
export const Types = {
  REQUEST: 'ACAMPAMENTO_REQUEST',
  SUCCESS: 'ACAMPAMENTO_SUCCESS',
  FAILURE: 'ACAMPAMENTO_FAILURE '
};

/**
 * Reducers
 */
export const INITIAL_STATE = {
  acampamentos: [],
  loading: false,
  error: false
};

export default function acampamentos(state = INITIAL_STATE, action) {
  switch (action.Types) {
    case Types.REQUEST:
      return { ...state, loading: true }

    case Types.SUCCESS:
      return {
        ...state,
        acampamentos: action.payload.acampamentos,
        loading: false
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
  acampamentosRequest: () =>({
    type: Types.REQUEST
  }),

  acampamentosSuccess: (acampamentos) => ({
    type: Types.SUCCESS,
    payload: { acampamentos }
  }),

  acampamentosFailure: () => ({
    type: Types.FAILURE
  })

}
