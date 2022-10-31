const stringUtils ={
    separateByBreakLine: (text) =>{
        return text.split('\n')
    },
    getRowName: (text) => {
        return text.split('=')[0];
    }
}
export default stringUtils;