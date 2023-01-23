var names=new Array();
names[0]="yakoov";
names[1]="jim";
names[2]="jenny";
names[3]="hyder";
names[4]="anna";
names[5]="jimmy";
names[6]="rafiq";
names[7]="maira";
names[8]="javaid";
names[9]="ayesha";
for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)=='j'||names[i].charAt(0)=='J'){
        console.log("Goodbye "+ names[i]);
    }
    else{
        console.log("hello "+ names[i]);
    }
}
