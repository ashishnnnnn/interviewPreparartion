const virtualNode = {
    type: "div",
    props: {
      class: "heading-container",
      children: {
        0: "This is",
        1: {
          type: "h1",
          props: {
            key: "10",
            id: "heading",
            children: "devtools.tech",
          },
        },
        2: {
          type: "h2",
          props: {
            id: "heading",
            children: "is Awesome!!",
          },
        },
        3: {
          type: "input",
          props: {
            type: "text",
            value: "Devtools Tech",
          },
        },
        4: {
          type: "button",
          props: {
            children: "Click",
          },
        },
        5: 0,
        6: {
          props: {
            children: {
              0: {
                type: "div",
                props: {
                  children: "React",
                },
              },
              1: {
                type: "div",
                props: {
                  children: "Fragment",
                },
              },
            },
          },
        },
        7: "",
      },
    },
};
  
const domNode = document.getElementById('root');

function renderToDOM(virtualNode,domNode){
    if(typeof virtualNode!=="object"){
        // console.log(domNode, typeof domNode)
        // console.log(virtualNode, typeof virtualNode)
        const textNode = document.createTextNode(virtualNode)
        domNode.appendChild(textNode)
    }
    else{
        let type = virtualNode.type;
        let className = virtualNode.props?.class;
        let ele = document.createElement(`${type?type:"div"}`);
        className ? ele.classList.add(className): null;
        if(type==="input"){
            ele.value = ""
        }
        for(let key in virtualNode.props){
            if(key!=="class" && key!=="children"){
                ele.setAttribute(key,virtualNode.props.key)
            }
        }
        for(let bete in virtualNode.props?.children){
            renderToDOM(virtualNode.props?.children[bete],ele)
        }
        if(type){
            domNode.appendChild(ele)
        }
        else{
            ele.childNodes.forEach((currEle)=>{
                domNode.appendChild(currEle.cloneNode(true))
            })
        }
    }
}
  
renderToDOM(virtualNode, domNode);

console.log("Hello")