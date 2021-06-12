import React from "react";
import { Link } from "react-router-dom";
import api from "../api";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    isOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  openModal = async (e) =>{
    this.setState({isOpen: true})
  }

  handleModalClose = async (e) =>{
    this.setState({isOpen: false})
  }

  handleDeleteBadge = async (e) =>{

    try {
      const res = await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading:true })
      this.props.history.push('/badges');
    } catch(error){
      this.setState({ loading: false, error: error});
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails 
      deleteBadge={this.handleDeleteBadge}
      onClose={this.handleModalClose}
      openModal={this.openModal} 
      isOpen={this.state.isOpen} 
      badge={this.state.data}/>
    );
  }
}

export default BadgeDetailsContainer;
