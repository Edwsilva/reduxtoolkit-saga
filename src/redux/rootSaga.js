import {all} from "redux-saga/effects"

import { movieSagas } from "./movieSagas"

export default function* rootSaga() {
  // all é usado quando tem que executar um efeito de saga múltiplo em paralelo
  yield all([...movieSagas])
}