using System;
using System.Collections.Generic;

namespace acidentes_api.Entities;

public partial class TracadoVia
{
    public int Id { get; set; }

    public string Tracado { get; set; } = null!;

    public virtual ICollection<DatatranNormalizado> DatatranNormalizados { get; set; } = new List<DatatranNormalizado>();
}
