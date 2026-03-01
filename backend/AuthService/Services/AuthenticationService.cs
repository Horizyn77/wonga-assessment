using Shared.DTOs;
using AuthService.Models;
using AuthService.Repositories.Interfaces;
using AuthService.Services.Interfaces;
using AuthService.Services.Token;

namespace AuthService.Services
{
    public class AuthenticationService : IAuthService
    {

        private readonly IUserRepository _repository;
        private readonly JwtTokenService _tokenService;

        public AuthenticationService(IUserRepository repository, JwtTokenService tokenService)
        {
            _repository = repository;
            _tokenService = tokenService;
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

        public async Task<AuthResponse> LoginAsync(LoginRequest request)
        {
            var user = await _repository.GetByEmailAsync(request.Email);

            if (user == null)
                throw new Exception("Invalid email or password");

            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash);

            if (!isPasswordValid)
                throw new Exception("Invalid email or password");

            string token = _tokenService.GenerateToken(user);

            return new AuthResponse
            {
                Id = user.Id,
                Email = user.Email,
                Token = token
            };
        }
    }
}
