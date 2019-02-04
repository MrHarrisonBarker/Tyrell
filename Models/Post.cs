using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tyrell.Models
{
    public class Post
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long PostId {get;set;}
        public string Title {get;set;}
        public string Body {get;set;}
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt {get;set;}
        public bool IsVisible { get; set; }
        
        public long AuthorId { get; set; }
        public Author Author { get; set; }
        
//        public ICollection<string> Tags { get; set; }
    }
}