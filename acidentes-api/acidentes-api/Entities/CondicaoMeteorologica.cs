using System;
using System.Collections.Generic;

namespace acidentes_api.Entities;

public partial class CondicaoMeteorologica
{
    public int Id { get; set; }

    public string Condicao { get; set; } = null!;

    public virtual ICollection<DatatranNormalizado> DatatranNormalizados { get; set; } = new List<DatatranNormalizado>();
}
