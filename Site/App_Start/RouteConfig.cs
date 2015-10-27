using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Site
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

//            routes.MapRoute("MyRoute", "{action}", new {controller= "Home", action = "Index"});
//            routes.MapRoute("PageRoute", "{action}", new {action = "Page"});
            routes.MapRoute("MyWorks", "MyWorks", new {controller = "Page", action = "MyWorks"});
            routes.MapRoute("Servant", "Servant", new {controller = "Page", action = "Servant"});
            routes.MapRoute("Index", "Index", new {controller = "Home", action = "Index"});
            routes.MapRoute("Empty", "", new {controller = "Home", action = "Index"});
            routes.MapRoute("Gallery", "Gallery", new {controller = "Page", action = "Gallery"});
            routes.MapRoute("Contacts", "Contacts", new { controller = "Page", action = "Contacts" });
            routes.MapRoute("Timetable", "Timetable", new { controller = "Page", action = "Timetable" });
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}