using System;

namespace Tyrell.Models
{
    public class Comment
    {
        public string id { get; set; }
        public string postId { get; set; }
        public string text { get; set; }
        public DateTime createdAt { get; set; }
        public string language { get; set; }
    }
}