using cppbackend.Repository;
using csharpapi.Models;
using Microsoft.EntityFrameworkCore;

namespace csharpapi.Repository
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(ContextBase dbContext) : base(dbContext)
        {
        }
        public async Task<User?> GetByUsername(string username)
        {
            return await (from user in _dbContext.Set<User>()
                          where user.Username == username
                          select user)
                          .AsNoTracking()
                          .FirstOrDefaultAsync();
        }
    }

    public interface IUserRepository : IGenericRepository<User>
    {
        Task<User> GetByUsername(string username);
    }
}
