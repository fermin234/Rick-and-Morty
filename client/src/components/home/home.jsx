//El home va a mostrar todos los characters
import React from "react";
import { connect } from 'react-redux'
import { getCharacters } from '../../redux/actions.js'
import Card from "../card/card.jsx";
import s from './home.module.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    return (
      <div className={s.containerCards}>
        {this.props.listCharacters?.map(e => {
          return (<>
            <Card key={e.id} name={e.name} species={e.species} origin={e.origin} image={e.image} />
          </>
          )
        }
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listCharacters: state.listCharacters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(getCharacters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)