using csharpapi.Models;
using csharpapi.Repository;

namespace csharpapi.Services
{
    public class GenericService<T> : IGenericService<T> where T : Entity
    {
        private readonly IGenericRepository<T> repository;
        public GenericService(IGenericRepository<T> repository)
        {
            this.repository = repository;
        }

        public async Task<T> Load(int id)
        {
            return await repository.Load(id);
        }

        public async Task<T> Save(T model)
        {
            return await repository.Save(model);
        }

        public async Task<T> Alter(T model)
        {
            return await repository.Alter(model);
        }

        public async Task<T> Delete(int Id)
        {
            return await repository.Delete(Id);
        }

    }

    public interface IGenericService<T> where T : IEntity
    {
        Task<T> Load(int id);
        Task<T> Save(T model);
        Task<T> Alter(T model);
        Task<T> Delete(int Id);
    }
}
