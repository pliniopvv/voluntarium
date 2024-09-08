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
            ConfigureUser(modelBuilder);

        }

        private void ConfigureUser(ModelBuilder builder)
        {
            builder.Entity<User>(x =>
            {
                x.ToTable("tb_user");
                x.HasKey(u => u.Id);
            });
        }

        public DbSet<csharpapi.Models.User> User { get; set; } = default!;
    }
}
