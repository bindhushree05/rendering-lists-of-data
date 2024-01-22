import { Component } from "react";
import React from  "react";
import '../App.css'
class HigherOrderComponents extends Component{
    //progression 1
    constructor(){
        super();
        this.state={
           userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    //progression 2
    renderItems = () => {
        const data = this.state.userData;

        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <div className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <p>Id: {item.id}</p>
                    <p>Name : {item.name}</p>
                    <p>User Type: {item.user_type}</p>
               </div>
            </React.Fragment>
        ));
        // return mapRows;

        // progression 3
        const filteredData1= data.filter(item=>item.user_type==='Designer')
        const mapRows1=filteredData1.map((item)=>(
            <React.Fragment key={item.id}>
            <div className="list-elements">
                <p>Id: {item.id}</p>
                <p>Name : {item.name}</p>
                <p>User Type: {item.user_type}</p>
           </div>
        </React.Fragment>
        ))
        // return mapRows1
    

        //progression 4
        const filteredData2= data.filter(item=>item.name[0]==='J')
        const mapRows2=filteredData2.map((item)=>(
            <React.Fragment key={item.id}>
            <div className="list-elements">
                <p>Id: {item.id}</p>
                <p>Name : {item.name}</p>
                <p>User Type: {item.user_type}</p>
           </div>
        </React.Fragment>
        ))
        // return mapRows2

        //progression 5
        const filteredData3= data.filter(item=>item.age>28 && item.age<=50)
        const mapRows3=filteredData3.map((item)=>(
            <React.Fragment key={item.id}>
            <div className="list-elements">
                <p>Id: {item.id}</p>
                <p>Name : {item.name}</p>
                <p>User Type: {item.user_type}</p>
           </div>
        </React.Fragment>
        ))

        //progression 6
        const totalexperience=filteredData1.map(item=>item.years).reduce((a,c)=>a+c,0);

        return(
            <>
            <div className="container">{mapRows}</div>
            <h2>Display based on user type</h2>
            <div className="container">{mapRows1}</div>
            <h2>Filter all data starting with J</h2>
            <div className="container">{mapRows2}</div>
            <h2>Filter all data based on age greater than 28 and age less than or equal to 50</h2>
            <div className="container">{mapRows3}</div>
            <h2>Find the total years of the designers</h2>
            <div className="container">{totalexperience}</div>
            </>

            
        )
    };
    
    render(){
        return(
            <React.Fragment>
            <h2>Display all items</h2>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
          </React.Fragment> 
        )
    }

    
}

export default HigherOrderComponents