import React, {Component} from 'react';
import PeopleList from 'components/people-list';
import Loader from 'components/loader';
// MOCK DATA
import * as People from 'data/people';
import * as Repos from 'data/repos';

export default class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      'people': People.data,
      'repos': Repos.data
    }

    // this.getPeople();
    // this.getPersonRepos = this.getPersonRepos.bind(this);
  }

  getPeople() {
    // this.props.githubService.getMembers().then(data => {
    //   this.setState({ 'people': data });
    // });
  }

  getPersonRepos(repo_url) {
    // return this.props.githubService.getRepos(repo_url);
  }


  render() {
    return (
      <div>
        <Loader orange />
        <PeopleList
          people={this.state.people}
          repos={this.state.repos}
        />
      </div>
    );
  }
}
