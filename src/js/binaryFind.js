function binaryFind (sortMass, element) {
    let length = sortMass.length;
    let left = 0;
    let right = length -1;
    let i=0;
    while(true) {
        
        if(left > right) {
            
            return false;
        }
        i = Math.round(left +(right - left)/2);
        if(sortMass[i] < element) {
            left = i + 1;
            
        }
        else if(sortMass[i] > element) {
            right = i - 1;
        }
        else if(sortMass[i] === element) {
            return i;
        }
    } 
}

export default binaryFind