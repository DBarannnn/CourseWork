using Microsoft.EntityFrameworkCore;
using Server.Enum;

namespace Server.Entity
{
    public class Request
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public Method Method { get; set; }
        public DateTime CreatedAt { get; set; }
        public User Sender { get; set; }
      
    }
}
