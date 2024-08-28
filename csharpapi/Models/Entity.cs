namespace csharpapi.Models
{

    public class Entity : IEntity
    {
        public long Id { get; set; }
    }
    public interface IEntity
    {
        public long Id { get; set; }
    }
}
