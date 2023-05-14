using System;
using System.Collections.Generic;

namespace acidentes_api.Entities;

public partial class DatatranNormalizado
{
    public int Id { get; set; }

    public string? DataInversa { get; set; }

    public int? DiaSemanaId { get; set; }

    public string? Horario { get; set; }

    public int? Ufid { get; set; }

    public string? Br { get; set; }

    public string? Km { get; set; }

    public int? MunicipioId { get; set; }

    public int? CausaAcidenteId { get; set; }

    public int? TipoAcidenteId { get; set; }

    public int? ClassificacaoAcidenteId { get; set; }

    public int? FaseDiaId { get; set; }

    public int? SentidoViaId { get; set; }

    public int? CondicaoMeteorologicaId { get; set; }

    public int? TipoPistaId { get; set; }

    public int? TracadoViaId { get; set; }

    public int? UsoSoloId { get; set; }

    public int? Ano { get; set; }

    public int? Pessoas { get; set; }

    public int? Mortos { get; set; }

    public int? FeridosLeves { get; set; }

    public int? FeridosGraves { get; set; }

    public int? Ilesos { get; set; }

    public int? Ignorados { get; set; }

    public int? Feridos { get; set; }

    public int? Veiculos { get; set; }

    public virtual CausaAcidente? CausaAcidente { get; set; }

    public virtual ClassificacaoAcidente? ClassificacaoAcidente { get; set; }

    public virtual CondicaoMeteorologica? CondicaoMeteorologica { get; set; }

    public virtual DiaSemana? DiaSemana { get; set; }

    public virtual FaseDia? FaseDia { get; set; }

    public virtual Municipio? Municipio { get; set; }

    public virtual SentidoVia? SentidoVia { get; set; }

    public virtual TipoAcidente? TipoAcidente { get; set; }

    public virtual TipoPista? TipoPista { get; set; }

    public virtual TracadoVia? TracadoVia { get; set; }

    public virtual Uf? Uf { get; set; }

    public virtual UsoSolo? UsoSolo { get; set; }
}
