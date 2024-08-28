using csharpapi.Models;
using csharpapi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace csharpapi.Controllers
{
    public class GenericController<T> : Controller where T : Entity
    {
        private readonly IGenericService<T> service;
        public GenericController (IGenericService<T> service)
        {
            this.service = service;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<T>> load([FromHeader] int id)
        {
            return View();
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<T>> save(T model)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        [HttpPut]
        [Authorize]
        public async Task<ActionResult<T>> alter(int id)
        {
            return View();
        }

        public ActionResult Delete(int id)
        {
            return View();
        }

        [HttpDelete]
        [Authorize]
        public async Task<ActionResult<T>> delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
