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

        [HttpPost]
        public void InsertEmployee(string firstName, string lastName, string emailAddress)
        {
            CreateEmployee(firstName, lastName, emailAddress);
        }

        [HttpPost]
        public void UpdateSingleEmployee(string firstName, string lastName, string emailAddress)
        {
            UpdateEmployee(firstName, lastName, emailAddress);
        }
    }
}