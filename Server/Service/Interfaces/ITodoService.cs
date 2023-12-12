using Server.Configuration;
using Server.Entity;

namespace Server.Service.Interfaces
{
    public interface ITodoService
    {
        public Todo Create(Todo todo);
        public Todo Update(Todo todo);
        public void Delete(int id);
        public Todo GetById(int id);
        
    }
}
