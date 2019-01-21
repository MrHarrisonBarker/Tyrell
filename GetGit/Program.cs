using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Octokit;

namespace GetGit
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var client = new GitHubClient(new ProductHeaderValue("GetGit"));
            var tokenAuth = new Credentials("ca39e08bde9a475a50d5d2363bac3c1f3dc83d35");
            client.Credentials = tokenAuth;
            var user = await GetUser("MrHarrisonBarker", client);
            Console.WriteLine("{0} has {1} public repositories - go check out their profile at {2}",
                user.Name,
                user.PublicRepos,
                user.Url);
            var repos = await GetRepos("MrHarrisonBarker", client);
            foreach (var repo in repos)
            {
                Console.WriteLine(repo.Name);
            }
        }

        static async Task<User> GetUser(string Name, GitHubClient Client)
        {
            return await Client.User.Get(Name);
        }

        static async Task<IReadOnlyList<Repository>> GetRepos(string Name, GitHubClient Client)
        {
            return await Client.Repository.GetAllForUser(Name);
        }
    }
}