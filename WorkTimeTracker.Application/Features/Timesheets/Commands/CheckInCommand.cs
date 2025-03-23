using System.Net;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Responses.Time;

namespace WorkTimeTracker.Application.Features.Timesheets.Commands
{
	public class CheckInCommand : IRequest<TimesheetResponse<TimesheetDto>>
	{

	}

	public class CheckInCommandHandler : IRequestHandler<CheckInCommand, TimesheetResponse<TimesheetDto>>
	{
		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;

		public CheckInCommandHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetResponse<TimesheetDto>> Handle(CheckInCommand command, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			var timesheet = await _timesheetRepository.PerformCheckIn(_currentUserService.UserId);

			return new TimesheetResponse<TimesheetDto>
			{
				Timesheet = timesheet
			};

		}

	}
}