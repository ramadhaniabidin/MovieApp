using MovieApp.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Repository.Interfaces
{
    public interface ILoginRepository
    {
        public List<LoginModel> GetAllLoginModel();
        public bool CheckAccount (string username, string password);
    }
}
