import React from "react";
import { Link } from "react-router-dom";

const Repositories = props => (
  <div className="repoPreList">
    {/* <div>{console.log("REPOSITORIES PROPS: " + props.repos)}</div> */}
    <h2>List of repositories</h2>
    <div className="row">
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
            </div>
          );
        })}
    </div>
  </div>
);

export default Repositories;
