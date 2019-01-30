using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tyrell.Models
{
    public class Post
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long PostID {get;set;}
        public string Title {get;set;}
        public string AuthorID {get;set;}
        public string Body {get;set;}
        public string CreatedAt {get;set;}

        [NotMapped]
        public string[] Tags {get;set;}
    }
}