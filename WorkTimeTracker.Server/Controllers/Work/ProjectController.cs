using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Features.Projects.Commands;
using WorkTimeTracker.Application.Features.Projects.Queries;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;

namespace WorkTimeTracker.Server.Controllers.Work
{
	[Route("api/projects")]
	public class ProjectController : BaseApiController<ProjectController>
	{
		[HttpGet("all")]
		public async Task<ActionResult<List<ProjectDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllProjectQuery { Ids = ids });

			return Ok(data);
		}

		[HttpGet]
		public async Task<ActionResult<Paginated<ProjectDto>>> Search([FromQuery] PagedRequest request)
		{
			var data = await _mediator.Send(new SearchProjectQuery { Request = request });

			return Ok(data);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<ProjectDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetProjectByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		public async Task<ActionResult<ProjectDto>> Create(CreateProjectCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<ProjectDto>> Update(int id, CreateProjectCommand request)
		{
			var data = await _mediator.Send(new UpdateProjectCommand { Id = id, Request = request });

			return Ok(data);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteProjectCommand { Id = id });

			return Ok();
		}
	}
}