window.onload = start;

function createUniqueIds() {
    var elements = document.getElementsByClassName('showItens');
    for (var i = 0; i < elements.length; i++) {
        elements[i].id = 'testsSection-' + i;
    }
}

function openSectionItens(e) {
    var elements = document.querySelectorAll(".Section");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id == e) {
            var index = i;
        }
    }

    node = document.getElementById('testsSection-' + index);

    if (node.classList.contains("hide")) {
        node.classList.replace("hide", "show");
        var i = document.getElementById(e).querySelectorAll("i")[0].innerHTML = "remove";
    } else {
        node.classList.replace("show", "hide");
        var i = document.getElementById(e).querySelectorAll("i")[0].innerHTML = "add";
    }
}

var searchCount = 0;
function checkInput() {
    var searchStr = document.getElementById('search').value;
    if (searchStr == "") {
        alert("Type something before search");
        return;
    }
    if (window.find) {
        var searchResult = window.find(searchStr);
        if (searchResult == true) {
            searchCount += 1;
        }
        if (!searchResult && searchCount == 0) {
            alert("The following text was not found:\n" + searchStr);
            searchCount = 0;
        }
        if (!searchResult && searchCount >= 1) {
            alert("All results shown for the text:\n" + searchStr);
            searchCount = 1;
        }

    }
}

function submitEnterSearch() {
    document.getElementById('search').onkeypress = function (enterSubmit) {
        if (!enterSubmit) enterSubmit = window.event;
        if (enterSubmit.keyCode == '13') {
            checkInput();
            return false;
        }
    }
}

function getElementsForCheckList() {
    var temp_list = document.getElementsByTagName('h3');
    var list = [];
    for (var i = 0; i < temp_list.length; i++) {
        list.push(temp_list[i].innerText);
    }
    for (var i = 0; i < list.length; i++) {
        list[i] = list[i].replace(/:/g, '');
    }
    console.log(list);
    return list;
}

function createSectionLinks() {
    list = getElementsForCheckList();
    for (var e in list) {
        var newElement = document.createElement('a');
        newElement.id = list[e] + '-link'; newElement.className = "sectionTopics"; newElement.href = '#' + list[e].replace(' ', '%20')
        newElement.innerHTML = '| ' + list[e] + ' |';
        var parent = document.getElementById(list[e]);
        parent = parent.parentNode.parentNode;
        var index = parent.id.charAt(parent.id.length - 1);
        document.getElementsByClassName('linksSection')[index].appendChild(newElement);
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginRight = "400px";
    var x = document.getElementsByClassName("pushnavIcon")
    x[0].style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    var x = document.getElementsByClassName("pushnavIcon")
    x[0].style.display = "inline-block";
}

function createCheckList() {
    list = getElementsForCheckList();
    for (var e in list) {
        var newElement = document.createElement('div');
        newElement.id = list[e] + '-checklist-item';
        newElement.style.lineHeight = '200%'; newElement.style.fontSize = "16px";
        document.getElementById('mySidenav').appendChild(newElement);
        var newCheckbox = document.createElement('input');
        newCheckbox.type = "checkbox"; newCheckbox.id = list[e] + '-list-checkbox'; newCheckbox.name = list[e]; newCheckbox.value = list[e];
        newCheckbox.style.width = "16px"; newCheckbox.style.height = "16px"; newCheckbox.style.marginLeft = "30px";
        var newLabel = document.createElement('label');
        newLabel.htmlFor = list[e] + '-list-checkbox'; newLabel.innerHTML = list[e]; newLabel.style.marginLeft = "10px";
        document.getElementById(list[e] + '-checklist-item').appendChild(newCheckbox);
        document.getElementById(list[e] + '-checklist-item').appendChild(newLabel);
    }
}

function start() {
    createUniqueIds();
    submitEnterSearch();
}
