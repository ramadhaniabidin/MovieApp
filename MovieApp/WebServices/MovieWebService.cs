
using Microsoft.AspNetCore.Mvc;
using MovieApp.Repository.Interfaces;

namespace MovieApp.WebServices
{
    public class MovieWebService
    {
        private readonly IMovieRepository _movieRepository;
        public MovieWebService(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }

        public IActionResult GetAllMovies()
        {
            try
            {
                var movies = _movieRepository.GetAllMovies();
                if (movies != null)
                {
                    var result = new
                    {
                        ProcessSuccess = true,
                        InfoMessage = "OK",
                        data = movies
                    };
                    return new JsonResult(result);
                }

                else
                {
                    var result = new
                    {
                        ProcessSuccess = false,
                        InfoMessage = "movies are null"
                    };
                    return new JsonResult(result);
                }
            }

            catch (Exception ex)
            {
                var result = new
                {
                    ProcessSuccess = false,
                    InfoMessage = ex.Message
                };
                return new JsonResult(result);
            }
        }
    }
}
