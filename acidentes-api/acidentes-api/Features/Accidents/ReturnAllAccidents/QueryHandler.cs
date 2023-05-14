using acidentes_api.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace acidentes_api.Features.Accidents.ReturnAllAccidents
{
    public partial class ReturnAllAccidents
    {
        public class QueryHandler
        {
            private readonly Acidentes2013Context _context;

            public QueryHandler(Acidentes2013Context context)
            {
                _context = context;
            }

            public IEnumerable<dynamic> Handle(int page)
            {
                int dataLength = _context.DatatranNormalizados.Length();

                int accidentsWithFatalVictims = _context.DatatranNormalizados
                    .AsNoTracking()
                    .Where(d => d.ClassificacaoAcidenteId == 17)
                    .ToList()
                    .Length();

                int accidentsWithInjuredVictims = _context.DatatranNormalizados
                    .AsNoTracking()
                    .Where(d => d.ClassificacaoAcidenteId == 18)
                    .ToList()
                    .Length();

                int accidentsWithoutVictims = _context.DatatranNormalizados
                    .AsNoTracking()
                    .Where(d => d.ClassificacaoAcidenteId == 20)
                    .ToList()
                    .Length();


                var accidents = _context.DatatranNormalizados
                   .AsNoTracking()
                   .Skip((page - 1) * 10)
                   .Take(10)
                   .Include(c => c.CausaAcidente)
                   .Include(c => c.TipoAcidente)
                   .Include(c => c.Uf)
                   .Include(c => c.ClassificacaoAcidente)
                   .Select(d => new
                   {
                       d.Id,
                       d.Mortos,
                       d.TipoAcidente,
                       d.Uf,
                       d.CausaAcidente,
                       d.ClassificacaoAcidente,
                       d.DataInversa,
                       d.Feridos,
                   })
                   .OrderBy(d => d.Id)
                   .ToList();

                yield return new { 
                    accidents,
                    size = dataLength,
                    accidentsWithFatalVictimsCount = accidentsWithFatalVictims,
                    accidentsWithInjuredVictimsCount = accidentsWithInjuredVictims,
                    accidentsWithoutVictimsCount = accidentsWithoutVictims
                }; 
            }
        }
    }
}
