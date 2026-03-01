namespace Shared.DTOs
{
    public class AuthResponse
    {
        public Guid? Id { get; set; }

        public string? Email { get; set; }

        public string? Token { get; set; }
    }
}
