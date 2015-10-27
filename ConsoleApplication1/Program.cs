using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        private static IEnumerable<int> enumerable;

        private static IEnumerable<int> getEnumerable()
        {
            for (var i = 0; i < 3; i++)
                yield return i;
        }

        static void Main(string[] args)
        {
            var lines = File.ReadLines("data.txt");
            string lastLine = lines.ElementAt(lines.Count() - 1);

            Console.WriteLine(lastLine);
            Console.WriteLine(lines.ElementAt(1));
        }
    }
}
