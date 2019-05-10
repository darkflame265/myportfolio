import React, { Component } from 'react';
import { Grid, Cell, IconButton, Textfield, RadioGroup, Radio} from 'react-mdl';




class AddDB extends Component {


        
        state = {
          url: '',
          cardtitle: '',
          cardtext: '',
          github:'',
          livedemo:'',
          radiocount: '1',
        }

        addappDB = _ => {
            const { url, cardtitle, cardtext } = this.state;
            fetch(`http://localhost:4000/projectdb/add?background=${url}
            &cardtitle=${cardtitle}&cardtext=${cardtext}`)
            .then(response => response) // json형식이 아니기에 .json()을 붙이지 않음
            .then(this.getProjectdb)
            .then(this.setState({ url: '', cardtitle: '', cardtext: ''}))
            .catch(err => console.error(err))  
            .then(alert("등록이 완료되었습니다."))
         }

         addgameDB = _ => {
            const { url, cardtitle, cardtext } = this.state;
            fetch(`http://localhost:4000/gamedb/add?background=${url}
            &cardtitle=${cardtitle}&cardtext=${cardtext}`)
            .then(response => response) // json형식이 아니기에 .json()을 붙이지 않음
            .then(this.getGameDB)
            .then(this.setState({ url: '', cardtitle: '', cardtext: ''}))
            .catch(err => console.error(err))  
         }

         

         addpictureDB = _ => {
            const { url, cardtitle, cardtext } = this.state;
            fetch(`http://localhost:4000/picturedb/add?background=${url}
            &cardtitle=${cardtitle}&cardtext=${cardtext}`)
            .then(response => response) // json형식이 아니기에 .json()을 붙이지 않음
            .then(this.getpictureDB)
            .then(this.setState({ url: '', cardtitle: '', cardtext: ''}))
            .catch(err => console.error(err))  
         }

         addnovelDB = _ => {
            const { url, cardtitle, cardtext } = this.state;
            fetch(`http://localhost:4000/noveldb/add?background=${url}
            &cardtitle=${cardtitle}&cardtext=${cardtext}`)
            .then(response => response) // json형식이 아니기에 .json()을 붙이지 않음
            .then(this.getnovelDB)
            .then(this.setState({ url: '', cardtitle: '', cardtext: ''}))
            .catch(err => console.error(err)) 
            .then(alert("등록이 완료되었습니다."))
         }

        
        

        
          

        index = (d) => {
            d = document.getElementById("selectid").value;
            var e = document.getElementsByClassName("RadioGroup").value;
            if(d === "Web") {
                console.log(this.state)
               return(
                   <div>
                       <Textfield
                        onChange={() => {}}
                        label="fffffffff..."
                        floatingLabel
                        style={{width: '200px'}}
                    />
                   </div>
               )
            
        }
            else if(d=== "opt2") {
                alert("projects")
            }
        }

        testradio = (event) => {
            this.setState({radiocount: event.target.value})
        }

        url = (event) => {
            this.setState({url: event.target.value})
            console.log(this.state)
        }
        cardtitle = (event) => {
            this.setState({cardtitle: event.target.value})
            console.log(this.state)
            
        }
        cardtext = (event) => {
            this.setState({cardtext: event.target.value})
            
        }

        test = () => {
            
            if(this.state.radiocount === "1")
            {
                return(
                    
                    <div>
                        <Textfield
                        onChange={() => {}}
                        label="1111111111111..."
                        floatingLabel
                        style={{ width: '200px'}}
                    />
                    <br />
                    <button onClick={this.addappDB}>add appDB</button>
                    </div>
                )
                
            }
            else if(this.state.radiocount === "2")
            {
                return(
                    
                    <div>
                        <Textfield
                        onChange={() => {}}
                        label="22222222..."
                        floatingLabel
                        style={{ width: '200px'}}
                    />
                    <br />
                    <button onClick={this.addgameDB}>add gameDB</button>
                    </div>
                )
                
            }
            else if(this.state.radiocount === "3")
            {
                return(
                    
                    <div>
                        <Textfield
                        onChange={() => {}}
                        label="333333333333f..."
                        floatingLabel
                        style={{ width: '200px'}}
                    />
                    <br />
                    <button onClick={this.addpictureDB}>add pictureDB</button>
                    </div>
                )
               
            }
            else if(this.state.radiocount === "4")
            {
                return(
                    
                    <div>
                        <Textfield
                        onChange={() => {}}
                        label="444444444444444..."
                        floatingLabel
                        style={{ width: '200px'}}
                    />
                    <br />
                    <button onClick={this.addnovelDB}>add products</button>
                    </div>
                    
                )
                
            }
        }

        
       
    render() {
        
        return(
            <div>
                <div>
                    
                    <label for="site-search">목표: 입력창이 투명하고 밋밋함 => 꾸미자!!,데이터  삭제기능 </label>
                    <RadioGroup onChange={this.testradio} container="ul" childContainer="li" name="demo2" value={this.state.radiocount}>
                        <Radio value="1" ripple>Web</Radio>
                        <Radio value="2">Projects</Radio>
                        <Radio value="3">Picture</Radio>
                        <Radio value="4">Nobel</Radio>
                    </RadioGroup>
                    

                    

                    <br />
                    <br />
                    <Textfield
                        onChange={this.url}
                        label="url..."
                        floatingLabel
                        style={{width: '200px'}}
                        value = {this.state.url}
                    />
                    <br />
                    <br />
                    <Textfield
                        onChange={this.cardtitle}
                        label="cardtitle..."
                        floatingLabel
                        style={{width: '200px'}}
                        value = {this.state.cardtitle}
                    />
                    <br />
                    <br />
                    <Textfield
                        onChange={this.cardtext}
                        label="cardtext..."
                        floatingLabel
                        style={{width: '200px'}}
                        value = {this.state.cardtext}
                    />
                    <br />
                    <br />

                    {this.test()}
                    <br />
                    <br />
                    
                    <button onclick={ console.log(this.state)}>get console</button>
                    
                    
                    
                   
                 </div>
                 

            </div>
        )
    }
}
export default AddDB;