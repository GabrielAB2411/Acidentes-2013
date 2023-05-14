using System;
using System.Collections.Generic;

namespace acidentes_api.Entities;

public partial class Municipio
{
    public int Id { get; set; }

    public string Municipio1 { get; set; } = null!;

    public virtual ICollection<DatatranNormalizado> DatatranNormalizados { get; set; } = new List<DatatranNormalizado>();
}
