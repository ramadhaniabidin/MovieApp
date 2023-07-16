﻿using MovieApp.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Repository.Interfaces
{
    public interface IMovieRepository
    {
        public List<MovieModel> GetAllMovies();
    }
}
