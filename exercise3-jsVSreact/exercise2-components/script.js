// ReactDOM.render(<h1>hello<h1/>, document.getElementById("container"));
//recreate the line above on vanilla js by creating and appending an h1 to our div without using innerHTML

const ContainerDOM =  document.getElementById("container");
const h1 = document.createElement("h1");
h1.innerText = "Hello"
ContainerDOM.append(h1);

//this is a imperative way of programming