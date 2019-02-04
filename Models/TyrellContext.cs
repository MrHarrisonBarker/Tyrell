using Microsoft.EntityFrameworkCore;

namespace Tyrell.Models
{
    public class TyrellContext : DbContext
    {
        public TyrellContext(DbContextOptions<TyrellContext> options)
            : base(options)
        {
        }
 
        public DbSet<Post> Posts { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<User> Users { get; set; }
    }
}