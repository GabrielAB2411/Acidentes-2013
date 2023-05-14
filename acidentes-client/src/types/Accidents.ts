import { CausaAcidente } from "./CausaAcidente";
import { ClassificacaoAcidente } from "./ClassificacaoAcidente";
import { TipoAcidente } from "./TipoAcidente";
import { UF } from "./UF";

export type Accidents = {
    id: number,
    mortos: number,
    tipoAcidente: TipoAcidente,
    uf: UF,
    causaAcidente: CausaAcidente,
    classificacaoAcidente: ClassificacaoAcidente,
    dataInversa: string,
    feridos: number,
}