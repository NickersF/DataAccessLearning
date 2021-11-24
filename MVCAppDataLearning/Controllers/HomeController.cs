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

        public ActionResult CreateNewEmployee()
        { 
            return View();
        }

        public ActionResult UpdateExistingEmployee()
        {
            return View();
        }

        public ActionResult ViewEmployees()
        {
            var data = EmployeeGen.ReadAllEmployees();
            List<EmployeeModel> employees = new List<EmployeeModel>();

            foreach (var row in data)
            {
                employees.Add(new EmployeeModel
                {
                    Employee_Id = row.Employee_Id,
                    FirstName = row.FirstName,
                    LastName = row.LastName,
                    EmailAddress = row.EmailAddress
                });
            }

            return View(employees);
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
        public void UpdateEmployee(string firstName, string lastName, string emailAddress)
        {
            EmployeeGen.UpdateEmployee(firstName, lastName, emailAddress);
        }
    }
}