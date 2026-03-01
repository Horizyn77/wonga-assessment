using Shared.DTOs;
using AuthService.Models;

namespace AuthService.Services.Interfaces
{
    public interface IAuthService
    {
        Task<AuthResponse> RegisterAsync(RegisterRequest request);
        Task<AuthResponse> LoginAsync(LoginRequest request);
       
    }
}
