using System;
using System.Collections.Generic;
using System.Linq;
using Tyrell.Models.Repository;

namespace Tyrell.Models.DataManager
{
    public class PostManager : IDataRepository<Post>
    {
        private readonly TyrellContext _tyrellContext;

        public PostManager(TyrellContext context)
        {
            _tyrellContext = context;
        }

        public IEnumerable<Post> GetAll()
        {
            var posts = _tyrellContext.Posts.ToList();
            foreach (var post in posts)
            {
                post.Author = _tyrellContext.Authors.FirstOrDefault(author => author.AuthorId == post.AuthorId);
            }
            Console.WriteLine(posts);
            return posts;
        }

        public Post Get(long id)
        {
            var justPost = _tyrellContext.Posts.FirstOrDefault(post => post.PostId == id);
            justPost.Author = _tyrellContext.Authors.FirstOrDefault(author => justPost.AuthorId == author.AuthorId);
            return justPost;
        }

        public void Add(Post entity)
        {
            _tyrellContext.Posts.Add(entity);
            _tyrellContext.SaveChanges();
        }

        public void Update(Post post, Post entity)
        {
            post.Title = entity.Body;
            post.Body = entity.Body;

            _tyrellContext.SaveChanges();
        }

        public void Delete(Post entity)
        {
            _tyrellContext.Posts.Remove(entity);
            _tyrellContext.SaveChanges();
        }
    }
}