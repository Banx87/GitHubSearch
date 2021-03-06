// Render the selected repository
import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { Spinner } from "./Spinner";

class Repository extends React.Component {
  state = {
    activeRepo: [],
    commits: []
  };

  componentDidMount = async () => {
    const path = `${this.props.location.pathname.substring(12)}`;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/${path}`);
    const response = await req.json();
    this.setState({ activeRepo: response });

    // get the 10 latest commits of this repository
    const commitReq = await fetch(`${path}/commits`);
    const commitRes = await commitReq.json();
    const commitAmount = 10;
    const commits = commitRes.slice(0, commitAmount);
    this.setState({ commits: commits });
  };

  render() {
    const repository = this.state.activeRepo;
    const commits = this.state.commits;

    // const dateToFormat = "DD.MM.YYYYT12:59+0200";

    console.log(commits);
    if (repository === undefined || repository.length === 0) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="Commit-Container">
            {this.state.activeRepo.length !== 0 && (
              <div className="active-repo">
                <h1 className="repoTitle">Repository: {repository.name}</h1>
                <button className="repoList__btn">
                  <Link to="/">Go Back</Link>
                </button>
                <div className="commits">
                  {commits.map((commit, index) => {
                    return (
                      <div key={`${commit.sha}`} className="CommitList">
                        <img
                          src={repository.owner.avatar_url}
                          alt="Author"
                          className="Repo_img"
                        />
                        <h3 className="AuthorName">
                          Author: {commit.commit.author.name}
                        </h3>
                        <span className="messageHeader">Commit Message</span>
                        <p className="CommitMessage">{commit.commit.message}</p>
                        <p className="date">
                          <span>Date: </span>
                          <Moment>{commit.commit.committer.date}</Moment>
                        </p>
                      </div>
                    );
                  })}
                  <button className="repoList__btn">
                    <Link to="/">Go Back</Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Repository;

// jossa esitetään kyseisen repositoryn commit-historiaa
// * Maksimissaan 10 viimeisintä committia
//     * Kustakin commitista:
// Authorin nimi,
// avatar-kuva (jos on),
// ajankohta (author date) ja
// commit-viesti
