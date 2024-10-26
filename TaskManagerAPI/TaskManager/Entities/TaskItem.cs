using System.ComponentModel.DataAnnotations;

namespace TaskManager.Entities
{
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public string Priority { get; set; }
    }
}
