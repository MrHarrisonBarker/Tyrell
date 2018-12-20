using System;

namespace Tyrell.Models
{
    public class Post
    {    
        public string id { get; set; }
        public string Text { get; set;  }
        public bool isVisible { get; set; }
        public bool isReply { get; set; }
        public string replyUser { get; set; }
        public int numOfRepost { get; set; }
        public DateTime createdAt { get; set; }
        public string userId { get; set; }
        public string language { get; set; }
        public Comment[] comments { get; set; }
    }
}