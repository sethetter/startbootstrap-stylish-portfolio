// store these for use
var aArray = [
  `<a href="http://www.kochind.com/" target="_blank" ><img src="../img/logos/KOCH.jpg"></a>`,
  `<a href="http://sntmedia.com/" target="_blank" ><img src="../img/logos/SNT.jpg"></a>`,
  `<a href="https://www.butlercc.edu/" target="_blank" ><img src="../img/logos/Butler.jpg"></a>`,
  `<a href="http://flinthillsgroup.com/" target="_blank" ><img src="../img/logos/FHG.jpg"></a>`,
  `<a href="http://www.downtownwichita.org/" target="_blank" ><img src="../img/logos/DowntownWichita.jpg"></a>`,
  `<a href="http://ulteriustech.com/" target="_blank" ><img src="../img/logos/Ulterius.jpg"></a>`,
];


// get the dom node based on html id
function getDOMNode(tag) {
  var node = document.getElementById(tag);
  if(node === null) throw Error("cant find node with tag");
  return node;
}

function createImageNode(element) {
  var image = document.createElement("div");
  image.className = "col-md-4 sponsor";
  image.innerHTML = element;
  return image;
}

function orderRandom(array, domTag, i) {

  // recursive catch for empty array
  if (array.length === 0) return;
  // length of array
  var length = array.length;
  // get a random number for the next image index to use
  var ran = Math.floor(Math.random() * (length))
  // get the random element
  var element = array[ran];
  // get the dom node for appending a child
  var domNode = getDOMNode(domTag);
  // create a html node and append it to the domNode
  domNode.appendChild(createImageNode(element));
  if (i % 3 === 0){
    var clear = document.createElement("div");
    clear.className = "clearfix";
    domNode.appendChild (clear);
  }
  // mutate the array to not have that array
  array.splice(ran, 1);
  // recursion
  orderRandom(array, domTag, i+1);
}

orderRandom(aArray, 'sponsors', 1);
