import React, { Component } from 'react'

export default class Child extends Component{
    state={
        count:0
    }
    componentWillMount(){
        console.log("woll mount");
    }
    
    componentDidMount(){
        console.log("did mount");
    }

    componentWillReceiveProps(newProps){
        console.log("will props",newProps);
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
        console.log("will updata");
    }

    componentDidUpdata(){
        console.log("did updata");
    }
    render (){
        return (
            <div>
                <p>这里是子组件</p>
              <p>{this.props.name}11</p>
            </div>
        )
    }
}