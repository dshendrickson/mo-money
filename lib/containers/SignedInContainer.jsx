import React, { Component } from 'react'
import { pick, map, extend, filter, pullAllBy } from 'lodash'
import moment from 'moment'
import firebase, { reference, signIn, signOut } from '../firebase'
import CardComponent from '../components/CardComponent'
import InputContainer from '../containers/InputContainer'

export default class SignedInContainer extends Component {
  constructor() {
    super()
    this.state = {
      cardArray: [],
      addJob: false,
    }
  }
  componentWillUpdate() {
    if (this.props.cardArray !== this.state.cardArray) {
      this.setState({ cardArray: this.props.cardArray })
    }
  }

  addJobToCardArray = (job) => {
    this.state.cardArray.push(job)
    this.setState({ cardArray: this.state.cardArray })
    this.props.pushJobsToDB(this.state.cardArray)
  }

  removeJobFromArray = (job) => {
    const newCardArray = pullAllBy(this.state.cardArray, [{ id: job.id }], 'id')
    this.setState({ cardArray: newCardArray })
    this.props.pushJobsToDB(this.state.cardArray)
  }

  updateJobInArray = (targetJob) => {
    this.state.cardArray.forEach((job, i) => {
      if (job.id === targetJob.id) {
        const newCardArray = this.state.cardArray
        newCardArray[i] = targetJob
        this.setState({ cardArray: newCardArray })
        this.props.pushJobsToDB(this.state.cardArray)
      }
    })
  }

  toggleAddJob = () => {
    this.setState({ addJob: !this.state.addJob })
  }

  signOut() {
    signOut()
  }

  render() {
    return (
      <div className="signed-in-container">
        <header className="signed-in-header">
          <a href="/public" className="signed-in-logo">
            MoMoney Logo
          </a>
        </header>
        <main className="signed-in-body">
          <button
            className={this.state.addJob ? 'signed-in-add-card-button open' : 'signed-in-add-card-button closed'}
            onClick={() => this.setState({ addJob: !this.state.addJob })}
            aria-label="add new job"
          >
            <div>
              <span className="first" />
              <span className="last" />
            </div>
          </button>
          {this.state.addJob ?
            <InputContainer
              toggleAddJob={this.toggleAddJob}
              addJobToCardArray={this.addJobToCardArray}
            /> : null }
          { this.state.cardArray.map(card =>
            <CardComponent
              updateJobInArray={this.updateJobInArray}
              removeJobFromArray={this.removeJobFromArray}
              card={card}
              key={card.id}
            />
           ) }
          <button
            className="sign-out-button waves-effect"
            onClick={() => this.signOut()}
            aria-label="sign out"
          >Sign Out</button>
        </main>
      </div>
    )
  }
}
