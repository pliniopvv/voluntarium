using Microsoft.AspNetCore.Identity;

namespace csharpapi.Models
{
    public class User : IdentityUser
    {
        public long Id { get; set; }
    }
}
