function race(v1,v2,g){
	if(v1<v2){
        let distnce,time,hour,minute,second,minuteWithFloor;
        distnce=g*v1/(v2-v1);
        time=distnce/v1;
        time>=1?hour=Math.floor(time):h=0;
        minute=(time-hour)*60;
        minuteWithFloor=Math.floor(minute);
        second=Math.floor((minute-Math.floor(minute))*60);
        return [hour,minuteWithFloor,second];
    }else{
		return console.log('Error, please input v1<v2');
    }
};
race(80,91,37);