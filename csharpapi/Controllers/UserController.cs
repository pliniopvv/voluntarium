using csharpapi.Models;
using csharpapi.Services;
using Microsoft.AspNetCore.Mvc;

namespace csharpapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : GenericController<User>
    {
        public UserController(IGenericService<User> service) : base(service)
        {
        }
    }
}
