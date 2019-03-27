import React, { Component } from 'react';
import $ from "jquery";
import 'select2';
import 'select2/dist/css/select2.css';
import {samples} from "../sample"
import Option from "./Option";



class Select extends Component {
    state = {
        options:[],
    };
    componentDidMount(){
            this.loadBasicTasks();
            $('.select2').select2();


    }
    loadBasicTasks = () =>{
        this.setState({options:samples})
    };
    addOption = (optionName) => {
        const options = [...this.state.options];
        options.push(optionName);
        this.setState({ options });
    };
    render() {
        return (
            <div>
                <button onClick={()=>{this.addOption('NewTag')}}
                        disabled={this.state.options.includes("NewTag")}>Add new tag</button><br/>
                <select className={'select2'} ref={el => this.el = el}>
                    {this.state.options.reverse().map(key =>(
                        <Option
                        value={key}
                        key={key}/>
                        ))}
                </select>
            </div>
        );
    }
}


export default Select;