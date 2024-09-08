using csharpapi.Models;
using csharpapi.Services;
using Microsoft.AspNetCore.Mvc;

namespace csharpapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : GenericController<User>
    {
        private readonly IGenericService<User> service;
        public UserController(IGenericService<User> service) : base(service)
        {
            this.service = service;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register([FromBody] User model)
        {
            model.Role = "User";
            return Ok(await service.Save(model));
        }
    }
}
