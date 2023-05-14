using System;
using System.Collections.Generic;

namespace acidentes_api.Entities;

public partial class DatatranOriginal
{
    public string? Id { get; set; }

    public string? DataInversa { get; set; }

    public string? DiaSemana { get; set; }

    public string? Horario { get; set; }

    public string? Uf { get; set; }

    public string? Br { get; set; }

    public string? Km { get; set; }

    public string? Municipio { get; set; }

    public string? CausaAcidente { get; set; }

    public string? TipoAcidente { get; set; }

    public string? ClassificacaoAcidente { get; set; }

    public string? FaseDia { get; set; }

    public string? SentidoVia { get; set; }

    public string? CondicaoMetereologica { get; set; }

    public string? TipoPista { get; set; }

    public string? TracadoVia { get; set; }

    public string? UsoSolo { get; set; }

    public string? Ano { get; set; }

    public string? Pessoas { get; set; }

    public string? Mortos { get; set; }

    public string? FeridosLeves { get; set; }

    public string? FeridosGraves { get; set; }

    public string? Ilesos { get; set; }

    public string? Ignorados { get; set; }

    public string? Feridos { get; set; }

    public string? Veiculos { get; set; }
}
