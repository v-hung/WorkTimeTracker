using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Features.Teams.Commands
{
	public class DeleteTeamCommand : IRequest<int>
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteTeamCommandHandler : IRequestHandler<DeleteTeamCommand, int>
	{
		private readonly IRepository<Team, int> _repositoryService;

		public DeleteTeamCommandHandler(IRepository<Team, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<int> Handle(DeleteTeamCommand request, CancellationToken cancellationToken)
		{
			await _repositoryService.DeleteAsync(request.Id);

			return request.Id;
		}
	}
}