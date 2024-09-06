using csharpapi.Models;
using csharpapi.Repository;
using Microsoft.EntityFrameworkCore.SqlServer.Update.Internal;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace csharpapi.Services
{

    public class TokenService: ITokenService
    {
        private readonly IConfiguration _configuration;
        private readonly IUserRepository repository;

        TokenService(IConfiguration configuration, IUserRepository repository)
        {
            this._configuration = configuration;
            this.repository = repository;
        }

        public async Task<string> GenerateToken(User login)
        {
            var userDb = await this.repository.GetByUsername(login.Username);
            if (userDb.Password != login.Password)
                return String.Empty;

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"] ?? string.Empty));
            //var issuer = _configuration["Jwt:Issuer"];
            //var audience = _configuration["Jwt:Audience"];

            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokenOptions = new JwtSecurityToken(
                //issuer: issuer,
                //audience: audience,
                claims: new []
                {
                    new Claim(type: ClaimTypes.Name, userDb.Username),
                    new Claim(type: ClaimTypes.Role, userDb.Role)
                },
                expires: DateTime.Now.AddHours(2),
                signingCredentials: signinCredentials
                );

            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return token;
        }
    }

    public interface ITokenService
    {
        public Task<string> GenerateToken(User user);
    }
}
