import React from "react"
import "./App.css"
import CardList from "./Component/Card-List/Card-list"
import SearchBox from "./Component/Search-box/SearchBox"




class Monster extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      monsters : [],
      searchText : ""
    }
  }
  handleChange= (e) => {
    this.setState(() => ({ searchText: e.target.value }))
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const data = response.json()
      console.log(data)
      return data })
    .then((users) => this.setState({ monsters : users}))
  }
  render () {
    const { monsters , searchText } = this.state
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monster RoloDex</h1>
        <SearchBox placeholder="SearchMonster" handleChange={this.handleChange}/>
         <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default Monster;
