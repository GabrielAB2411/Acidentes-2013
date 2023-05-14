using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using acidentes_api.Features.Accidents.ReturnAllAccidents;

namespace acidentes_api.Controllers
{
    [Route("accidents")]
    [ApiController]
    public class AccidentsController : ControllerBase
    {
        [HttpGet("{page}")]
        public IActionResult GetAccidents(
            [FromServices] ReturnAllAccidents.QueryHandler handler,
            [FromRoute] int page = 1)
        {
            var result = handler.Handle(page);
            return result.Any() ? Ok(result) : NoContent();
        }
    }
}
