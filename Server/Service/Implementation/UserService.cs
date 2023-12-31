﻿using Server.Configuration;
using Server.Entity;
using Server.Service.Interfaces;

namespace Server.Service.Implementation
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        private readonly JwtService _jwtService;
  
        public UserService(DataContext dataContext, JwtService jwtService)
        {
            _context = dataContext;
            _jwtService = jwtService;

        }

        public User Create(User user)
        {
           _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public User GetByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

        

    }
}
