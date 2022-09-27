interface Valores {
  MEN: number,
  TRI: number,
  SEM: number,
  SEM2: number,
  ANU: number,
  ANU2: number,
  ANU3: number,
  ANU4: number,
}

interface ListaModulosApi {
  CM_COD_MODULO: number,
  CM_NUM_ID: number,
  CM_DESCRICAO: string,
  CM_VAL_MEN: number,
  CM_VAL_TRI: number,
  CM_VAL_SEM: number,
  CM_SEM_2: number,
  CM_VAL_ANU: number,
  CM_ANU_2: number,
  CM_ANU_3: number,
  CM_ANU_4: number,
}

interface ListaModulos {
  CODMODULO: number,
  DESCRICAO: string,
  ID: number,
  ANU: number,
  ANU2: number,
  ANU3: number,
  ANU4: number,
  SEM: number,
  SEM2: number,
  TRI: number,
  MEN: number,
  MARC: boolean,
} 

interface Funcoes {
  CM_COD_FUNCAO: number,
  CM_GRUPO: string,
  CM_DESC_FUNC: null | string,
  CM_SIST_MEC: null | string,
  CM_SIST_MECBOX: string,
  CM_COND: null | string,
  CM_ORDEM_GRUPO: number,
  CM_ORDEM_FUNC: number,
  CM_AJUDA: null | string,
}

export type {Valores, ListaModulosApi, ListaModulos, Funcoes}