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
  // Parte de Pagination
  current_page: 0,
  first_page_url: null,
  from: null,
  last_page: 0,
  last_page_url: null,
  next_page_url: null,
  path: null,
  per_page: 0,
  prev_page_url: null,
  to: 0,
  total: 0,
  // extra valores
  loading: false,
  error: false
};

export default function acampamentos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true }

    case Types.SUCCESS:
      return {
        ...state,
        acampamentos: action.payload.acampamentos,

        current_page: action.payload.pagination.current_page,
        first_page_url: action.payload.pagination.first_page_url,
        from: action.payload.pagination.from,
        last_page: action.payload.pagination.last_page,
        last_page_url: action.payload.pagination.last_page_url,
        next_page_url: action.payload.pagination.next_page_url,
        path: action.payload.pagination.path,
        per_page: action.payload.pagination.per_page,
        prev_page_url: action.payload.pagination.prev_page_url,
        to: action.payload.pagination.to,
        total: action.payload.pagination.total,

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
  acampamentosRequest: (page) =>({
    type: Types.REQUEST,
    payload: { page }
  }),

  acampamentosSuccess: (acampamentos, pagination) => ({
    type: Types.SUCCESS,
    payload: { acampamentos, pagination }
  }),

  acampamentosFailure: () => ({
    type: Types.FAILURE
  })

}
