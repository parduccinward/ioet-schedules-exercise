import * as fs from 'fs';
const retrieveData = () => {
    try {
        let data = fs.readFileSync('./src/database/data.txt', 'utf8');
        return data.toString();
    } catch(e) {
        console.log('Error:', e.stack);
    }
}
export default retrieveData;