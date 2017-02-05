function setup() {
  createCanvas(1500,500);
  var url = "http://donnees.ville.montreal.qc.ca/dataset/2980db3a-9eb4-4c0e-b7c6-a6584cb769c9/resource/18705524-c8a6-49a0-bca7-92f493e6d329/download/oeuvresdonneesouvertes.json";
  donnees = loadJSON(url);
  sclH = 20;
  sclW = sclH * width / height;
  console.log("width = "+ width + " height = " + height);
  w = width / sclW;
  h = height / sclH;

  list = [];


    var compteur = 3;
}

function draw() {
  for(var i = 0 ; i < sclW ; i ++){
    for(var j = 0 ; j < sclH; j ++ ){
      fill(random(255),random(255),random(255),random(255));
      rect(i*w  ,j*h  ,w -5 ,h -5 );
    }
  }
  compteur++;

  for(var i = 0; i < compteur; i++){
    list[i].show();
  }

}
