var txt;

function preload() {
  txt = loadStrings("meutxt.txt");
}

function setup() {
  noCanvas();
  getTopics();
  createSectionLinks();
  createCheckList();
  // getParagraph();
}

function getTopics() {
  for (var i = 0; i < txt.length; i++) {
    var secondChar = txt[i].charAt(1);
    var firstChar = txt[i].charAt(0);
    txt[i] = txt[i].replace(firstChar, '');

    if (secondChar == '*') {
      var topicsList = createTopicsList(firstChar);
      txt[i] = txt[i].replace('* ', '');
      var sectionTopics = document.createElement("h3");
      sectionTopics.id = txt[i];
      sectionTopics.setAttribute("name", txt[i]);
      sectionTopics.innerHTML = txt[i];
      topicsList.appendChild(sectionTopics);
    }

    if (secondChar == '-') {
      txt[i] = txt[i].replace(/- /g, '');
      var newParagraph = document.createElement("p");
      newParagraph.innerHTML = txt[i];
      topicsList.appendChild(newParagraph);
    }
  }
}

function createTopicsList(firstChar) {
  var getSection = document.getElementById("testsSection-" + firstChar);
  console.log(getSection);

  var topicsList = document.createElement("div");
  topicsList.setAttribute("class", "topicsList");
  getSection.appendChild(topicsList);

  return topicsList;
}