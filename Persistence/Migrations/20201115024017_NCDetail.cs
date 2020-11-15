using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class NCDetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Activities",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "NCDetails",
                columns: table => new
                {
                    NCId = table.Column<Guid>(nullable: false),
                    Line = table.Column<int>(nullable: false),
                    Partial = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NCDetails", x => new { x.NCId, x.Line });
                    table.ForeignKey(
                        name: "FK_NCDetails_NCs_NCId",
                        column: x => x.NCId,
                        principalTable: "NCs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NCDetails");

            migrationBuilder.AlterColumn<string>(
                name: "Date",
                table: "Activities",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(DateTime));
        }
    }
}
