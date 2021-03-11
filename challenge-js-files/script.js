//CREATES CANVAS ELEMENT
let graph1 = document.createElement("CANVAS");
//CREATES CONTAINER FOR GRAPH1
let ctx1 = graph1.getContext("2d");
//GRABS TABLE1 POSITION
const target1 = document.querySelector("#table1");
//INSERTS GRAPH CONTAINER BEFORE TABLE1
target1.parentNode.insertBefore(graph1,target1);

 
let graph2 = document.createElement("CANVAS");
//CREATES CONTAINER FOR GRAPH2
let ctx2 = graph2.getContext("2d");
//TARGETS POSITION OF TABLE2
const target2 = document.querySelector("#table2");
//INSERTS GRAPH CONTAINER BEFORE TABLE2
target2.parentNode.insertBefore(graph2,target2);
 


//3 steps
/* fetch("https://canvasjs.com/services/data/datapoints.php").then((response) =>{
  console.log("resolved",response);
  return response.json();

}).then(data =>{
  console.log(data);

}).catch((err) =>{
  console.log("rejected",err);
})


 */

/* const getTodos = async () => {

};

const test = getTodos();
console.log(test);
 */

/* ------------------------------------------------------- */
 
