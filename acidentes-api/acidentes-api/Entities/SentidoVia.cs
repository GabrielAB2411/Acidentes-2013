using System;
using System.Collections.Generic;

namespace acidentes_api.Entities;

public partial class SentidoVia
{
    public int Id { get; set; }

    public string Sentido { get; set; } = null!;

    public virtual ICollection<DatatranNormalizado> DatatranNormalizados { get; set; } = new List<DatatranNormalizado>();
}
