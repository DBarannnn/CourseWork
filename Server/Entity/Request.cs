using Microsoft.EntityFrameworkCore;

namespace Server.Entity
{
    public class Request : DbContext
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }

        public User Sender { get; set; }
    }
}
