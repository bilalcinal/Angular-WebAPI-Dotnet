using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data;

public class FullStackDbContext : DbContext
{
    public FullStackDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Employee> Employees { get; set; }
}
