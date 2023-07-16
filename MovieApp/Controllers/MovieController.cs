using Microsoft.AspNetCore.Mvc;
using MovieApp.Repository.Interfaces;
using MovieApp.Repository.Repositories;

namespace MovieApp.Controllers
{
    public class MovieController : Controller
    {
        private readonly IMovieRepository _repository;
        public MovieController(IMovieRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GetAllMovies()
        {
            try
            {
                var movies = _repository.GetAllMovies();
                if(movies != null)
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
