﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkHub.Infrastructure.Migrations
{
	/// <inheritdoc />
	public partial class Init4 : Migration
	{
		/// <inheritdoc />
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.AlterColumn<DateTime>(
					name: "StartTime",
					table: "Timesheets",
					type: "datetime(6)",
					nullable: true,
					oldClrType: typeof(DateTime),
					oldType: "datetime(6)");
		}

		/// <inheritdoc />
		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.AlterColumn<DateTime>(
					name: "StartTime",
					table: "Timesheets",
					type: "datetime(6)",
					nullable: false,
					defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
					oldClrType: typeof(DateTime),
					oldType: "datetime(6)",
					oldNullable: true);
		}
	}
}
