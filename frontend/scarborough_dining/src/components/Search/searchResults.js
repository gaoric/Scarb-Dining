import React, { Component } from 'react'
import Restaurant from '../Restaurant'
import '../Restaurant/styles.css'
import axios from 'axios';
export class SearchResults extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            results: [],
            notFound: ''
        }

        this.getResults();
    }

    getResults()
    {
        axios.get('/restaurants/search_results', {
            params: {
                queryString: this.props.match.params.query
              }
          }).then(response => {
            this.setState({
                results: response.data,
                notFound: "Sorry, no results were found :("
            });
        })
        console.log(this.state.results)
        console.log(this.props.match.params.query)
        

    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            this.getResults();
          }
    }
    render() {
        if(this.state.results.length > 0) {
            return (
                <React.Fragment>
                    <div className="restaurants">
                    <h2 className="restaurant-list-title mb-4 font-weight-bold">Search Results</h2>
                        <div className="card-columns">
                            {
                                this.state.results.map(restaurant => {
                                    return <Restaurant key={restaurant._id} restaurant={restaurant} />
                                })
                            }
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <div className="restaurants">
                    <h2 className="restaurant-list-title mb-4 font-weight-bold">{this.state.notFound}</h2>
                </div>
            )
        }
    }
}

export default SearchResults