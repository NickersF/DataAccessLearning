using DataAccessLayer.Models;
using DataAccessLayer.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.BusinessLogic
{
    public static class WorkItemsGen
    {
        public static List<WorkItemStatusModel> GetWorkItemsStatusList()
        {
            string sql = "dbo.GetWorkItemStatusList";

            return SqlDataAccess.LoadData<WorkItemStatusModel>(sql);
        }
    }
}
