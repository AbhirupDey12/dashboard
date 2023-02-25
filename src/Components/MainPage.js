import React, { Component } from 'react'

export default class MainPage extends Component {

     render() {
          return (
               <div className="MainPage">
                    {
                         this.props.todos?.map((element, index) => {
                              return (
                                   <div className="ticket" key={element.id} >
                                        <h2 className="ticket-heading">
                                             {element.name}
                                        </h2>
                                        <p className='ticket-description'>
                                             {element.description}
                                        </p>
                                        <h3 className="ticket-status">
                                             {element.status}
                                        </h3>
                                   </div>
                              );
                         })
                    }
               </div>
          )
     }

}

