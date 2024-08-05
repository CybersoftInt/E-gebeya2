using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using E_gebeya.Models;

namespace E_gebeya.Models  
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet
       
    }
}
