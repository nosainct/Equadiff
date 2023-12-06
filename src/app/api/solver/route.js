import { PythonShell } from 'python-shell';
export async function POST(request) {
    const res = await request.json()
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: 'C:/Users/noasa/Documents/BUT/Maths/Equa_Diff/Equadiff/src/app/api/solver/solver.py', // Ajustez le chemin selon l'organisation de votre projet
        args: [JSON.stringify(request.body)]
      };
  
      PythonShell.run('solver.py', options, (err, results) => {
        if (err) {
          console.error(err);
          return Response.send('Internal Server Error');
        } else {
            return Response.json({ res })
        }
      });
  }
