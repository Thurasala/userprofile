
import './App.css';
import UserProfile from './components/UserProfile';
import { Component } from 'react';

const initialuserDetailsList =[
{  
  id:1,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
  name:"Bharathi",
  role:"React Developer",
},
{
  id:2,
  imageUrl:" https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Pradeep",
  role:".Net Developer",
},
{
  id:3,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
  name:"Vicky",
  role:"UI Developer",
},
{
  id:4,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
  name:"Poori",
  role:"XML Developer",
},
] ;




// function App() {
//   return (
//     // <div className="App">
//     //  <UserProfile userDetails={userDetails}/> 
//     // </div>
//     <div className="list-container">
//       <h1 className='title'>Users List</h1>
//       <ul>
//         {userDetailsList.map(eachItem => (
//           <UserProfile userDetails={eachItem} key={eachItem.id} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
            searchInput:"",
            userDetailsList:initialuserDetailsList,
           };
  onChangeSerachInput = (event) => {
    // console.log(event.target.value);
    this.setState({searchInput:event.target.value})

 }

 deleteUser = (id) => {
  const {userDetailsList} = this.state;
  const filteredUserData = userDetailsList.filter(each =>
     each.id !== id
    )
    this.setState({userDetailsList:filteredUserData})

 }
  render(){
   const {searchInput,userDetailsList} = this.state;

   const searchResult = userDetailsList.filter(eachUser =>
     eachUser.name.includes(searchInput)
    )
 
  return (
   
 <div className="list-container">
      <h1 className='title'>Users List</h1>
      <input type="search" 
      onChange={this.onChangeSerachInput}
      value={searchInput}/>
          <ul>
            {searchResult.map(eachItem => (
           <UserProfile userDetails={eachItem} key={eachItem.id} deleteUser={this.deleteUser} />
           ))}
          </ul>
    </div>

  )
   }

};
export default App;

