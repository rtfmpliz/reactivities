using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AduditNC : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NCs",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    NCStatement = table.Column<string>(nullable: true),
                    RequirementClauseNo = table.Column<string>(nullable: true),
                    RequirementDoc = table.Column<string>(nullable: true),
                    ObjEvidence = table.Column<string>(nullable: true),
                    Justify = table.Column<string>(nullable: true),
                    DocReference = table.Column<string>(nullable: true),
                    DocRevDate = table.Column<string>(nullable: true),
                    DocRevNo = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NCs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NCs");
        }
    }
}
