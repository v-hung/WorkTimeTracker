using MediatR;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Work;

namespace WorkTimeTracker.Application.Features.Projects.Queries
{
	public class GetAllProjectQuery : IRequest<List<ProjectDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllProjectQueryHandler : IRequestHandler<GetAllProjectQuery, List<ProjectDto>>
	{
		private readonly IRepository<Project, int> _repository;

		public GetAllProjectQueryHandler(IRepository<Project, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<ProjectDto>> Handle(GetAllProjectQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<ProjectDto>(v => query.Ids.Contains(v.Id));
		}
	}
}