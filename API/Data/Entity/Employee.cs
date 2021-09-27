using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Entity
{
    public class Employee : Base
    {
        public string FullName { get; set; }
        public string DeptName {  get; set; }
        public string DesignationName {  get; set; }
        public string Description {  get; set; }
        public string ImgUrl {  get; set; }
    }
}
