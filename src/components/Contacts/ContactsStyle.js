import styled from 'styled-components';

export const StyledList = styled('ul')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  @media (min-width: 478px) {
    width: 450px;
  }
  padding: 0 0 20px 0;
  border-top: 1px solid #d3d9de;
`;
export const StyledListItem = styled('li')`
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
  &:nth-child(odd) {
    background-color: #ffffff;
  }
  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;
export const StyledListItemText = styled('p')`
  display: block;
  padding-left: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  color: #122236;
  @media (min-width: 478px) {
    font-size: 18px;
  }
`;
export const StyledDeletButton = styled('button')`
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;

  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans',
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:hover {
    background-color: #b3d3ea;
    color: #2c5777;
  }
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }
  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;
