using Shared.DTOs;

namespace UserService.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserProfileResponse> GetProfileAsync(Guid userId);
    }
}
