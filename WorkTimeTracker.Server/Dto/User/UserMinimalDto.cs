using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Models.Audit;
using WorkTimeTracker.Server.Models.Enums;

namespace WorkTimeTracker.Server.Dto.User
{
	public class UserMinimalDto : IEntity<Guid>
	{
		[Required]
		public required Guid Id { get; set; }

		[Required]
		public string? Email { get; set; }

		[Required]
		public string? FullName { get; set; }

		public string? PhoneNumber { get; set; }

		public string? Image { get; set; }

		[Required]
		public required UserPosition UserPosition { get; set; }

		[Required]
		public UserStatus UserStatus { get; set; } = UserStatus.ACTIVE;

	}
}