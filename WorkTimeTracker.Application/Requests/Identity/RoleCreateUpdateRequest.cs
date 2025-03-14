using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.Requests.Identity
{
	public class RoleCreateUpdateRequest
	{

		[Required]
		public required string Name { get; set; }

		public string Description { get; set; } = "";

		public bool IsAdmin { get; set; } = false;

	}
}