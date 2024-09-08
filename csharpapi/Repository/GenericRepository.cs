using cppbackend.Repository;
using csharpapi.Models;

namespace csharpapi.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : Entity
    {
        public readonly ContextBase _dbContext;
        public GenericRepository(ContextBase _dbContext)
        {
            this._dbContext = _dbContext;
        }

        public async Task<T> Load(int id)
        {
            return await _dbContext.FindAsync<T>(id);
        }

        public async Task<T> Save(T model)
        {
            await _dbContext.AddAsync<T>(model);
            await _dbContext.SaveChangesAsync();
            return model;
        }

        public async Task<T> Alter(T model)
        {
            if (model.Id < 0) throw new ArgumentException("Id model notfound to alter : " + model.GetType().Name);
            _dbContext.Update(model);
            await _dbContext.SaveChangesAsync();
            return model;
        }

        public async Task<T> Delete(int Id)
        {
            var entity = await _dbContext.FindAsync<T>(Id);
            _dbContext.Remove<T>(entity);
            await _dbContext.SaveChangesAsync();
            _dbContext.Entry<T>(entity).State = Microsoft.EntityFrameworkCore.EntityState.Detached;
            entity.Id = 0;
            return entity;
        }
    }

    public interface IGenericRepository<T> where T : IEntity
    {
        Task<T> Load(int id);
        Task<T> Save(T model);
        Task<T> Alter(T model);
        Task<T> Delete(int Id);
    }
}
