using Microsoft.AspNetCore.Identity;

namespace csharpapi.Models
{
    public class User : Entity
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
            
    }
}
