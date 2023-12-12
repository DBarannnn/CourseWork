using Server.Configuration;
using Server.Entity;
using Server.Service.Interfaces;

namespace Server.Service.Implementation
{
    public class TodoService : ITodoService
    {
        private readonly DataContext _dataContext;
        public TodoService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public Todo Create(Todo todo)
        {
            _dataContext.Todos.Add(todo);
            todo.Id = _dataContext.SaveChanges();
            return todo; 
        }
        public Todo Update(Todo todo)
        {
            var updated = _dataContext.Todos.First(t => t.Id.Equals(todo.Id));

            updated.Title = todo.Title;
            updated.Description = todo.Description;
            _dataContext.SaveChanges();

            return updated;
        }
        public void Delete(int id)
        {
            var todo = _dataContext.Todos.First(t => t.Id.Equals(id));
            if (todo != null)
            {
                _dataContext.Todos.Remove(todo);
                _dataContext.SaveChanges();
            }
        }
        public Todo? GetById(int id)
        {
            return _dataContext.Todos.First(t => t.Id.Equals(id));
        }
    }
}
