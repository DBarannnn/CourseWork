using Server.Entity;

namespace Server.Service.Interfaces
{
    public interface IUserService
    {
        public User Create(User user);
        public User GetByEmail(string email);
        public User GetById(int id);


    }
}
