namespace WorkTimeTracker.Application.Interfaces.Messaging
{
	public interface IEmailBackgroundQueue
	{
		void QueueEmail(Func<CancellationToken, Task> emailTask);

		Task<Func<CancellationToken, Task>> DequeueAsync(CancellationToken cancellationToken);
	}
}