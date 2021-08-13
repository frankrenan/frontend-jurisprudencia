import { http } from "./api";


export default class Decisorios {
  getPesquisarDecisorio(campoPesquisa) {
    return http.get(`?strBusca=${campoPesquisa}`).then((res) => res.data).catch((err) => console.log(err))
  }
}