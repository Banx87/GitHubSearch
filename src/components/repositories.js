import React from "react";
import { Link } from "react-router-dom";

const Repositories = props => (
  <div className="repoPreList">
    <div className="row">
      <h2>List of repositories</h2>
      {props.repos.length > 0 &&
        props.repos.map(repo => {
          return (
            <div key={repo.id} className="repoList">
              <div className="repoText">
                <h4 className="repoTitle">{repo.name}</h4>
              </div>
              <button className="repoButton">
                <Link
                  to={{
                    pathname: `/repository/${repo.url}`,
                    state: { repo: repo.name }
                  }}
                >
                  View Repository
                </Link>
              </button>
              {console.log(props)}
            </div>
          );
        })}
    </div>
  </div>
);

export default Repositories;
