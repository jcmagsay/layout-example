import React, {Component} from 'react';
import Avatar from 'components/avatar';
import Text from 'components/text';
// STYLES
import 'styles/components/list';
import 'styles/helpers/_padding';

export default class PeopleList extends Component {
  constructor () {
    super();

    this.location = 'Chicago, IL';
    this.email = 'user@example.com';
    this.memberSince = '01/01/2011';
  }


  _renderRepos() {
    return (
      <ul className="list--bullets">
        {this.props.repos.map((repo, i) => {
          return (
            <li key={`repos-list-${i}`}>
              {repo.name}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    if (!this.props.repos) return <div/>;

    return (
      <ul className="list">
        {this.props.people.map((person, i) => {
          return(
            <li
              key={`person-listitem-${i}`}
              className="list__item padding--2"
            >
              <div className="list__avatar">
                <Avatar
                  altTxt={`User Img: ${person.login}`}
                  size="sm"
                  img={person.avatar_url}
                />
              </div>
              <section className="list__details">
                <Text type="display-sm">
                  {person.login}
                </Text>
                <Text type="body">{this.email}</Text>
                <Text type="body">{this.location}</Text>
                <Text type="caption">Member Since: {this.memberSince}</Text>
                <div className="padding--top-1">
                  <Text type="title">
                    {`${person.login} owns the following repositories:`}
                  </Text>
                  <Text type="body">
                    {this._renderRepos(person)}
                  </Text>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    );
  }
}
