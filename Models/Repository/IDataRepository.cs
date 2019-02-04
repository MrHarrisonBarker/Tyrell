using System.Collections.Generic;

namespace Tyrell.Models.Repository
{
    public interface IDataRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(long id);
        void Add(TEntity entity);
        void Update(TEntity obj, TEntity entity);
        void Delete(TEntity obj);
    }
}