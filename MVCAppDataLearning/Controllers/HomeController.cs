using MVCAppDataLearning.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static DataAccessLayer.BusinessLogic.EmployeeGen;

namespace MVCAppDataLearning.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateNewEmployee(string firstName, string lastName, string emailAddress)
        {
            int recordsCreated = CreateEmployee(firstName, lastName, emailAddress);

            return View(recordsCreated);
        }

        public ActionResult ViewEmployees()
        {
            var data = ReadAllEmployees();
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
    }
}