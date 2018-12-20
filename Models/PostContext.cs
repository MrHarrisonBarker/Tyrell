using Microsoft.EntityFrameworkCore;

namespace Tyrell.Models
{
    public class PostContext : DbContext
    {
        public PostContext(DbContextOptions<PostContext> options) : base(options)
        {
            
        }

        public DbSet<Post> Post { get; set; }
    }
}