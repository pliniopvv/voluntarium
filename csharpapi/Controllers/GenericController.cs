using csharpapi.Models;
using csharpapi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace csharpapi.Controllers
{
    public class GenericController<T> : ControllerBase where T : Entity
    {
        private readonly IGenericService<T> service;
        public GenericController (IGenericService<T> service)
        {
            this.service = service;
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<T>> load(int id)
        {
            return Ok(await this.service.Load(id));
        }

        [HttpPost()]
        [Authorize]
        public async Task<ActionResult<T>> save(T model)
        {
            return Ok(await this.service.Save(model));
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<T>> alter(int id, [FromBody] T model)
        {
            model.Id = id;
            return Ok(await this.service.Alter(model));
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<T>> delete(int id)
        {
            return await this.service.Delete(id);
        }
    }
}
