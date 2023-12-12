using Microsoft.AspNetCore.Mvc;
using Server.Dto;
using Server.Entity;
using Server.Service.Implementation;
using Server.Service.Interfaces;

namespace Server.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ITodoService _todoService;
        public TodoController(IUserService userService, ITodoService todoService)
        {
            _userService = userService;
            _todoService = todoService;
        }

        
    }
}
