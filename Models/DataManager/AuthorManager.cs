using System.Collections.Generic;
using System.Linq;
using Tyrell.Models.Repository;

namespace Tyrell.Models.DataManager
{
    public class AuthorManager : IDifferentIDataRepository<Author>
    {
        private readonly TyrellContext _tyrellContext;
        
        public AuthorManager(TyrellContext context)
        {
            _tyrellContext = context;
        }

        public IEnumerable<Author> GetAll()
        {
            return _tyrellContext.Authors.ToList();
        }
        
        public Author Get(long id)
        {
            return _tyrellContext.Authors.FirstOrDefault(author => author.AuthorId == id);
        }

        public void Add(Author entity)
        {
            _tyrellContext.Authors.Add(entity);
            _tyrellContext.SaveChanges();
        }

        public void Update(Author author, Author entity)
        {
            author.FirstName = entity.FirstName;
            author.LastName = entity.LastName;

            _tyrellContext.SaveChanges();
        }

        public void Delete(Author entity)
        {
            _tyrellContext.Authors.Remove(entity);
            _tyrellContext.SaveChanges();
        }
    }
}