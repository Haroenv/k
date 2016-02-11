var links = {% include k.json %}

var k = function() {
  var k = Math.floor(Math.random() * (links.length));
  document.getElementById('k').innerHTML = '<video onclick="k();" poster="k.png" autoplay loop muted><source src="'+links[k]+'" type="video/mp4"></video>';
  document.getElementById('link').href = links[k];
  console.log('k');
};

k();
