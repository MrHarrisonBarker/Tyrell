using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tyrell.Models
{
    public class Author
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long AuthorId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
    }
}