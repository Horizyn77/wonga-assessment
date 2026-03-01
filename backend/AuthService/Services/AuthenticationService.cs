using Shared.DTOs;
using AuthService.Models;
using AuthService.Repositories.Interfaces;
using AuthService.Services.Interfaces;

namespace AuthService.Services
{
    public class AuthenticationService : IAuthService
    {

        private readonly IUserRepository _repository;

        public AuthenticationService(IUserRepository repository)
        {
            _repository = repository;
        }

        public async Task<AuthResponse> RegisterAsync(RegisterRequest request)
        {
            var existingUser = await _repository.GetByEmailAsync(request.Email);

            if (existingUser != null)
                throw new Exception("Email already exists");

            var user = new User
            {
                Id = Guid.NewGuid(),
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
                CreatedAt = DateTime.UtcNow
            };

            await _repository.AddUserAsync(user);

            return new AuthResponse
            {
                Id = user.Id,
                Email = user.Email,
            };
        }
    }
}
