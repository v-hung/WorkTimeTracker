namespace WorkTimeTracker.Application.Requests.Identity;

public class RefreshTokenRequest
{
    public required string RefreshToken { get; set; }
}