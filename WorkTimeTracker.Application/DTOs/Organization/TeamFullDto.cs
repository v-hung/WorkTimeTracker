using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Application.DTOs.Work;

namespace WorkTimeTracker.Application.DTOs.Organization
{
	public class TeamFullDto : TeamDto
	{

		public IList<UserMinimalDto> Members { get; set; } = [];

		public List<ProjectMinimalDto> Projects { get; set; } = [];

	}
}