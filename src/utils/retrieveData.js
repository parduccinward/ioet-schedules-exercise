import {readFile} from 'fs/promises';

const retrieveData = async () => {
    try {
        const data = await readFile(process.cwd()+'/src/database/data.txt', 'utf8')
        return data.toString();
    } catch(e) {
        console.log('Error:', e.stack);
    }
}
export default retrieveData;