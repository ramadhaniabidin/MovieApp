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
using System.Xml.Linq;

namespace MovieApp.Repository.Repositories
{
    public class MovieRepository: IMovieRepository
    {
        private readonly string? connection;
        public MovieRepository(IConfiguration configuration)
        {
            connection = configuration.GetConnectionString("MvcMovie");
        }

        public List<MovieModel> GetAllMovies()
        {
            var con = new SqlConnection(connection);
            con.Open();
            var query = "SELECT * FROM Movie";
            return con.Query<MovieModel>(query).ToList();
        }
    }
}
