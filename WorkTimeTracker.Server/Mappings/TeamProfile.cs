using AutoMapper;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Models.Organization;

namespace WorkTimeTracker.Server.Mappings
{
	public class TeamProfile : Profile
	{
		public TeamProfile()
		{
			CreateMap<Team, TeamMinimalDto>().ReverseMap();
			CreateMap<Team, TeamDto>().ReverseMap();
			CreateMap<Team, TeamFullDto>().ReverseMap();
		}
	}
}