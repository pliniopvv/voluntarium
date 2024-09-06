using csharpapi.Models;
using csharpapi.Services;
using Microsoft.AspNetCore.Mvc;

namespace csharpapi.Controllers
{
    public class AuthenticationController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        AuthenticationController(ITokenService tokenService)
        {
            this._tokenService = tokenService;
        }
        [HttpPost("login", Name = "login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> Login(User user)
        {
            var token = await _tokenService.GenerateToken(user);
            if (token == "")
                return Unauthorized();
            return Ok(token);
        }
    }
}
