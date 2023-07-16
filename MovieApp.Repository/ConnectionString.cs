using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Repository
{
    public class ConnectionString
    {
        public string Connection(IConfiguration configuration)
        {
            string? conn = configuration.GetConnectionString("MvcMovie");
            return conn;
        }
    }
}
