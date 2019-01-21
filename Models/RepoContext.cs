using Microsoft.EntityFrameworkCore;

namespace Tyrell.Models
{
    public class RepoContext : DbContext
    {
        public RepoContext ( DbContextOptions<RepoContext> options ) : base(options)
        {
            
        }

        public DbSet<Repo> Repos { get; set; }
    }
}