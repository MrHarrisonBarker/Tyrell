using System.Collections.Generic;

namespace Tyrell.Models.Repository
{
    public interface IDifferentIDataRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
    }
}