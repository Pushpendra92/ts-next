import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectAptType,
  selectSlider,
} from 'src/store/actions/apartmentActions';
class ApartmentDropdown extends Component {
  constructor(props) {
    super(props);
  }

  selectedAptType = (event) => {
    let selectedApt = this.props.aptTypes.find(
      (item) => item.type === event.target.value,
    );
    let id = this.props.aptTypes.indexOf(selectedApt);
    this.props.setselectedAptTypeStore(selectedApt);
    this.props.courouselPositionStore(id);
  };
  render() {
    return (
      <>
        <div className="relative w-full">
          <svg
            className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fillRule="nonzero"
            />
          </svg>
          <select
            className="
  focus:ring-2 focus:ring-#66afe9 focus:ring-opacity-25  
  w-full border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={this.props.selectedAptType.type}
            // defaultValue={this.props.setselectedAptTypeStore}
            onChange={this.selectedAptType}
          >
            {this.props.aptTypes.length &&
              this.props.aptTypes.map((aptType, index) => (
                <option key={index} value={aptType.type}>
                  {aptType.type} &nbsp; {aptType.cost}/night
                </option>
              ))}
          </select>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedAptType: state.apt_info.selectedAptType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setselectedAptTypeStore: (selectedAptType) => {
      dispatch(selectAptType({ selectedAptType }));
    },
    courouselPositionStore: (caraouselPosition) => {
      dispatch(selectSlider({ caraouselPosition }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDropdown);
