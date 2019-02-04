using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Tyrell.Models;
using Tyrell.Models.Repository;

namespace Tyrell.Controllers
{
    [Route("api/post")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly IDataRepository<Post> _dataRepository;

        public PostController(IDataRepository<Post> dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Post> posts = _dataRepository.GetAll();
            return Ok(posts);
        }

        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(long id)
        {
            Post post = _dataRepository.Get(id);

            if (post == null)
            {
                return NotFound("The Post record couldn't be found.");
            }

            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Post post)
        {
            if (post == null)
            {
                return BadRequest("Post is null.");
            }

            _dataRepository.Add(post);
            return CreatedAtRoute(
                "Get",
                new {Id = post.PostId},
                post);
        }

        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Post post)
        {
            if (post == null)
            {
                return BadRequest("Post is null.");
            }

            Post postToUpdate = _dataRepository.Get(id);
            if (postToUpdate == null)
            {
                return NotFound("The Post record couldn't be found.");
            }

            _dataRepository.Update(postToUpdate, post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Post post = _dataRepository.Get(id);
            if (post == null)
            {
                return NotFound("The Post record couldn't be found.");
            }

            _dataRepository.Delete(post);
            return NoContent();
        }
    }
}