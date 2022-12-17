import React, { Component } from 'react'
import Child from './Child'
import './index.less'

export default class Life extends Component{
    state={
        count:0
    }
    handleAdd=()=>{
        this.setState({
          count:this.state.count+1
        })
    }
   render(){ 
    let {count}=this.props
    let style={
        padding:"50px"
    }
    return <div className='content' >
        <p>react生命周期介绍</p>
        <button onClick={this.handleAdd}>点击一下</button>
        <button onClick={this.handleAdd}>点击一下</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count} />
    </div>
   }
}