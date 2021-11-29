using MVCAppDataLearning.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataAccessLayer.BusinessLogic;

namespace MVCAppDataLearning.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public void CreateEmployee(string firstName, string lastName, string emailAddress)
        {
            EmployeeGen.CreateEmployee(firstName, lastName, emailAddress);
        }

        [HttpGet]
        public JsonResult ReadEmployees()
        {
            var data = EmployeeGen.ReadAllEmployees();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void UpdateEmployee(int employeeId, string firstName, string lastName, string emailAddress)
        {
            EmployeeGen.UpdateEmployee(employeeId, firstName, lastName, emailAddress);
        }

        [HttpPost]
        public void DeleteEmployee(int employeeId)
        {
            EmployeeGen.DeleteEmployee(employeeId);
        }

        // Work items methods
        [HttpGet]
        public JsonResult GetWorkItemsStatusList()
        {
            var data = WorkItemsGen.GetWorkItemsStatusList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}