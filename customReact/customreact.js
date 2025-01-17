function customRender(reactElement,container){
    
      const domElement = document.createElement(reactElement.type);
      domElement.innerText = reactElement.Children;
      /*
      domElement.setAttribute('href',reactElement.props.href);
      domElement.setAttribute('target',reactElement.props.target);
       container.appendChild(domElement);
      */
     for(const prop in reactElement.props){
        if(prop ==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
     }
     container.appendChild(domElement);
     
}

const reactElement = {
    type: 'a',
    props :{
        href: "https://google.com",
        target: "_blank",
    },
    Children: "this is custom element"
}

const mainContainer = document.getElementById("root");

customRender(reactElement,mainContainer)

