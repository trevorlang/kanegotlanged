import styled from 'styled-components';

export const MapMarkerContainer = styled.div`
  min-width: 12rem;
  position: absolute;
  transform: translate(-50%, calc(-100% - 10px));
  border-radius: 3px;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #432954;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  background-color: ${props => {
    return props.hover ? '#612c78' : '#612c78';
  }}

  &:after, &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(97, 44, 120, 0);
    border-top-color: #612c78;
    border-width: 7px;
    margin-left: -7px;
  }
  &:before {
    border-color: rgba(67, 41, 84, 0);
    border-top-color: #432954;
    border-width: 8px;
    margin-left: -8px;
  }

  .location {
    font-weight: 800;
  }

  .title {
    font-weight: 300;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

export const MapLoadingContainer = styled.div`
  height: 25rem;
  width: 100vw;
  background-color: #e3d8ec;
`;
