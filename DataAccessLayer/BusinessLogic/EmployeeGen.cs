using DataAccessLayer.Models;
using DataAccessLayer.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.BusinessLogic
{
    public static class EmployeeGen
    {
        public static int CreateEmployee(string firstName, string lastName, string emailAddress)
        {
            EmployeeModel data = new EmployeeModel
            {
                FirstName = firstName,
                LastName = lastName,
                EmailAddress = emailAddress
            };

            string sql = "dbo.Create_Employee @FirstName, @LastName, @EmailAddress";

            return SqlDataAccess.SaveData(sql, data);
        }

        public static List<EmployeeModel> ReadAllEmployees()
        {
            string sql = "dbo.Select_All_Employees";

            return SqlDataAccess.LoadData<EmployeeModel>(sql);
        }

        public static int UpdateEmployee(int employeeId, string firstName, string lastName, string emailAddress)
        {
            EmployeeModel data = new EmployeeModel
            {
                Employee_Id = employeeId,
                FirstName = firstName,
                LastName = lastName,
                EmailAddress = emailAddress
            };

            string sql = "dbo.Update_Employee @Employee_Id, @FirstName, @LastName, @EmailAddress";

            return SqlDataAccess.SaveData(sql, data);
        }

        public static int DeleteEmployee(int employeeId)
        {
            EmployeeModel data = new EmployeeModel
            {
                Employee_Id = employeeId,
                FirstName = null,
                LastName = null,
                EmailAddress = null
            };

            string sql = "dbo.Delete_Employee @Employee_Id";

            return SqlDataAccess.SaveData(sql, data);
        }

    }
}
