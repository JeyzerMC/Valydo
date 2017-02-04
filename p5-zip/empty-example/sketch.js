function setup() {
  createCanvas(1500,600);
  var url = "http://donnees.ville.montreal.qc.ca/dataset/2980db3a-9eb4-4c0e-b7c6-a6584cb769c9/resource/18705524-c8a6-49a0-bca7-92f493e6d329/download/oeuvresdonneesouvertes.json";
  data = loadJSON(url);

  // for(var i = 0 ; i < data.size()){
  //     art.push(new artPublic(data[i].))
  //
  // }

  rect(20,20,20,20);
  text("Chocolat", 50, 50);


}

function draw() {
  //background(0);


}
