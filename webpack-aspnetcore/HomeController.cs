using Microsoft.AspNetCore.Mvc;

namespace webpack_aspnetcore
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
