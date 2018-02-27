import React, { Component, Fragment } from 'react'
import GoogleMaps from 'google-maps'
import './styles.css'

class GMap extends Component {
  constructor() {
    super()
    this.state = {
      markers: [],
      coordinates: []
    }
    
  }
  componentInit() {
    GoogleMaps.KEY = 'AIzaSyBK5HnlwyVp2XHUjfSAeSdG6pXVVCE5T1Q'
    GoogleMaps.load(() => {
      this.initMap(this.props.positions)
    })
  }
  componentDidMount() {
    this.componentInit()
  }
  componentWillReceiveProps(nextProps) {
    if(!Boolean(this.props.positions) && Boolean(nextProps.positions)) {
      this.componentInit()
    }
  }
  clearMarkers(e) {
    const { onChange } = this.props
    e.preventDefault()
    this.state.markers.forEach(item => item.setMap(null))
    this.state.coordinates = []

    onChange({ coordinates: [] })
  }

  initMap(positions = []) {
    const {
      allowDelete,
      allowAdd,
      onChange = () => {}
    } = this.props

    let markers = this.state.markers
    let coordinates = this.state.coordinates

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {
        lat: 53.9,
        lng: 27.56667
      }
    })

    if(allowAdd) {
      map.addListener('click', e => {
        const coord = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
  
        markers.push(new google.maps.Marker({
          position: coord,
          map: map
        }))

        coordinates.push(coord)
        
        onChange({ coordinates })

        this.setState({
          markers,
          coordinates
        })
      });
    }

    markers = [
      ...markers,
      ...positions.map(item => new google.maps.Marker({
        position: item,
        map: map
      }))
    ]

    this.setState({
      markers
    })
  }
  render() {
    return (
      <Fragment>
        { this.props.allowDelete && <a href="#" className="btn btn-dark remove-markers" onClick={ this.clearMarkers.bind(this) }>Убрать все маркеры</a> }
        <div className="map-wrapper">
          <div id="map"></div>
        </div>
      </Fragment>
    )
  }
}
export default GMap