import git from 'isomorphic-git';
import fs from 'fs';
import path from 'path';

async function main() {
  const dir = path.resolve('.');

  // 1. Initialize git repo if not exists
  if (!fs.existsSync(path.join(dir, '.git'))) {
    console.log('Initializing git repository...');
    await git.init({ fs, dir, defaultBranch: 'main' });
  }

  // 2. Add files
  console.log('Adding files to git...');
  // Read gitignore
  const gitignoreContent = fs.readFileSync(path.join(dir, '.gitignore'), 'utf-8');
  const ignoreList = gitignoreContent.split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));

  function shouldIgnore(relPath) {
    for (const pattern of ignoreList) {
      if (relPath === pattern || relPath.startsWith(pattern + '/') || relPath.startsWith(pattern + '\\')) {
        return true;
      }
    }
    return false;
  }

  async function addDir(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.relative(dir, fullPath).replace(/\\/g, '/');

      if (relPath.startsWith('.git') || shouldIgnore(relPath)) {
        continue;
      }

      if (entry.isDirectory()) {
        await addDir(fullPath);
      } else {
        await git.add({ fs, dir, filepath: relPath });
      }
    }
  }

  await addDir(dir);

  // 3. Commit
  console.log('Creating commit...');
  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Joares Meireles',
      email: 'barbeariajj@gmail.com'
    },
    message: 'Barbearia J&J - Single Page Application oficial com agendamento online'
  });

  console.log('✅ Commit created successfully:', sha);
}

main().catch(console.error);
