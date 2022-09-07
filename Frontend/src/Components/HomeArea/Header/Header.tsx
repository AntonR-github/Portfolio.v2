import CTA from "../CTA/CTA";
import "./Header.css";
import HeaderSocials from "../HeaderSocials/HeaderSocials";
import { useEffect, useState } from "react";
import {GrLogin} from 'react-icons/gr'
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import Login from "../../AuthArea/Login/Login";
import AddProject from "../../PortfolioArea/AddProject/AddProject";
import { AiOutlineFileAdd } from 'react-icons/ai';





function Header(): JSX.Element {

    const [user, setUser] = useState<UserModel>();
    const [showResults, setShowResults] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    

    function onClick(){
        if(showResults === false){
            setShowResults(true)
        }else{
            setShowResults(false)
        }
    }
    function onClickAdd(){
        if(showAdd === false){
            setShowAdd(true)
        }else{
            setShowAdd(false)
        }
    }

    

    useEffect(() => {

        setUser(store.getState().authState.user);
        const unsubscribe = store.subscribe(() => {
            setUser(store.getState().authState.user);
        });
        return () => unsubscribe();

    }, []);



    const Results = () => (
        <div className="login">
          {/* { !user && <span><Register /></span>} */}
          <br />
          { !user && <span><Login /></span>}
          <br />
        </div>
      )

      const ResultsAdd = () => (
        <div className="add">
           {user && <span><AddProject /></span>}
          
        </div>
      )
      

    return (
        
			<header>
                
                <div className="headerLogin">
                <GrLogin  
                onClick={onClick}   
                />
                    { showResults ? <Results /> : null }<br/>

                    { user &&  <AiOutlineFileAdd  
                onClick={onClickAdd}   
                />}
                </div>
                    { showAdd ? <ResultsAdd /> : null } 
                    <div className="header_socials" id="header_socials">
                    <h5>Hello I'm</h5>
                    <h1>Anton</h1>
                    <h5 className="text-light">And I'm a Fullstack Developer</h5> 
                    <HeaderSocials /> 
                </div>
                
                <CTA />
                
            </header>
       
    );
}

export default Header;




  
