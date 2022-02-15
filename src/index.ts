import fetchData from './fetchData';
import dedent from 'dedent';
import * as path from 'path';
import * as fs from 'fs';

const readMe = path.join(__dirname, '..', 'README.md');

const updateFile = async () => {
  const data = await fetchData('https://api.github.com/users/Ohmrrr');

  const text = dedent`## Hello There 👋, I'm Ohmrrr

  I'm slightly new to GitHub but I'm on here to improve my skills and share my work.
  I primarily use JavaScript and TypeScript, but I'm still learning. So far, I've worked on:

  - [eTOA-001](https://github.com/Ohmrrr/etoa-bot) - a Discord bot made with Discord.js v13 in JavaScript. 
  
  [![eTOA](https://github-readme-stats.vercel.app/api/pin/?username=Ohmrrr&repo=etoa-bot&show_owner=true&theme=dark)](https://github.com/Ohmrrr/etoa-bot)

  Hopefully there'll be more in the future.

  ### Languages and Technologies

  <img align="left" width="30px" alt="JavaScript" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-original.svg" />
  <img align="left" width="30px" alt="TypeScript" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/typescript/typescript-original.svg" />
  <img align="left" width="30px" alt="Bash" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/bash/bash-original.svg" />
  <img align="left" width="30px" alt="Visual Studio Code" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/vscode/vscode-original.svg" />
  <img align="left" width="30px" alt="Yarn" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/yarn/yarn-original.svg" />
  <br />

  ### My Stats

  [![My Stats](https://github-readme-stats.vercel.app/api?username=Ohmrrr&theme=dark)](https://github.com/Ohmrrr)
  <br />
  
  \`\`\`js
  const Ohmrrr = {
    name: "${data.name}",
    bio: ${data.bio},
    repositories: {{ REPOSITORIES }}
    commits: {{ COMMITS }},
    stars: {{ STARS }}
    followers: ${data.followers},
    following: ${data.following},
    created: "08/19/21",
  };
  \`\`\``;

  fs.writeFileSync(readMe, text);
};

updateFile();
