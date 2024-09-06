using csharpapi.Models;
using Microsoft.EntityFrameworkCore;

namespace cppbackend.Repository
{
    public class ContextBase : DbContext
    {
        public ContextBase(DbContextOptions<ContextBase> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<csharpapi.Models.User> User { get; set; } = default!;
    }
}
