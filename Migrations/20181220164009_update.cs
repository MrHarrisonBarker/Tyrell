using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Tyrell.Migrations
{
    public partial class update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Post",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Post",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "Body",
                table: "Post",
                newName: "replyUser");

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "Post",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "createdAt",
                table: "Post",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "isReply",
                table: "Post",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "language",
                table: "Post",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "numOfRepost",
                table: "Post",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Comment",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    postId = table.Column<string>(nullable: true),
                    text = table.Column<string>(nullable: true),
                    createdAt = table.Column<DateTime>(nullable: false),
                    language = table.Column<string>(nullable: true),
                    Postid = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comment", x => x.id);
                    table.ForeignKey(
                        name: "FK_Comment_Post_Postid",
                        column: x => x.Postid,
                        principalTable: "Post",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comment_Postid",
                table: "Comment",
                column: "Postid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comment");

            migrationBuilder.DropColumn(
                name: "Text",
                table: "Post");

            migrationBuilder.DropColumn(
                name: "createdAt",
                table: "Post");

            migrationBuilder.DropColumn(
                name: "isReply",
                table: "Post");

            migrationBuilder.DropColumn(
                name: "language",
                table: "Post");

            migrationBuilder.DropColumn(
                name: "numOfRepost",
                table: "Post");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Post",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Post",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "replyUser",
                table: "Post",
                newName: "Body");
        }
    }
}
