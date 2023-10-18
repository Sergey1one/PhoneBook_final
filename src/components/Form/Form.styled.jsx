import styled from 'styled-components'

export const FormContacts=styled.form`
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  padding: 20px;
  border-radius: 5px;
  background-color: lightGrey;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);

`

export const Input=styled.input`
    border: 0;
  outline: 0;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 5px;
  background-color: blue;
 
  font-size: 16px;
  box-shadow: inset 2px 2px 5px grey,
    inset -5px -5px 10px white;
  transition: all 0.2s ease-in-out;
  appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px grey,
      inset -1px -1px 2px white;
  }
`;

export const AddButton = styled.button`
  border-radius: 20px;
  margin: 0 auto;
  padding: 10px 20px;
  
  background-color: ${props => props.theme.colors.colorBg};
  color: ${props => props.theme.colors.buttonText};
  box-shadow: -1px -1px 5px ${props => props.theme.colors.white},
    5px 5px 10px ${props => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;

