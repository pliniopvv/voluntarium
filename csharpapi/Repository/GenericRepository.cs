using cppbackend.Repository;
using csharpapi.Migrations;
using csharpapi.Models;

namespace csharpapi.Repository
{
    public class GenericRepository<T> where T : Entity
    {
        private readonly ContextBase dbContext;
        public GenericRepository(ContextBase dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<T> Load(int id)
        {
            return await dbContext.FindAsync<T>(id);
        }

        public async Task<T> Save(T model)
        {
            await dbContext.AddAsync<T>(model);
            await dbContext.SaveChangesAsync();
            return model;
        }

        public async Task<T> Alter(T model)
        {
            if (model.Id < 0) throw new ArgumentException("Id model notfound to alter : " + model.GetType().Name);
            dbContext.Update(model);
            await dbContext.SaveChangesAsync();
            return model;
        }

        public async Task<T> Delete(int Id)
        {
            var entity = await dbContext.FindAsync<T>(Id);
            dbContext.Remove<T>(entity);
            await dbContext.SaveChangesAsync();
            dbContext.Entry<T>(entity).State = Microsoft.EntityFrameworkCore.EntityState.Detached;
            entity.Id = 0;
            return entity;
        }
    }

    public interface IGenericRepository<T> where T : IEntity
    {

    }
}
