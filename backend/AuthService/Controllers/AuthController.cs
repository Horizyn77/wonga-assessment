using Microsoft.AspNetCore.Mvc;
using AuthService.Services.Interfaces;
using Shared.DTOs;


namespace AuthService.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _service;

    public AuthController(IAuthService service)
    {
        _service = service;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        try 
        {
            var user = await _service.RegisterAsync(request);
            return Ok(user);
        }
        catch (Exception ex)
        {
            return Conflict(new
            {
                message = ex.Message
            });
        }

    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var result = await _service.LoginAsync(request);
        return Ok(result);
    }
}
