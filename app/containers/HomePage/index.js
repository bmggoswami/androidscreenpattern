/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ScreenComponent from './../../components/ScreenComponent/ScreenComponent';
import * as actions from './actions';
const mattrix = ["one","two","three","four","five","six","seven","eight","nine"];

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        this.state = {            
            nums: [],            
            started: false,
            finished: false,
            pattern: '',
            reset: false,
        };
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.savePattern = this.savePattern.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    
    onMouseDown(e){
        e.preventDefault();
        console.log("onMouseDown On ",e.currentTarget.attributes.getNamedItem("data-key").value," Finished: ",this.state.finished, " && Start is :",this.state.started);    
        if(!this.state.started){
            this.setState({nums: []});
            let startVal = e.currentTarget.attributes.getNamedItem("data-key").value;        
            let newNum = [startVal];
            this.setState({ started: true , nums: newNum});            
        }else
            this.setState({nums: [], started: false, finished: false});
    }
    
    onMouseEnter(e){
        e.preventDefault();
        let enteredVal = e.currentTarget.attributes.getNamedItem("data-key").value;         
        console.log(this.state.started);
        if(this.state.nums.indexOf(enteredVal) < 0 && this.state.started ){
            console.log("onMouseEnter:",enteredVal);               
            let newNum = this.state.nums;
            newNum.push(enteredVal)
            this.setState({nums: newNum});     
        }
    }
    
    onMouseUp(e){        
        event.preventDefault();
        console.log(this.state.nums);        
        let pattern = this.state.nums.map((item,key) => {return mattrix.indexOf(item) + 1});
        console.log("pattern is:",pattern.join(""));
        this.setState({started: false, pattern});
    }
    
    savePattern(){
        console.log("pattern is:",this.state.pattern.join(""));
        this.props.actions.savePattern(this.state.pattern.join(""));
    }
    
    render() {    
        console.log("called");
        return (      
            <div>
                <ScreenComponent
                    onMouseUp={this.onMouseUp}
                    onMouseEnter={this.onMouseEnter}
                    onMouseDown={this.onMouseDown}
                    nums={this.state.nums}
                    started={this.state.started}
                    pattern={this.state.pattern}
                    mattrix={mattrix}
                />      
                <div className="controls">
                    <button >Reset</button>
                    <button onClick={this.savePattern}>Save</button>
                </div>
            </div>        
        
    );
  }
}

function mapStateToProps(state){
    console.log(state);
    return {
        reset: state.reset
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)    
  };
}

HomePage.propTypes = {
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);