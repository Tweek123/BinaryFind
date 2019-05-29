function binaryFind (mass, element) {

        let sortMass = sortArray([...mass]);
        let length = sortMass.length;
        let left = 0;
        let right = length -1;
        let i=0;
        let run = true;
        let ret = new Object;
        ret.notFind = false;
        ret.findIndex = null;
        ret.toLong = false; 
        ret.Found = false; 
        let nowTime = new Date().getTime();
        let interTime = nowTime+1000;

        while(nowTime <= interTime) {
            if(left > right) {
                ret.notFind = true;
                return ret;
            }
            i = Math.round(left +(right - left)/2);
            if(sortMass[i] < element) {
                left = i + 1;
            }
            else if(sortMass[i] > element) {
                right = i - 1;
            }
            else if(sortMass[i] === element) {
                ret.findIndex = i;
                ret.Found = true;
                return ret;
            }
            nowTime = new Date().getTime();
        }
        
        ret.toLong=true;
        return ret;
}

function sortfunction(a, b){
    let res = a-b;
    return res;
  }

function sortArray(mass) {  
    mass.sort(sortfunction);   
    return mass;
}

export default binaryFind