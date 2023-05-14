using System;
using System.Collections.Generic;

namespace acidentes_api.Entities;

public partial class TipoAcidente
{
    public int Id { get; set; }

    public string Tipo { get; set; } = null!;

    public virtual ICollection<DatatranNormalizado> DatatranNormalizados { get; set; } = new List<DatatranNormalizado>();
}
