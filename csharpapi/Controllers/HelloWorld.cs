using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace cppbackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorld : ControllerBase
    {
        private readonly ILogger<HelloWorld> _logger;
        public HelloWorld(ILogger<HelloWorld> logger)
        {
            _logger = logger;
        }

        [HttpGet("anon")]
        public ActionResult<string> HwAnon()
        {
            return Ok("Hello Anonymous!");
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> HwAuth()
        {
            return Ok("Hello Authentication!");
        }

    }
}
