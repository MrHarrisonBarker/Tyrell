using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Tyrell.Models;
using Tyrell.Models.Repository;

namespace Tyrell.Controllers
{
    [Route("api/author")]
    [ApiController]
    public class AuthorController : Controller
    {
        private readonly IDifferentIDataRepository<Author> _dataRepository;

        public AuthorController(IDifferentIDataRepository<Author> dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            IEnumerable<Author> authors = _dataRepository.GetAll();
            return Ok(authors);
        }

//        [HttpGet("{id}", Name = "Get")]
//        public IActionResult Get(long id)
//        {
//            Author author = _dataRepository.Get(id);
//
//            if (author == null)
//            {
//                return NotFound("The Author record couldn't be found.");
//            }
//
//            return Ok(author);
//        }
    }
}