function setup() {
  //size(600,450);
  createCanvas(600,450);
  background(177, 184, 153);
  noStroke();
  
  //table
  fill(95,110,130);
  ellipse(450,450,1000,450);
  
  //plate
  fill(139,121,112);
  ellipse(380,375,180,60);
  fill(207,195,179);
  ellipse(380,330,300,120);
  
  //teapot
  fill(136,121,118);
  rect(480,70,44,15,0,30,30,0);
  rect(515,70,15,90,0,30,30,0);
  fill(137,102,98);
  rect(444,53,40,70);
  fill(136,121,118);
  ellipse(466,193,150,150);
  fill(99,42,31);
  ellipse(464,53,45,30);
  fill(68,67,75);
  ellipse(464,53,30,20);
}

function draw() {
  //apples
  //0
  if(key =='0'){
    fill(237,186,79);
    ellipse(180,340,85,70);
  }

  //1
  else if(key =='1'){
  fill(204,82,41);
  ellipse(250,300,80,80);
  }
  
  //3
  else if(key =='3'){
  fill(194,154,85);
  ellipse(330,300,75,75);
  }
  
  //2
  else if(key =='2'){
  fill(168,47,30);
  ellipse(270,320,80,80);
  }
  
  //4
  else if(key =='4'){
  fill(208,122,47);
  ellipse(345,331,80,80);
  }
  
  //5
  else if(key =='5'){
  fill(207,93,43);
  ellipse(388,274,70,70);
  }
  
  //8
  else if(key =='8'){
  fill(118,136,86);
  ellipse(431,235,75,75);
  }
  
  //9
  else if(key =='9'){
  fill(126,50,27);
  ellipse(481,287,75,75);
  }    
 
  //7
  else if(key =='7'){
  fill(182,160,75);
  ellipse(422,333,75,75);
  }
 
  //6
  else if(key =='6'){
  fill(188,60,35);
  ellipse(413,290,80,83);
  }
  
  //other keys
  else {
    fill(177, 184, 153);
    rect(0,0,600,450);
    
  //table
  fill(95,110,130);
  ellipse(450,450,1000,450);
  
  //plate
  fill(139,121,112);
  ellipse(380,375,180,60);
  fill(207,195,179);
  ellipse(380,330,300,120);
  
  //teapot
  fill(136,121,118);
  rect(480,70,44,15,0,30,30,0);
  rect(515,70,15,90,0,30,30,0);
  //quad(480,70,545,55,537,72,480,85);
  //quad(528,60,545,55,530,155,513,150);
  fill(137,102,98);
  rect(444,53,40,70);
  fill(136,121,118);
  ellipse(466,193,150,150);
  fill(99,42,31);
  ellipse(464,53,45,30);
  fill(68,67,75);
  ellipse(464,53,30,20);
  }
}

function mouseClicked(){ 
  
  if(mouseButton==LEFT){
    fill(188,60,35);
    ellipse(mouseX,mouseY,70,70);
  }
  if(mouseButton==RIGHT){
    fill(182,160,75);
    ellipse(mouseX,mouseY,70,70);
  }
}
