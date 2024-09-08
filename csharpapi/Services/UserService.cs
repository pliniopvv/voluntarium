namespace csharpapi.Services
{
    public class UserService : GenericService<Models.User>, IUserService
    {
        public UserService(Repository.IGenericRepository<Models.User> repository) : base(repository)
        {
        }
    }
    public interface IUserService : IGenericService<Models.User>
    {
    }

}
