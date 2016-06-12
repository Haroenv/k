var links = {{ site.data.k | jsonify}};

function k() {
  var k = Math.floor(Math.random() * (links.length));
  document.getElementById('k').innerHTML = '<video onclick="k();" poster="k.png" autoplay loop muted><source src="'+links[k].mp4+'" type="video/mp4"></video>';
  document.getElementById('link').href = links[k].link || links[k].mp4;
  console.log('k');
};

k();
