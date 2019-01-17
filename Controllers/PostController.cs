using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tyrell.Models;

namespace Tyrell.Controllers
{
    [EnableCors("CorsPol")]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly PostContext _context;

        public PostController(PostContext context)
        {
            _context = context;
        }
        
        // GET: api/Post
        [HttpGet]
        public IEnumerable<Post> GetPosts()
        {
            return _context.Post.ToList();
        }
        
        // GET: api/Post/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = await _context.Post.SingleOrDefaultAsync(d => d.id == id);

            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }
        
        // PUT: api/posts/1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPost([FromRoute] int id, [FromBody] Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != post.id)
            {
                return BadRequest();
            }

            _context.Entry(post).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
        
        // POST: api/posts
        [HttpPost]
        public async Task<IActionResult> NewPost([FromBody] Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Post.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPost", new {id = post.id}, post);
        }            
        
        // DELETE: api/posts/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = await _context.Post.SingleOrDefaultAsync(d => d.id == id);
            if (post == null)
            {
                return NotFound();
            }

            _context.Post.Remove(post);
            await _context.SaveChangesAsync();

            return Ok(post);
        }

        private bool PostExists(int id)
        {
            return _context.Post.Any(d => d.id == id);
        }
    }
}