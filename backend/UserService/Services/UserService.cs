using Shared.DTOs;
using UserService.Services.Interfaces;
using UserService.Repositories.Interfaces;

namespace UserService.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;

        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }

        public async Task<UserProfileResponse> GetProfileAsync(Guid userId)
        {
            var user = await _repository.GetByIdAsync(userId);

            if (user == null)
                throw new Exception("User not found");

            return new UserProfileResponse
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email
            };
        }
    }
}
