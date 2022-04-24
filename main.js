let arr = [1,2,3,23,45,67,69,71,74,79,85];
let num = 23;
for(let i = 1; i < arr.length; i++){
    if(arr[i] >= num && arr[i-1] <= num){
        if(arr[i] - num > num - arr[i-1]){
            console.log('Число: ' + arr[i-1] + ' ближе.','Его индекс: ' + (+i-1));
            break;
        } else {
            console.log('Число: ' + arr[i] + ' ближе.','Его индекс: ' + i);
            break;
        }
    }
}