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
                int dataCount = _context.DatatranNormalizados.Count();

                int accidentsWithFatalVictims = _context.DatatranNormalizados
                    .Where(d => d.ClassificacaoAcidente.Classificacao == "Com Vítimas Fatais")
                    .Count();


                int accidentsWithInjuredVictims = _context.DatatranNormalizados
                    .Where(d => d.ClassificacaoAcidente.Classificacao == "Com Vítimas Feridas")
                    .Count();

                int accidentsWithoutVictims = _context.DatatranNormalizados
                    .Where(d => d.ClassificacaoAcidente.Classificacao == "Sem Vítimas")
                    .Count();


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
                    size = dataCount,
                    accidentsWithFatalVictimsCount = accidentsWithFatalVictims,
                    accidentsWithInjuredVictimsCount = accidentsWithInjuredVictims,
                    accidentsWithoutVictimsCount = accidentsWithoutVictims
                }; 
            }
        }
    }
}
