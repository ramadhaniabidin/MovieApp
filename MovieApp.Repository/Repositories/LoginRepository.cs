using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using MovieApp.Models.Models;
using MovieApp.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Repository.Repositories
{
    
    public class LoginRepository: ILoginRepository
    {
        private readonly string? connection;
        public LoginRepository(IConfiguration configuration)
        {
            connection = configuration.GetConnectionString("MvcMovie");
        }

        public bool CheckAccount(string username, string password)
        {
            var con = new SqlConnection(connection);
            con.Open();
            var query = @"SELECT * FROM Akun a WHERE a.userName = @username AND a.password = @password";

            var account = con.QueryFirst<LoginModel>(query, new {username, password});
            
            if(account != null)
            {
                return true;
            }

            else { return false; }
        }

        public List<LoginModel> GetAllLoginModel()
        {
            var con = new SqlConnection(connection);
            con.Open();
            var query = "SELECT * FROM Akun";
            var accounts = con.Query<LoginModel>(query).ToList();
            return accounts;
        }
    }
}
