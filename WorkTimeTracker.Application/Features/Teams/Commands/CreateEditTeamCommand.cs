using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Features.Teams.Commands
{
	public class CreateEditTeamCommand : IRequest<TeamDto>
	{
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public int TotalMembers { get; set; } = 0;

		public int CompletedProjects { get; set; } = 0;

		public int ActiveProjects { get; set; } = 0;

		// Navigation properties

		public Guid? ManagerId { get; set; }

		public IList<Guid> MemberIds { get; set; } = [];

		public List<int> ProjectIds { get; set; } = [];
	}

	public class CreateEditTeamCommandHandler : IRequestHandler<CreateEditTeamCommand, TeamDto>
	{

		private readonly IRepository<Team, int> _repositoryService;

		public CreateEditTeamCommandHandler(IRepository<Team, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<TeamDto> Handle(CreateEditTeamCommand request, CancellationToken cancellationToken)
		{
			return await _repositoryService.CreateOrUpdateAsync<TeamDto, int>(request.Id, request,
			[
				async t => await _repositoryService.UpdateRelatedEntitiesAsync(t, t => t.Members, request.MemberIds, request.Id),
				async t => await _repositoryService.UpdateRelatedEntitiesAsync(t, t => t.Projects, request.ProjectIds, request.Id)
			]);
		}
	}
}