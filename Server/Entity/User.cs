using Microsoft.EntityFrameworkCore;

namespace Server.Entity
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public List<Request>? Request { get; set; }

    }
}
