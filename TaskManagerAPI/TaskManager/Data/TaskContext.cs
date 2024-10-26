using Microsoft.EntityFrameworkCore;
using TaskManager.Entities;

namespace TaskManager.Data
{
    public class TaskContext:DbContext
    {
        public TaskContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TaskItem> Tasks { get; set; } 
        public DbSet<User> Users { get; set; }
        
    }
}
