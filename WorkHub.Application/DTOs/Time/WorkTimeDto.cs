using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Constants.Timesheet;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Application.DTOs.Time
{
	public class WorkTimeDto : IEntity<int>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public string Title { get; set; } = string.Empty;

		[Required]
		public TimeSpan StartTimeMorning { get; set; } = TimesheetConst.START_TIME_MORNING;

		[Required]
		public TimeSpan EndTimeMorning { get; set; } = TimesheetConst.END_TIME_MORNING;

		[Required]
		public TimeSpan StartTimeAfternoon { get; set; } = TimesheetConst.START_TIME_AFTERNOON;

		[Required]
		public TimeSpan EndTimeAfternoon { get; set; } = TimesheetConst.END_TIME_AFTERNOON;

		[Required]
		public int AllowedLateMinutes { get; set; } = TimesheetConst.ALLOWED_LATE_MINUTES;
	}
}