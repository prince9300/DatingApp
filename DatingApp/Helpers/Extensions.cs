﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace DatingApp.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Access-Control-Expose-Header", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin","*");
            response.Headers.Add("Application-Error", message);
        }

        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = DateTime.Today.Year - theDateTime.Year;
            if (theDateTime.AddYears(age)>DateTime.Today)
            {
                age--;
            }

            return age;
        }
    }
}
