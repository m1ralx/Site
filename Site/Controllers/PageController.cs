using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Site.Controllers
{
    public class PageController : Controller
    {
        //
        // GET: /Page/
        
        public ActionResult MyWorks()
        {
            return View();
            
        }

        public ActionResult Gallery()
        {
            return View();
        }

        public ActionResult Contacts()
        {
            return View();
        }

        public ActionResult Timetable()
        {
            return View();
        }

        public ActionResult Servant()
        {
            return View();
        }

    }
}
