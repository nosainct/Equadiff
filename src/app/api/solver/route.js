import { PythonShell } from 'python-shell';

export async function POST(request, response) {
    const requestData = await request.json();
    console.log("args : ", JSON.stringify(requestData));
    return new Promise((resolve, reject) => {
        let options = {
            mode: 'text',
            pythonOptions: ['-u'],
            scriptPath: 'C:/Users/noasa/Documents/BUT/Maths/Equa_Diff/Equadiff/src/app/api/solver', // Directory path
            args: [JSON.stringify(requestData)]
        };

        PythonShell.run('solver.py', options, (err, results) => {
            if (err) {
                console.error(err);
                response.status(500).send('Internal Server Error');
                reject(err);  // Reject the promise on error
            } else {
                response.json({ results: results });
                resolve();  // Resolve the promise on success
            }
        });
    });
}
