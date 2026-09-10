
// Note had to move the functions to the top 

function Got_The_Blues2() {
            var element = document.getElementById("BBK");
            var currentText = element.innerText.trim();
            var nextText;

            if (currentText === "Down on 4th and 5th street!") {
                nextText = "....Baaba....";
                element.style.color = "yellow";
            } else {
                nextText = "Down on 4th and 5th street!";
                element.style.color = "lightblue";
            }

            element.innerText = nextText;
            
}


function NodeConnCnt(nodeId = 0){
    var tstScope = nodeId + 10;
    return tstScope;
}

function GetMaxConnections(){
    return 4;
}

function showVal(message = 'Unknown') {
  window.alert(my_object.NodeConnectCnt + " " + my_object.NodeName);
}

function showAlert(message = 'Default notification alert.') {
  window.alert(message);
}


var my_var;

var my_object = {
    NodeId: 1,
    NodePid: 0,
    NodeName: "Branch1",
    NodeConnectCnt: 0,
    NodeConnectMax: 0
};



var my_objectMethod = {
    NodeId: 2,
    NodePid: 0,
    NodeName: "Branch1",
    NodeConnectCnt: 0,
    NodeConnectMax: GetMaxConnections()
};


Object.assign(my_object, {
    NodeName: "Branch_Updated",
    NodeConnectCnt: NodeConnCnt(my_object.NodeId),
    NodePid: 1
});




