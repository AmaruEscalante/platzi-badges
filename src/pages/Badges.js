import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import MiniLoader from "../components/MiniLoader";
import PageError from "../components/PageError";

import api from "../api";

class Badges extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    // this.fetchCharacters();
    this.fetchData();

    console.log("3. ComponentDidMount()");

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log("fetched data");
    console.log(data);
    this.setState({
      data: data,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("6. componentWillUnmount");
    clearTimeout(this.timeoutId);
  }

  render() {
    if (this.state.loading === true && !this.state.data) {
      return (
        <div>
          <PageLoading />
        </div>
      );
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    console.log("2/4. render()");
    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <MiniLoader/>}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Badges;
