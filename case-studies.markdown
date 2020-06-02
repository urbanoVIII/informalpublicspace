---
layout: page
title: Case Studies
---

Case studies were selected through snowball sampling, starting with those most related to public space interventions in informal settlements worldwide. From then on, the sample grew based on references and bibliography used in the initial cases.

Interventions span across a wide range of scopes and implementation methods, and they may be found in diverse locations of the Global South. In total, the 20 case studies cover 13 countries: 5 in South America, 4 in North America, in 2 Africa, and 2 in Asia. Notably, this sample is not statistically significant, but it serves as a well-rounded introduction to possible actions in informal settlements worldwide.
<br/>
<br/>
###### Georeferenced case studies:
<div id="mapid"></div>

<script>

var radius_size =4;


  var col_style = {
  radius: radius_size,
  fillColor: "#0088a5",
  color: "#0088a5",
  weight: 1,
  opacity: 1,
  fillOpacity: .8
  };

  var desktop =window.innerWidth > 768;
  console.log(desktop);

  var mymap = L.map('mapid', {
    center: [30.00, 0.00],
    zoom: desktop ? 2 : 1,
    scrollWheelZoom: false,
    dragging: false
  });

  mymap.once('focus', function() { mymap.scrollWheelZoom.enable(); });
  mymap.once('focus', function() { mymap.dragging.enable(); });

  L.tileLayer('https://api.mapbox.com/styles/v1/marcoriz/cjz8kx7pj02to1cmqo5k9zwot/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyY29yaXoiLCJhIjoiY2p5eWJ3NGtsMDF4dDNibXJ5M3lrOTVoYSJ9.EqtBAqNYTGR2T-Zpy1NLsg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);

  mymap.on('zoomend',function(){
  var currentZoom = mymap.getZoom();
  radius_size = Math.pow(1.27,currentZoom);
  console.log(radius_size);
  });
  

  $.getJSON("/assets/downloads/CaseStudies.geojson", function(case_data){
  L.geoJson(case_data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, col_style);
    },
     onEachFeature: function (feature, layer){

      var photo = '<img src="'+feature.properties.Picture+'"/>';
      var link = '/2019/01/01/' + feature.properties.Permalink;

      layer.bindPopup('<a href="' + link + '">' + photo +'</a><p><strong>' + feature.properties.Name + '</strong> </p>' +'<p><br><strong> Authors: </strong>' + feature.properties.Author +'</p><p><br>' + '<strong> Year: </strong>' + feature.properties.Year + '</p>')
    }
  }).addTo(mymap);
});

</script>
<br/>
###### Case Studies List:
<div id="tablecase">
  <script>
  createTable();
  </script>
</div>

<br/>
###### The components of each diagrammatic summary should be read as follows:

Furthermore, the team established an analytical framework to study each case based on exploring what each intervention consisted of, how each process unfolded, and who was involved.

![Case Study Reference](/assets/images/CaseStudy_Ref.jpg "Case Study Reference")


**The main areas of study** are shown in the circle, which is divided into three equal parts. Titles per area exist in the outermost layer of the circle, and subtitles are shown inside the gray boxes. As previously stated, each project received a score from 0 to 3 per subtopic, and such a rating is shown through the colored icons. Higher rankings are expressed through larger icons closer to the edges of the circle, while lower-ranking icons diminish in size and are shown closer to the center of the diagram.More elaborate descriptions of each rating may be found underneath the diagrammatic summaries, inside text boxes. If a project received a 0 in any of the subtopics, an empty circle will be present in the innermost layer and the subtopic title will be outlined in white. Only one colored circle, or icon, will be shown per subtopic. For an easier read, each area is also color-coded as follows:


Impact Area (what?):
<span class="blue">BLUE </span>

Strategies (how?):
<span class="magenta">MAGENTA </span>

Stakeholders (who?):
<span class="yellow">YELLOW </span>

  * The budget of each proposal is shown in the upper left corner of the diagram, outside the circle. When available, the budget will be written underneath the diagram, and the circle within the diagram will turn to black. A larger circle shows a larger budget in comparison to the other projects, and the same logic applies to a smaller one.
  * The date of implementation of each case study is shown in the upper right corner of the diagram, outside the circle. Specifically, the date will be stated underneath the calendar icon.
  * The case study’s relevance to the overall research is shown in the bottom right corner of the diagram, outside the circle. Similar to the area ratings, each proposal received a score from 1 to 3 in this area, which will be clearly stated both through text and through a bar diagram (in black).
  * Lastly, the bottom left corner of the diagram, outside the circle, shows whether or not the case study is related to each of the six research topics established in the research abstract. If a case study is indeed related to any of the themes, it will be shown in black. On the contrary, if it is not related to a given area, it will be grayed out. The abbreviation for each of the categories is as follows:

  **c/s**: Community and Social Development

  **r/w**: Resources and Waste

  **e/i**: Education and Innovation

  **m/a**: Mobility and Accessibility

  **i/r**: Infrastructure and Resilience

  **i/m**: Implementation and Management


  Adding to this diagram, each datasheet will contain three photos per project and a detailed description of the rating it received per subtopic of study.
  Notably, the top-rated case studies will also feature a special symbol in each datasheet (on the upper right corner of the photo section).