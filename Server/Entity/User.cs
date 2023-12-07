using Microsoft.EntityFrameworkCore;
using Server.Enum;

namespace Server.Entity
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public Role Role { get; set; }
        public List<Request>? Requests { get; set; }

    }
}
