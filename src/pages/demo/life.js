import React from 'react'
import './life.less'

export default class Life extends React.Component{

   
    handleAdd(){
        this.setState({
            count:this.state.count+1
        })
    }
    
    state={
        count:0
    }

    
    componentWillMount() {
        
    }

    
    componentDidMount() {
        
    }


    
    

    render(){
        return (
                <div>
                    <p className='main'>react
                        < p className = 'mainp' > underlllllllll </p>
                    </p>
                    <button onClick={this.handleAdd.bind(this)}>click me</button>
                    <p className='mainp'>{this.state.count}</p>
                </div>
            )
    }
}