/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScreenComponent extends Component {
    
    constructor(props) {
        super(props);        
    }
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    
    render() {
        let nums = this.props.nums;     
        let mattrix = this.props.mattrix;
        return (
                <div className="pattern-holder patt-holder">
                    <ul className="patt-wrap" onMouseUp={ this.props.onMouseUp }> 
                    {
                        mattrix.map( (item) => {
                            return (
                                    <li 
                                        onMouseDown={ this.props.onMouseDown }
                                        onMouseEnter={ this.props.onMouseEnter }                                        
                                        className={nums.indexOf(item) > -1 ? "patt-circ hovered" : "patt-circ"}
                                        data-key={item} 
                                        key={item}
                                        >
                                        <div className="patt-dots"></div>
                                       </li>
                            );
                        })
                    }   
                    </ul>                    
                    {
                        nums.map((number,key) => {
                            return <div className={"patt-lines from-" + nums[key]+"-"+nums[key+1]} key={number}></div>                     
                        })
                    }                    
                </div>
        );
    }
}

const propTypes = {    
    pattern: PropTypes.string,
    onMouseUp: PropTypes.func.required,
    onMouseEnter: PropTypes.func.required,
    onMouseDown: PropTypes.func.required,
    mattrix: PropTypes.array.required
}

ScreenComponent.propTypes = propTypes;

export default ScreenComponent;
    
    
