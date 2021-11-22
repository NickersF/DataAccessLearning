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
        public static List<EmployeeModel> LoadAllEmployees()
        {
            string sql = "dbo.Select_All_Employees";

            return SqlDataAccess.LoadData<EmployeeModel>(sql);
        }

        public static 
    }
}
