function createTable() {
var data = [
{
        "Author": "Kounkuey Design Initiative",
        "Country": "Kenya",
        "Year": 2006,
        "Name": "The Kibera Public Space Project",
        "Picture": "/assets/images/CaseStudy_Kibera150px.jpg",
        "Permalink": "Kibera"
      },

      {
        "Author": "Kounkuey Design Initiative",
        "Country": "USA",
        "Year": 2011,
        "Name": "The ECV Public Space Network",
        "Picture": "/assets/images/CaseStudy_ECV150px.jpg",
        "Permalink": "ECV"
      },

      {
        "Author": "Kounkuey Design Initiative",
        "Country": "USA",
        "Year": 2011,
        "Name": "The ECV Public Space Network",
        "Picture": "/assets/images/CaseStudy_ECV150px.jpg",
        "Permalink": "ECV"
      }, 

      {
        "Author": "Municipality of Medellín, Empresa de Desarrollo Urbano, Department of Transportation, Department of City Planning",
        "Country": "Colombia",
        "Year": 2005,
        "Name": "Calle 107",
        "Picture": "/assets/images/CaseStudy_Calle107150px.jpg",
        "Permalink": "Calle107"
      },

      {
        "Author": "Agasti",
        "Country": "India",
        "Year": 2016,
        "Name": "The Lightbox",
        "Picture": "/assets/images/CaseStudy_Lightbox150px.jpg",
        "Permalink": "Lightbox"
      }, 

      {
        "Author": "Tarna Klitzner Landscape Architects, Jonker & Barnes Architects, Naylor Van Wyk Talani, AHT Group,\nSUN Development Group N2 Construction, Ross Construction",
        "Country": "South Africa",
        "Year": 2006,
        "Name": "Violence Prevention Through Urban Upgrading",
        "Picture": "/assets/images/CaseStudy_Violence150px.jpg",
        "Permalink": "Violence"
      }, 

      {
        "Author": "Giancarlo Mazzanti",
        "Country": "Colombia",
        "Year": 2005,
        "Name": "Parque Biblioteca España",
        "Picture": "/assets/images/CaseStudy_BibliotecaEspana150px.jpg",
        "Permalink": "BibliotecaEspana"
      }, 

      {
        "Author": "Korogocho Residents Committee, UN Habitat, Comboni missionaries",
        "Country": "Kenya",
        "Year": 2007,
        "Name": "Korogocho Slum Upgrading Program",
        "Picture": "/assets/images/CaseStudy_Korogocho150px.jpg",
        "Permalink": "Korogocho"
      }, 

      {
        "Author": "Group of the Eight Communities Surrounding the Caño Martín Peña, Caño Martín Peña Land Trust",
        "Country": "Puerto Rico",
        "Year": 2004,
        "Name": "Caño Martín Peña Community Land Trust",
        "Picture": "/assets/images/CaseStudy_CanoMartinPena150px.jpg",
        "Permalink": "CanoMartinPena"
      }, 

      {
        "Author": "María Auxiliadora Community",
        "Country": "Bolivia",
        "Year": 1999,
        "Name": "Comunidad María Auxiliadora",
        "Picture": "/assets/images/CaseStudy_MariaAuxiliadora150px.jpg",
        "Permalink": "MariaAuxiliadora"
      }, 

      {
        "Author": "Endesa, COELCE (local energy distribution company)",
        "Country": "Brazil",
        "Year": 2007,
        "Name": "Ecoelce",
        "Picture": "/assets/images/CaseStudy_Ecoelce150px.jpg",
        "Permalink": "Ecoelce"
      }, 

      {
        "Author": "Arup",
        "Country": "Colombia",
        "Year": 2014,
        "Name": "Night-Time Design",
        "Picture": "/assets/images/CaseStudy_NightTime150px.jpg",
        "Permalink": "NightTime"
      }, 

      {
        "Author": "Charles Correa",
        "Country": "India",
        "Year": 1983,
        "Name": "Belapur Artists' Housing",
        "Picture": "/assets/images/CaseStudy_Belapur150px.jpg",
        "Permalink": "Belapur"
      }, 

      {
        "Author": "TATA Center MIT Ana Cristina Vargas, Miho Mazereeuw",
        "Country": "India",
        "Year": 2015,
        "Name": "Tracing Public Space",
        "Picture": "/assets/images/CaseStudy_Tracing150px.jpg",
        "Permalink": "Tracing"
      }, 

      {
        "Author": "TATA Center MIT Ana Cristina Vargas, Miho Mazereeuw",
        "Country": "USA",
        "Year": 2015,
        "Name": "Tracing Public Space",
        "Picture": "/assets/images/CaseStudy_Tracing150px.jpg",
        "Permalink": "Tracing"
      },

      {
        "Author": "TATA Center MIT Ana Cristina Vargas, Miho Mazereeuw",
        "Country": "Venezuela",
        "Year": 2015,
        "Name": "Tracing Public Spaces",
        "Picture": "/assets/images/CaseStudy_Tracing150px.jpg",
        "Permalink": "Tracing"
      },

      {
        "Author": "TATA Center MIT Ana Cristina Vargas, Miho Mazereeuw",
        "Country": "Venezuela",
        "Year": 2015,
        "Name": "Tracing Public Spaces",
        "Picture": "/assets/images/CaseStudy_Tracing150px.jpg",
        "Permalink": "Tracing"
      },

      {
        "Author": "Taller Capital/Loreta Castro Reguera Mancera + Manuel Perló Cohen",
        "Country": "México",
        "Year": 2012,
        "Name": "Parque Hídrico La Quebradora",
        "Picture": "/assets/images/CaseStudy_Quebradora150px.jpg",
        "Permalink": "Quebradora"
      },

      {
        "Author": "Studio MLA",
        "Country": "USA",
        "Year": 2010,
        "Name": "Piggyback Yard",
        "Picture": "/assets/images/CaseStudy_PiggyBack150px.jpg",
        "Permalink": "PiggyBack"
      },

      {
        "Author": "AIA Design Voice",
        "Country": "USA",
        "Year": 2016,
        "Name": "Mi Jardín",
        "Picture": "/assets/images/CaseStudy_MiJardin150px.jpg",
        "Permalink": "MiJardin"
      },

      {
        "Author": "ACIJ and Wingu",
        "Country": "Argentina",
        "Year": 2013,
        "Name": "Caminos de la Villa",
        "Picture": "/assets/images/CaseStudy_Caminos150px.jpg",
        "Permalink": "Caminos"
      },

      {
        "Author": "Anna heringer & Erike Roswag",
        "Country": "Bangladesh",
        "Year": 2007,
        "Name": "Meti Handmade Shool",
        "Picture": "/assets/images/CaseStudy_Meti150px.jpg",
        "Permalink": "Meti"
      },  

      {
        "Author": "Ecosistema Urbano",
        "Country": "Honduras",
        "Year": 2015,
        "Name": "Tegucigalpa Revitalization",
        "Picture": "/assets/images/CaseStudy_Tegucigalpa150px.jpg",
        "Permalink": "Tegucigalpa"
      },

      {
        "Author": "Jardim Colombo’s Neighborhood Association, ArqFuturo",
        "Country": "Brazil",
        "Year": 2018,
        "Name": "Fazendinhando",
        "Picture": "/assets/images/CaseStudy_Fazendinhando150px.jpg",
        "Permalink": "Fazendinho"
      },

];

var keys = [];

document.write('<table><colgroup><col class="colPicture"><col class="colName"><col class="colAuthors"><col class="colCountry"><col class="colYear"></colgroup><tr><thead>');
document.write('<th>' + 'Picture' + '</th>');
document.write('<th>' + 'Name' + '</th>');
document.write('<th>' + 'Authors' + '</th>');
document.write('<th>' + 'Country' + '</th>');
document.write('<th>' + 'Year' + '</th>');

document.write("</tr></thead><tbody>");

for (var i = 0; i < data.length; i++) {
  var photo = '<img src="' + data[i]['Picture']+'"/>';
  var link = '/2019/01/01/' + data[i]['Permalink'];
    document.write('<tr data-href="' + link +'">');
    document.write('<td>' +photo + '</td>');
    document.write('<td>' + data[i]['Name'] + '</td>');
    document.write('<td>' + data[i]['Author'] + '</td>');
    document.write('<td>' + data[i]['Country'] + '</td>');
    document.write('<td>' + data[i]['Year'] + '</td>');
    

  document.write('</tr>');
}
document.write("</tbody></table>");

document.addEventListener("DOMContentLoaded", () => {
  const rows =document.querySelectorAll("tr[data-href]");
  console.log(rows);
  rows.forEach(row => {
    row.addEventListener("click", () => {
      window.location.href = row.dataset.href;
    });
  });
});

}